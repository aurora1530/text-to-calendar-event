import { GoogleCalendarEvent } from '../event/event';
import { formatDateToDateAndTime as formatDateToDateAndTimeString } from './date';
import { removeAllScriptTags } from './html';

/**
 * 入力情報をプレビューに反映する
 */
export const setPreview = (eventParams: GoogleCalendarEvent): void => {
  document.getElementById('previewTitle')!.innerText = eventParams.text;
  document.getElementById('previewDescription')!.innerHTML = removeAllScriptTags(
    eventParams.details
  );
  document.getElementById('previewLocation')!.innerText = eventParams.location ?? '';

  if (!eventParams.dates) {
    return;
  }

  // 終日の場合は日付のみ、それ以外は開始日時と終了日時を表示
  const dateText = eventParams.dates.isAllday
    ? eventParams.dates.start.toLocaleDateString()
    : formatDateToDateAndTimeString(eventParams.dates.start) +
      ' - ' +
      formatDateToDateAndTimeString(eventParams.dates.end);
  document.getElementById('previewDate')!.innerText = dateText;
  return;
};
