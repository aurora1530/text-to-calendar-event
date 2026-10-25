import { getClipboardHTML } from './lib/clipboard';
import { makeGoogleCalendarEventURL } from './event/event';
import { makeGoogleCalendarEventParams } from './event/parser/main';
import { setPreview } from './lib/preview';
import { removeAllStyleAttributes } from './lib/html';
import { debounce } from './utils/debounce';

let eventParams = makeGoogleCalendarEventParams('');
let clipboardHtml: string | undefined;

const updateEventParams = (): boolean => {
  const inputText = (document.getElementById('eventDetails') as HTMLTextAreaElement).value;
  const text = clipboardHtml ? inputText.split('\n')[0] + '\n' + clipboardHtml : inputText;
  const button = document.getElementById('generateLink') as HTMLButtonElement;
  try {
    eventParams = makeGoogleCalendarEventParams(text);
    setPreview(eventParams);
    button.disabled = false;
    return true;
  } catch (error) {
    if (!(error instanceof RangeError)) throw error;
    document.getElementById('previewDate')!.innerText = error.message;
    button.disabled = true;
    return false;
  }
};

document?.getElementById('eventDetails')?.addEventListener('paste', async () => {
  const useHtml =
    (document.getElementById('useHtml') as HTMLInputElement)?.checked ?? false;
  clipboardHtml = useHtml ? await getClipboardHTML() : undefined;
  clipboardHtml = clipboardHtml ? removeAllStyleAttributes(clipboardHtml) : undefined;

  // Pasteイベントの処理が終わったら、手動でinputイベントをトリガーする
  const eventDetailsElement = document.getElementById('eventDetails') as HTMLTextAreaElement;
  const inputEvent = new Event('input', { bubbles: true });
  eventDetailsElement.dispatchEvent(inputEvent);
});

document?.getElementById('eventDetails')?.addEventListener(
  'input',
  debounce(updateEventParams, 200)
);

document?.getElementById('generateLink')?.addEventListener('click', () => {
  if (!updateEventParams()) return;
  const eventUrl = makeGoogleCalendarEventURL(eventParams);

  window.open(eventUrl, '_blank');
});
