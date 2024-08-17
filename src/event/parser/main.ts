import { EventDates, GoogleCalendarEvent, makeGoogleCalendarEventURL } from '../event';
import { extractStartAndEndDates } from './dates';
import { extractMeetingURL } from './location';

/**
 * textからイベントタイトルを抽出する。
 * 最初の行をイベントタイトルとして扱う。
 */
const extractEventTitleAndDetails = (
  text: string
): Pick<GoogleCalendarEvent, 'text' | 'details'> => {
  const lines = text.split('\n');

  return {
    text: lines[0],
    details: lines.slice(1).join('\n'),
  };
};

export const makeGoogleCalendarEventParams = (plainText: string): GoogleCalendarEvent => {
  const { text, details } = extractEventTitleAndDetails(plainText);
  const dates: EventDates = extractStartAndEndDates(plainText);
  const meetingURL = extractMeetingURL(plainText);

  return {
    text,
    details,
    dates,
    location: meetingURL,
  };
};