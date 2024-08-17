import { EVENT_ROOT_URL } from './constant';

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
  const value = eventDates.isAllday
    ? dateToRFC5545(eventDates.start).replace(/T.*$/, '')
    : `${dateToRFC5545(eventDates.start)}/${dateToRFC5545(eventDates.end)}`;
  return paramToURLParam(key, value);
};

export const makeGoogleCalendarEventURL = (event: GoogleCalendarEvent): string => {
  const params = [
    paramToURLParam('text', event.text),
    paramToURLParam('details', event.details),
    dateParamToURLParam('dates', event.dates),
    event.location ? paramToURLParam('location', event.location) : undefined,
  ].filter((param) => param !== undefined);

  return `${EVENT_ROOT_URL}&${params.join('&')}`;
};
