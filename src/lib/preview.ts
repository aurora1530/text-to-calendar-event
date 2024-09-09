import { GoogleCalendarEvent } from '../event/event';
import { removeAllScriptTags } from './html';

export const setPreview = (eventParams: GoogleCalendarEvent) => {
  document.getElementById('previewTitle')!.innerText = eventParams.text;
  document.getElementById('previewDescription')!.innerHTML = removeAllScriptTags(
    eventParams.details
  );
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
