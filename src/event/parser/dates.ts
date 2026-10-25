import type { EventDates } from '../event';

const normalizeDigits = (text: string): string =>
  text.replace(/[０-９]/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) - 0xfee0)
  );

const normalizeYear = (year: number, now: Date): number =>
  year < 100 ? Math.floor(now.getFullYear() / 100) * 100 + year : year;

const findAllYearAndDays = (text: string, now: Date): Date[] => {
  // 空白は削除せず、日付と直後の時刻の数字が連結されるのを防ぐ。
  const dateRegex =
    /(?<![\d:：])(?:(?<year>\d{1,4})\s*[/年-]\s*)?(?<month>\d{1,2})\s*[/月-]\s*(?<day>\d{1,2})日?(?![\d:：])/g;
  const dates: Date[] = [];

  for (const match of text.matchAll(dateRegex)) {
    const { year, month, day } = match.groups!;
    const monthNumber = Number(month);
    const dayNumber = Number(day);
    const reference = dates.at(-1) ?? now;
    let yearNumber = year ? normalizeYear(Number(year), now) : reference.getFullYear();

    if (!year && (monthNumber < reference.getMonth() + 1 ||
      (monthNumber === reference.getMonth() + 1 && dayNumber < reference.getDate()))) {
      yearNumber++;
    }

    // 文字列のDateパースに依存せず、ローカル日付として生成・検証する。
    const date = new Date(yearNumber, monthNumber - 1, dayNumber);
    if (date.getFullYear() !== yearNumber || date.getMonth() !== monthNumber - 1 ||
      date.getDate() !== dayNumber) {
      throw new RangeError(`存在しない日付です: ${match[0]}`);
    }
    dates.push(date);
  }
  return dates;
};

type Time = { hour: number; minute: number };

const findAllTimes = (text: string): Time[] => {
  const timeRegex =
    /(?<!\d)(?<hour>\d{1,2})(?:[:：](?<colonMinute>\d{1,2})(?!\d)|時(?!間)(?:(?<minute>\d{1,2})分?)?)(?!\d)/g;
  return Array.from(text.matchAll(timeRegex), (match) => {
    const hour = Number(match.groups!.hour);
    const minute = Number(match.groups!.colonMinute ?? match.groups!.minute ?? 0);
    if (hour > 23 || minute > 59) {
      throw new RangeError(`不正な時刻です: ${match[0]}`);
    }
    return { hour, minute };
  });
};

const findTimeRange = (text: string): Time | undefined => {
  const match = text.match(/(?<!\d)(?<hour>\d{1,2})時間(?<minute>半|\d{1,2}分)?/);
  if (!match) return;
  return {
    hour: Number(match.groups!.hour),
    minute: match.groups!.minute === '半' ? 30 : parseInt(match.groups!.minute ?? '0'),
  };
};

const setTimeToDate = (date: Date, time: Time): Date => {
  const result = new Date(date);
  result.setHours(time.hour, time.minute, 0, 0);
  return result;
};

export const extractStartAndEndDates = (text: string): EventDates => {
  const normalizedText = normalizeDigits(text);
  const now = new Date();
  const dates = findAllYearAndDays(normalizedText, now);
  const times = findAllTimes(normalizedText);
  const startDate = dates[0] ?? now;

  if (times.length === 0) {
    return { isAllday: true, start: startDate };
  }

  const start = setTimeToDate(startDate, times[0]);
  const duration = findTimeRange(normalizedText);
  let end: Date;
  if (duration || times.length === 1) {
    const { hour, minute } = duration ?? { hour: 1, minute: 0 };
    end = new Date(start);
    end.setMinutes(end.getMinutes() + hour * 60 + minute);
  } else {
    end = setTimeToDate(dates[1] ?? startDate, times[1]);
    // 終了日が省略されたときだけ、早い終了時刻を翌日として扱う。
    if (dates.length < 2 && end.getTime() < start.getTime()) {
      end.setDate(end.getDate() + 1);
    }
    if (end.getTime() < start.getTime()) {
      throw new RangeError('終了日時は開始日時以降にしてください。');
    }
  }

  return { isAllday: false, start, end };
};
