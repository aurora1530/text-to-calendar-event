export const extractMeetingURL = (text: string): string | undefined => {
  const urlRegex = [
    /https:\/\/(?:[a-zA-Z0-9-]+\.)?zoom\.us\/j\/[a-zA-Z0-9]+(?:\?pwd=[a-zA-Z0-9]+)?/, // Zoom
    /https:\/\/meet\.google\.com\/[a-zA-Z0-9]{3}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}(?:\?[-a-zA-Z0-9=&]+)?/, // Google Meet
  ];

  for (const regex of urlRegex) {
    const match = text.match(regex);
    if (match) {
      return match[0];
    }
  }

  return undefined;
};
