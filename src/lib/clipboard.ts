export const getClipboardHTML = async () => {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const item of clipboardItems) {
      if (item.types.includes('text/html')) {
        const blob = await item.getType('text/html');
        const htmlText = await blob.text();
        return htmlText;
      }
    }

    return undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
