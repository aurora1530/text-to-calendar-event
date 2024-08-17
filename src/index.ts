import { makeGoogleCalendarEventURL } from "./event/event"
import { makeGoogleCalendarEventParams } from "./event/parser/main"


document?.getElementById('generateLink')?.addEventListener('click', function () {
  const eventDetails = (document.getElementById('eventDetails') as HTMLTextAreaElement)?.value;
  const eventParams = makeGoogleCalendarEventParams(eventDetails);
  const eventUrl = makeGoogleCalendarEventURL(eventParams);

  window.open(eventUrl, '_blank');
});