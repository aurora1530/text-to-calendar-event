import { getClipboardHTML } from './lib/clipboard';
import { makeGoogleCalendarEventURL } from './event/event';
import { makeGoogleCalendarEventParams } from './event/parser/main';
import { setPreview } from './lib/preview';
import { removeAllStyleAttributes } from './lib/html';
import { debounce } from './utils/debounce';

let eventParams = makeGoogleCalendarEventParams('');
let clipboardHtml: string | undefined;

document?.getElementById('eventDetails')?.addEventListener('paste', async () => {
  const useHtml =
    (document.getElementById('useHtml') as HTMLInputElement)?.checked ?? false;
  clipboardHtml = useHtml ? await getClipboardHTML() : undefined;
  clipboardHtml = clipboardHtml ? removeAllStyleAttributes(clipboardHtml) : undefined;

  // Pasteイベントの処理が終わったら、手動でinputイベントをトリガーする
  const eventDetailsElement = document.getElementById('eventDetails') as HTMLTextAreaElement;
  const inputEvent = new Event('input', { bubbles: true });
  eventDetailsElement.dispatchEvent(inputEvent);
});

document?.getElementById('eventDetails')?.addEventListener(
  'input',
  debounce(() => {
    const inputText = (document.getElementById('eventDetails') as HTMLTextAreaElement)
      ?.value;

    const text = clipboardHtml
      ? inputText.split('\n')[0] + '\n' + clipboardHtml
      : inputText;
    eventParams = makeGoogleCalendarEventParams(text);
    setPreview(eventParams);
  }, 200)
);

document?.getElementById('generateLink')?.addEventListener('click', () => {
  const eventUrl = makeGoogleCalendarEventURL(eventParams);

  window.open(eventUrl, '_blank');
});
