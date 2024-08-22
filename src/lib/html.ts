export const removeScriptTag = (html: string): string => {
  return html.replace(/<script.*?<\/script>/gs, '');
};
