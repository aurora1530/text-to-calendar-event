import { getClipboardHTML } from './lib/clipboard';
import { GoogleCalendarEvent, makeGoogleCalendarEventURL } from './event/event';
import { makeGoogleCalendarEventParams } from './event/parser/main';

const setPreview = (eventParams: GoogleCalendarEvent) => {
  document.getElementById('previewTitle')!.innerText = eventParams.text;
  document.getElementById('previewDescription')!.innerText = eventParams.details;
  document.getElementById('previewLocation')!.innerText = eventParams.location ?? '';

  if (!eventParams.dates) {
    return;
  }
  const dateText = eventParams.dates.isAllday
    ? eventParams.dates.start.toLocaleDateString()
    : `${eventParams.dates.start.toLocaleString()} - ${eventParams.dates.end.toLocaleString()}`;
  document.getElementById('previewDate')!.innerText = dateText;
  return;
};

let eventParams = makeGoogleCalendarEventParams('');
let clipboardHtml: string | undefined;

document?.getElementById('eventDetails')?.addEventListener('paste', async () => {
  const useHtml =
    (document.getElementById('useHtml') as HTMLInputElement)?.checked ?? false;
  clipboardHtml = useHtml ? await getClipboardHTML() : undefined;
});

document?.getElementById('eventDetails')?.addEventListener('input', () => {
  const inputText = (document.getElementById('eventDetails') as HTMLTextAreaElement)
    ?.value;

  const text = clipboardHtml
    ? inputText.split('\n')[0] + '\n' + clipboardHtml
    : inputText;
  eventParams = makeGoogleCalendarEventParams(text);
  setPreview(eventParams);
});

document?.getElementById('generateLink')?.addEventListener('click', () => {
  const eventUrl = makeGoogleCalendarEventURL(eventParams);

  window.open(eventUrl, '_blank');
});
