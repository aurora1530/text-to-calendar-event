export const formatDateToDateAndTime = (date: Date): string => {
  const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  const minuteStr = date.getMinutes().toString().padStart(2, '0');
  const timeStr = `${date.getHours()}:${minuteStr}`;
  return `${dateStr} ${timeStr}`;
};
