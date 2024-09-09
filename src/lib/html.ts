/**
 * htmlテキスト内からscriptタグを全て削除する
 */
export const removeAllScriptTags = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  doc.querySelectorAll('script').forEach((ele) => {
    ele.remove();
  });

  return doc.documentElement.innerHTML;
};

/**
 * htmlテキスト内からstyle属性を全て削除する
 */
export const removeAllStyleAttributes = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  doc.querySelectorAll('[style]').forEach((ele) => {
    ele.removeAttribute('style');
  });

  return doc.documentElement.innerHTML;
};
