import assert from 'node:assert/strict';
import { test } from 'node:test';
import { extractStartAndEndDates } from '../src/event/parser/dates';
import { makeGoogleCalendarEventURL } from '../src/event/event';

const parts = (date: Date) => [
  date.getFullYear(), date.getMonth() + 1, date.getDate(),
  date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds(),
];

const cases: [string, number[], number[]][] = [
  ['2026/11/1 10:00-12:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['2026/11/01 10:00-12:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['2026年11月1日 10:00-12:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['2026 / 11 / 1 10:00-12:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['2026-11-01 10:00-12:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['26/11/1 10:00-12:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['2026/11/01 23:00-01:00', [2026, 11, 1, 23, 0], [2026, 11, 2, 1, 0]],
  ['2026/12/31 23:00-01:00', [2026, 12, 31, 23, 0], [2027, 1, 1, 1, 0]],
  ['2027/12/31 23:00-1/1 01:00', [2027, 12, 31, 23, 0], [2028, 1, 1, 1, 0]],
  ['2026/11/01 10:00 - 2026/11/02 12:00', [2026, 11, 1, 10, 0], [2026, 11, 2, 12, 0]],
  ['2026/11/01 １０：００-１２：００', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 0]],
  ['２０２６年１１月１日 １０時 ２時間半', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 30]],
  ['2026/11/01 9時5分-10時15分', [2026, 11, 1, 9, 5], [2026, 11, 1, 10, 15]],
  ['2026/11/01 10:00 2時間半', [2026, 11, 1, 10, 0], [2026, 11, 1, 12, 30]],
  ['2026/11/01 23:45 1時間30分', [2026, 11, 1, 23, 45], [2026, 11, 2, 1, 15]],
  ['2026/11/01 10:00', [2026, 11, 1, 10, 0], [2026, 11, 1, 11, 0]],
  ['2028/02/29 10:00', [2028, 2, 29, 10, 0], [2028, 2, 29, 11, 0]],
];

for (const [input, start, end] of cases) {
  test(input, () => {
    const result = extractStartAndEndDates(input);
    assert.equal(result.isAllday, false);
    if (result.isAllday) throw new Error('Expected timed event');
    assert.deepEqual(parts(result.start), [...start, 0, 0]);
    assert.deepEqual(parts(result.end), [...end, 0, 0]);
    assert.ok(result.end >= result.start);
    const url = new URL(makeGoogleCalendarEventURL({ text: 'test', details: '', dates: result }));
    const format = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    assert.equal(url.searchParams.get('dates'), `${format(result.start)}/${format(result.end)}`);
  });
}

for (const [input, duration] of [['10:00 2時間半', 150], ['10:00', 60], ['23:00-01:00', 120]] as const) {
  test(`日付省略: ${input}`, () => {
    const before = new Date();
    const result = extractStartAndEndDates(input);
    const after = new Date();
    assert.equal(result.isAllday, false);
    if (result.isAllday) throw new Error('Expected timed event');
    assert.ok([before.toDateString(), after.toDateString()].includes(result.start.toDateString()));
    assert.equal(result.start.getSeconds(), 0);
    assert.equal(result.start.getMilliseconds(), 0);
    assert.equal((result.end.getTime() - result.start.getTime()) / 60_000, duration);
  });
}

for (const input of [
  '2026/02/30 10:00', '2026-02-29 10:00', '2026/04/31',
  '2026/13/01', '2026/00/10', '2026/11/00',
  '2026/11/01 25:00', '2026/11/01 10:60',
  '2026/11/02 10:00 - 2026/11/01 12:00',
]) {
  test(`不正な日時を拒否: ${input}`, () => {
    assert.throws(() => extractStartAndEndDates(input), RangeError);
  });
}

test('時刻なしの日付は終日予定', () => {
  const result = extractStartAndEndDates('2026/11/01');
  assert.equal(result.isAllday, true);
  assert.deepEqual(parts(result.start), [2026, 11, 1, 0, 0, 0, 0]);
});

test('空の入力は今日の終日予定', () => {
  const before = new Date();
  const result = extractStartAndEndDates('');
  const after = new Date();
  assert.equal(result.isAllday, true);
  assert.ok([before.toDateString(), after.toDateString()].includes(result.start.toDateString()));
});
