export const removeScriptTag = (html: string): string => {
  return html.replace(/<script.*?<\/script>/gs, '');
};

export const removeStyleAttribute = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  doc.querySelectorAll('[style]').forEach((ele) => {
    ele.removeAttribute('style');
  });

  return doc.documentElement.innerHTML;
};
