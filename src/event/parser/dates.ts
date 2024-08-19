import { EventDates } from '../event';

const zenkakuDigitsToHankaku = (text: string): string => {
  return text.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
};

const normalizeYear = (year: number): number => {
  if (year < 100) {
    const currentCentury = Math.floor(new Date().getFullYear() / 100) * 100;
    return year + currentCentury;
  }
  return year;
};

const isInvalidDate = (date: Date): boolean => {
  return Number.isNaN(date.getTime());
};

const findAllYearAndDays = (text: string): Date[] => {
  const normalizedText = zenkakuDigitsToHankaku(text).replace(/\s/g, '');
  const dateRegex =
    /(?:(?<year>\d{1,4}[\/年])?\s*(?<date>\d{1,2}(?:[\/-]\d{1,2}|\s?[\/月]\s?\d{1,2}日?)))/g;
  const matches = Array.from(normalizedText.matchAll(dateRegex));

  const dates = matches.map((match) => {
    const year = match.groups?.year
      ? normalizeYear(parseInt(match.groups.year.replace(/[\/年]/g, '')))
      : new Date().getFullYear();
    const date = match.groups?.date.replace(/\s|月|日/g, '/').replace(/[\/年]/g, '-');
    return new Date(`${year}-${date}`);
  });

  return dates.filter((date) => !isInvalidDate(date));
};

type Time = {
  hour: number;
  minute: number;
};

const findAllTimes = (text: string): Time[] => {
  const timeRegex = /(?<hour>\d{1,2})[:：時](?<minute>\d{2})?(?!間)/g;
  const matches = Array.from(text.matchAll(timeRegex));

  const times = matches.map((match) => {
    return {
      hour: parseInt(match.groups?.hour ?? '0'),
      minute: parseInt(match.groups?.minute ?? '0'),
    };
  });

  return times;
};

const findTimeRange = (text: string): Time | undefined => {
  const timeRegex = /(?<hour>\d{1,2})時間(?<minute>(半|\d{1,2}分))?/;
  const match = text.match(timeRegex);

  if (!match || !match.groups?.hour) {
    return;
  }

  const hour = parseInt(match.groups.hour);
  const minute =
    match.groups?.minute === '半' ? 30 : parseInt(match.groups?.minute ?? '0');
  return { hour, minute };
};

const addTime = (x: Time, y: Time): Time => {
  return {
    hour: x.hour + y.hour,
    minute: x.minute + y.minute,
  };
};

const setTimeToDate = (date: Date, time: Time): Date => {
  return new Date(date.setHours(time.hour, time.minute));
};

export const extractStartAndEndDates = (text: string): EventDates => {
  const yearAndDays = findAllYearAndDays(text);
  const times = findAllTimes(text);

  if (yearAndDays.length === 0) {
    return {
      isAllday: true,
      start: new Date(),
    };
  }

  if (times.length === 0) {
    return {
      isAllday: true,
      start: yearAndDays[0],
    };
  }

  // startの日付に時刻を設定
  const start = setTimeToDate(yearAndDays[0], times[0]);

  // endの日付を指定。時刻が複数ある場合は２つ目を、ない場合は１つ目（startと同じ）を使う。
  // ただし、２つ目の日付が１つ目より前の場合は１つ目を使う。
  const endTargetDate =
    yearAndDays.length > 1 && yearAndDays[1].getTime() > yearAndDays[0].getTime()
      ? yearAndDays[1]
      : yearAndDays[0];

  // 所要時間が指定されている場合は、startの時刻に所要時間を加算してendの時刻を設定
  // 指定されていない場合は、２つ目の時刻またはstartの時刻に１時間を加算してendの時刻を設定
  const timeRange = findTimeRange(text);
  const endTargetTime = timeRange
    ? addTime(times[0], timeRange)
    : times.length > 1
    ? times[1]
    : addTime(times[0], { hour: 1, minute: 0 });
  const end = setTimeToDate(endTargetDate, endTargetTime);

  return {
    isAllday: false,
    start,
    end,
  };
};
