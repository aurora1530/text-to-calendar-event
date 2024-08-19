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

document?.getElementById('eventDetails')?.addEventListener('input', function () {
  const eventDetails = (document.getElementById('eventDetails') as HTMLTextAreaElement)
    ?.value;
  eventParams = makeGoogleCalendarEventParams(eventDetails);
  setPreview(eventParams);
});

document?.getElementById('generateLink')?.addEventListener('click', function () {
  const eventUrl = makeGoogleCalendarEventURL(eventParams);

  window.open(eventUrl, '_blank');
});
