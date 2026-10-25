import assert from 'node:assert/strict';
import { test } from 'node:test';

test('不正な入力では追加せず、修正後は最新の入力で追加する', async () => {
  const elements = new Map<string, any>();
  for (const id of ['eventDetails', 'useHtml', 'generateLink', 'previewTitle',
    'previewDescription', 'previewLocation', 'previewDate']) {
    const listeners = new Map<string, () => void>();
    elements.set(id, {
      value: '', checked: false, disabled: false, innerText: '', innerHTML: '', listeners,
      addEventListener: (name: string, callback: () => void) => listeners.set(name, callback),
    });
  }
  const opened: string[] = [];
  const originals = ['document', 'window', 'DOMParser'].map((key) =>
    [key, Object.getOwnPropertyDescriptor(globalThis, key)] as const
  );
  Object.defineProperties(globalThis, {
    document: { configurable: true, value: { getElementById: (id: string) => elements.get(id) } },
    window: { configurable: true, value: { open: (url: string) => opened.push(url) } },
    DOMParser: { configurable: true, value: class {
      parseFromString(html: string) {
        return { querySelectorAll: () => [], documentElement: { innerHTML: html } };
      }
    } },
  });
  try {
    await import('../src/index');
    const input = elements.get('eventDetails');
    const button = elements.get('generateLink');
    input.value = '会議\n2026/02/30 10:00';
    // debounce完了前のクリックでも、不正な入力のURLを開かない。
    button.listeners.get('click')();
    assert.equal(opened.length, 0);
    assert.equal(button.disabled, true);
    assert.match(elements.get('previewDate').innerText, /存在しない日付/);

    input.value = '修正した会議\n2026/11/1 10:00-12:00';
    input.listeners.get('input')();
    await new Promise((resolve) => setTimeout(resolve, 250));
    assert.equal(button.disabled, false);
    assert.equal(elements.get('previewTitle').innerText, '修正した会議');

    input.value = '最新の会議\n2026-11-02 10:00-12:00';
    button.listeners.get('click')();
    assert.equal(opened.length, 1);
    const url = new URL(opened[0]);
    assert.equal(url.searchParams.get('text'), '最新の会議');
    const format = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    assert.equal(url.searchParams.get('dates'),
      `${format(new Date(2026, 10, 2, 10))}/${format(new Date(2026, 10, 2, 12))}`);
  } finally {
    for (const [key, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
});
