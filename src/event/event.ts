export type EventDates =
  | {
      isAllday: false;
      start: Date;
      end: Date;
    }
  | {
      isAllday: true;
      start: Date;
    };

export type GoogleCalendarEvent = {
  text: string;
  details: string;
  dates?: EventDates;
  location?: string;
};

const paramToURLParam = (key: string, value: string): string => {
  return `${key}=${encodeURIComponent(value)}`;
};

const dateToRFC5545 = (date: Date): string => {
  return date.toISOString().replace(/-|:|\.\d+/g, '');
};

const dateParamToURLParam = (
  key: string,
  eventDates: EventDates = {
    isAllday: true,
    start: new Date(),
  }
): string => {
  if (eventDates.isAllday) {
    /**
     * 終日のイベントは`YYYYMMDD/YYYYMMDD`の形式で指定するのだが、dateToRFC5545()で生成される文字列は標準時での日付になってしまう。そのため、GMTの差分を考慮して日付を生成する必要がある。
     */
    const gmtDiffMinutes = eventDates.start.getTimezoneOffset();
    const date = new Date(eventDates.start.getTime() - gmtDiffMinutes * 60 * 1000);
    const time = dateToRFC5545(date).replace(/T.*$/, '');
    return paramToURLParam(key, `${time}/${time}`);
  }

  const start = dateToRFC5545(eventDates.start);
  const end = dateToRFC5545(eventDates.end);
  return paramToURLParam(key, `${start}/${end}`);
};

export const makeGoogleCalendarEventURL = (event: GoogleCalendarEvent): string => {
  const params = [
    paramToURLParam('text', event.text),
    paramToURLParam('details', event.details),
    dateParamToURLParam('dates', event.dates),
    event.location ? paramToURLParam('location', event.location) : undefined,
  ].filter((param) => param !== undefined);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.join('&')}`;
};
