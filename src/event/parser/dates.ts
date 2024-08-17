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

const findAllYearAndDays = (text: string): Date[] => {
  const normalizedText = zenkakuDigitsToHankaku(text);

  const dateRegex =
    /(?:(?<year>\d{1,4}年)?\s*(?<date>\d{1,2}(?:[\/-]\d{1,2}|\s?月\s?\d{1,2}日)))/g
  const matches = Array.from(normalizedText.matchAll(dateRegex));

  const dates = matches.map((match) => {
    const year = match.groups?.year
      ? normalizeYear(parseInt(match.groups.year.replace(/年/g, '')))
      : new Date().getFullYear();
    const date = match.groups?.date.replace(/\s|月|日/g, '/').replace(/年/g, '-');
    return new Date(`${year}-${date}`);
  });

  return dates;
};

type Time = {
  hour: number;
  minute: number;
};

const findAllTimes = (text: string): Time[] => {
  const timeRegex = /(?<hour>\d{1,2})[:時](?<minute>\d{2})?/g;
  const matches = Array.from(text.matchAll(timeRegex));

  const times = matches.map((match) => {
    return {
      hour: parseInt(match.groups?.hour ?? '0'),
      minute: parseInt(match.groups?.minute ?? '0'),
    };
  });

  return times;
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

  const start = new Date(yearAndDays[0].setHours(times[0].hour, times[0].minute));
  const endTargetDate = yearAndDays.length > 1 ? yearAndDays[1] : yearAndDays[0];
  const endTargetTime =
    times.length > 1 ? times[1] : { hour: times[0].hour + 1, minute: times[0].minute };
  const end = new Date(endTargetDate.setHours(endTargetTime.hour, endTargetTime.minute));

  return {
    isAllday: false,
    start,
    end,
  };
};
