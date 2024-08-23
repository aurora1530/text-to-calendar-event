export const removeScriptTag = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  doc.querySelectorAll('script').forEach((ele) => {
    ele.remove();
  });

  return doc.documentElement.innerHTML;
};

export const removeStyleAttribute = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  doc.querySelectorAll('[style]').forEach((ele) => {
    ele.removeAttribute('style');
  });

  return doc.documentElement.innerHTML;
};
