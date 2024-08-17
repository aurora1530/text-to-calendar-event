(()=>{"use strict";const e=(e,t)=>`${e}=${encodeURIComponent(t)}`,t=e=>e.toISOString().replace(/-|:|\.\d+/g,""),r=(r,n={isAllday:!0,start:new Date})=>{const a=n.isAllday?t(n.start).replace(/T.*$/,""):`${t(n.start)}/${t(n.end)}`;return e(r,a)},n=e=>{const t=(e=>{const t=(e=>e.replace(/[０-９]/g,(e=>String.fromCharCode(e.charCodeAt(0)-65248))))(e);return Array.from(t.matchAll(/(?:(?<year>\d{1,4}年)?\s*(?<date>\d{1,2}(?:[\/-]\d{1,2}|\s?月\s?\d{1,2}日)))/g)).map((e=>{const t=e.groups?.year?(e=>e<100?e+100*Math.floor((new Date).getFullYear()/100):e)(parseInt(e.groups.year.replace(/年/g,""))):(new Date).getFullYear(),r=e.groups?.date.replace(/\s|月|日/g,"/").replace(/年/g,"-");return new Date(`${t}-${r}`)})).filter((e=>!(e=>Number.isNaN(e.getTime()))(e)))})(e),r=(e=>Array.from(e.matchAll(/(?<hour>\d{1,2})[:時](?<minute>\d{2})?/g)).map((e=>({hour:parseInt(e.groups?.hour??"0"),minute:parseInt(e.groups?.minute??"0")}))))(e);if(0===t.length)return{isAllday:!0,start:new Date};if(0===r.length)return{isAllday:!0,start:t[0]};const n=new Date(t[0].setHours(r[0].hour,r[0].minute)),a=t.length>1?t[1]:t[0],o=r.length>1?r[1]:{hour:r[0].hour+1,minute:r[0].minute};return{isAllday:!1,start:n,end:new Date(a.setHours(o.hour,o.minute))}};document?.getElementById("generateLink")?.addEventListener("click",(function(){const t=document.getElementById("eventDetails")?.value,a=(e=>{const{text:t,details:r}=(e=>{const t=e.split("\n");return{text:t[0],details:t.slice(1).join("\n")}})(e);return{text:t,details:r,dates:n(e)}})(t),o=`https://calendar.google.com/calendar/render?action=TEMPLATE&${[e("text",(s=a).text),e("details",s.details),r("dates",s.dates),s.location?e("location",s.location):void 0].filter((e=>void 0!==e)).join("&")}`;var s;window.open(o,"_blank")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThCVixHQUM1Q1csRUYwQ0MsK0RBUFEsQ0FDYi9ELEVBQWdCLFFBRnVCZ0UsRUVsQ0dYLEdGb0NadEMsTUFDOUJmLEVBQWdCLFVBQVdnRSxFQUFNVCxTQUNqQy9DLEVBQW9CLFFBQVN3RCxFQUFNSCxPQUNuQ0csRUFBTUMsU0FBV2pFLEVBQWdCLFdBQVlnRSxFQUFNQyxlQUFZQyxHQUMvRC9CLFFBQVFnQyxRQUFvQkQsSUFBVkMsSUFFZVIsS0FBSyxPQVJBLElBQUNLLEVFaEN6Q0ksT0FBT0MsS0FBS04sRUFBVSxTQUN4QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9ldmVudC9jb25zdGFudC50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2V2ZW50L2V2ZW50LnRzIiwid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvZXZlbnQvcGFyc2VyL2RhdGVzLnRzIiwid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9ldmVudC9wYXJzZXIvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRVZFTlRfUk9PVF9VUkwgPSBcImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yZW5kZXI/YWN0aW9uPVRFTVBMQVRFXCI7IiwiaW1wb3J0IHsgRVZFTlRfUk9PVF9VUkwgfSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IHR5cGUgRXZlbnREYXRlcyA9XG4gIHwge1xuICAgICAgaXNBbGxkYXk6IGZhbHNlO1xuICAgICAgc3RhcnQ6IERhdGU7XG4gICAgICBlbmQ6IERhdGU7XG4gICAgfVxuICB8IHtcbiAgICAgIGlzQWxsZGF5OiB0cnVlO1xuICAgICAgc3RhcnQ6IERhdGU7XG4gICAgfTtcblxuZXhwb3J0IHR5cGUgR29vZ2xlQ2FsZW5kYXJFdmVudCA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBkZXRhaWxzOiBzdHJpbmc7XG4gIGRhdGVzPzogRXZlbnREYXRlcztcbiAgbG9jYXRpb24/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBwYXJhbVRvVVJMUGFyYW0gPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YDtcbn07XG5cbmNvbnN0IGRhdGVUb1JGQzU1NDUgPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvLXw6fFxcLlxcZCsvZywgJycpO1xufTtcblxuY29uc3QgZGF0ZVBhcmFtVG9VUkxQYXJhbSA9IChcbiAga2V5OiBzdHJpbmcsXG4gIGV2ZW50RGF0ZXM6IEV2ZW50RGF0ZXMgPSB7XG4gICAgaXNBbGxkYXk6IHRydWUsXG4gICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gIH1cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZXZlbnREYXRlcy5pc0FsbGRheVxuICAgID8gZGF0ZVRvUkZDNTU0NShldmVudERhdGVzLnN0YXJ0KS5yZXBsYWNlKC9ULiokLywgJycpXG4gICAgOiBgJHtkYXRlVG9SRkM1NTQ1KGV2ZW50RGF0ZXMuc3RhcnQpfS8ke2RhdGVUb1JGQzU1NDUoZXZlbnREYXRlcy5lbmQpfWA7XG4gIHJldHVybiBwYXJhbVRvVVJMUGFyYW0oa2V5LCB2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRVUkwgPSAoZXZlbnQ6IEdvb2dsZUNhbGVuZGFyRXZlbnQpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBbXG4gICAgcGFyYW1Ub1VSTFBhcmFtKCd0ZXh0JywgZXZlbnQudGV4dCksXG4gICAgcGFyYW1Ub1VSTFBhcmFtKCdkZXRhaWxzJywgZXZlbnQuZGV0YWlscyksXG4gICAgZGF0ZVBhcmFtVG9VUkxQYXJhbSgnZGF0ZXMnLCBldmVudC5kYXRlcyksXG4gICAgZXZlbnQubG9jYXRpb24gPyBwYXJhbVRvVVJMUGFyYW0oJ2xvY2F0aW9uJywgZXZlbnQubG9jYXRpb24pIDogdW5kZWZpbmVkLFxuICBdLmZpbHRlcigocGFyYW0pID0+IHBhcmFtICE9PSB1bmRlZmluZWQpO1xuXG4gIHJldHVybiBgJHtFVkVOVF9ST09UX1VSTH0mJHtwYXJhbXMuam9pbignJicpfWA7XG59O1xuIiwiaW1wb3J0IHsgRXZlbnREYXRlcyB9IGZyb20gJy4uL2V2ZW50JztcblxuY29uc3QgemVua2FrdURpZ2l0c1RvSGFua2FrdSA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9b77yQLe+8mV0vZywgKHMpID0+IHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzLmNoYXJDb2RlQXQoMCkgLSAweGZlZTApO1xuICB9KTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVllYXIgPSAoeWVhcjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgaWYgKHllYXIgPCAxMDApIHtcbiAgICBjb25zdCBjdXJyZW50Q2VudHVyeSA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC8gMTAwKSAqIDEwMDtcbiAgICByZXR1cm4geWVhciArIGN1cnJlbnRDZW50dXJ5O1xuICB9XG4gIHJldHVybiB5ZWFyO1xufTtcblxuY29uc3QgaXNJbnZhbGlkRGF0ZSA9IChkYXRlOiBEYXRlKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xufVxuXG5jb25zdCBmaW5kQWxsWWVhckFuZERheXMgPSAodGV4dDogc3RyaW5nKTogRGF0ZVtdID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZFRleHQgPSB6ZW5rYWt1RGlnaXRzVG9IYW5rYWt1KHRleHQpO1xuXG4gIGNvbnN0IGRhdGVSZWdleCA9XG4gICAgLyg/Oig/PHllYXI+XFxkezEsNH3lubQpP1xccyooPzxkYXRlPlxcZHsxLDJ9KD86W1xcLy1dXFxkezEsMn18XFxzP+aciFxccz9cXGR7MSwyfeaXpSkpKS9nXG4gIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKG5vcm1hbGl6ZWRUZXh0Lm1hdGNoQWxsKGRhdGVSZWdleCkpO1xuXG4gIGNvbnN0IGRhdGVzID0gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IG1hdGNoLmdyb3Vwcz8ueWVhclxuICAgICAgPyBub3JtYWxpemVZZWFyKHBhcnNlSW50KG1hdGNoLmdyb3Vwcy55ZWFyLnJlcGxhY2UoL+W5tC9nLCAnJykpKVxuICAgICAgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZGF0ZSA9IG1hdGNoLmdyb3Vwcz8uZGF0ZS5yZXBsYWNlKC9cXHN85pyIfOaXpS9nLCAnLycpLnJlcGxhY2UoL+W5tC9nLCAnLScpO1xuICAgIHJldHVybiBuZXcgRGF0ZShgJHt5ZWFyfS0ke2RhdGV9YCk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRlcy5maWx0ZXIoKGRhdGUpID0+ICFpc0ludmFsaWREYXRlKGRhdGUpKTtcbn07XG5cbnR5cGUgVGltZSA9IHtcbiAgaG91cjogbnVtYmVyO1xuICBtaW51dGU6IG51bWJlcjtcbn07XG5cbmNvbnN0IGZpbmRBbGxUaW1lcyA9ICh0ZXh0OiBzdHJpbmcpOiBUaW1lW10gPT4ge1xuICBjb25zdCB0aW1lUmVnZXggPSAvKD88aG91cj5cXGR7MSwyfSlbOuaZgl0oPzxtaW51dGU+XFxkezJ9KT8vZztcbiAgY29uc3QgbWF0Y2hlcyA9IEFycmF5LmZyb20odGV4dC5tYXRjaEFsbCh0aW1lUmVnZXgpKTtcblxuICBjb25zdCB0aW1lcyA9IG1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBob3VyOiBwYXJzZUludChtYXRjaC5ncm91cHM/LmhvdXIgPz8gJzAnKSxcbiAgICAgIG1pbnV0ZTogcGFyc2VJbnQobWF0Y2guZ3JvdXBzPy5taW51dGUgPz8gJzAnKSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gdGltZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0cmFjdFN0YXJ0QW5kRW5kRGF0ZXMgPSAodGV4dDogc3RyaW5nKTogRXZlbnREYXRlcyA9PiB7XG4gIGNvbnN0IHllYXJBbmREYXlzID0gZmluZEFsbFllYXJBbmREYXlzKHRleHQpO1xuICBjb25zdCB0aW1lcyA9IGZpbmRBbGxUaW1lcyh0ZXh0KTtcblxuICBpZiAoeWVhckFuZERheXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWxsZGF5OiB0cnVlLFxuICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIGlmICh0aW1lcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBbGxkYXk6IHRydWUsXG4gICAgICBzdGFydDogeWVhckFuZERheXNbMF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoeWVhckFuZERheXNbMF0uc2V0SG91cnModGltZXNbMF0uaG91ciwgdGltZXNbMF0ubWludXRlKSk7XG4gIGNvbnN0IGVuZFRhcmdldERhdGUgPSB5ZWFyQW5kRGF5cy5sZW5ndGggPiAxID8geWVhckFuZERheXNbMV0gOiB5ZWFyQW5kRGF5c1swXTtcbiAgY29uc3QgZW5kVGFyZ2V0VGltZSA9XG4gICAgdGltZXMubGVuZ3RoID4gMSA/IHRpbWVzWzFdIDogeyBob3VyOiB0aW1lc1swXS5ob3VyICsgMSwgbWludXRlOiB0aW1lc1swXS5taW51dGUgfTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kVGFyZ2V0RGF0ZS5zZXRIb3VycyhlbmRUYXJnZXRUaW1lLmhvdXIsIGVuZFRhcmdldFRpbWUubWludXRlKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc0FsbGRheTogZmFsc2UsXG4gICAgc3RhcnQsXG4gICAgZW5kLFxuICB9O1xufTtcbiIsImltcG9ydCB7IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50VVJMIH0gZnJvbSBcIi4vZXZlbnQvZXZlbnRcIlxuaW1wb3J0IHsgbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRQYXJhbXMgfSBmcm9tIFwiLi9ldmVudC9wYXJzZXIvbWFpblwiXG5cblxuZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUxpbmsnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2ZW50RGV0YWlscyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnREZXRhaWxzJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCk/LnZhbHVlO1xuICBjb25zdCBldmVudFBhcmFtcyA9IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zKGV2ZW50RGV0YWlscyk7XG4gIGNvbnN0IGV2ZW50VXJsID0gbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRVUkwoZXZlbnRQYXJhbXMpO1xuXG4gIHdpbmRvdy5vcGVuKGV2ZW50VXJsLCAnX2JsYW5rJyk7XG59KTsiLCJpbXBvcnQgeyBFdmVudERhdGVzLCBHb29nbGVDYWxlbmRhckV2ZW50LCBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFVSTCB9IGZyb20gJy4uL2V2ZW50JztcbmltcG9ydCB7IGV4dHJhY3RTdGFydEFuZEVuZERhdGVzIH0gZnJvbSAnLi9kYXRlcyc7XG5cbi8qKlxuICogdGV4dOOBi+OCieOCpOODmeODs+ODiOOCv+OCpOODiOODq+OCkuaKveWHuuOBmeOCi+OAglxuICog5pyA5Yid44Gu6KGM44KS44Kk44OZ44Oz44OI44K/44Kk44OI44Or44Go44GX44Gm5omx44GG44CCXG4gKi9cbmNvbnN0IGV4dHJhY3RFdmVudFRpdGxlQW5kRGV0YWlscyA9IChcbiAgdGV4dDogc3RyaW5nXG4pOiBQaWNrPEdvb2dsZUNhbGVuZGFyRXZlbnQsICd0ZXh0JyB8ICdkZXRhaWxzJz4gPT4ge1xuICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuXG4gIHJldHVybiB7XG4gICAgdGV4dDogbGluZXNbMF0sXG4gICAgZGV0YWlsczogbGluZXMuc2xpY2UoMSkuam9pbignXFxuJyksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRQYXJhbXMgPSAocGxhaW5UZXh0OiBzdHJpbmcpOiBHb29nbGVDYWxlbmRhckV2ZW50ID0+IHtcbiAgY29uc3QgeyB0ZXh0LCBkZXRhaWxzIH0gPSBleHRyYWN0RXZlbnRUaXRsZUFuZERldGFpbHMocGxhaW5UZXh0KTtcbiAgY29uc3QgZGF0ZXM6IEV2ZW50RGF0ZXMgPSBleHRyYWN0U3RhcnRBbmRFbmREYXRlcyhwbGFpblRleHQpO1xuXG4gIHJldHVybiB7XG4gICAgdGV4dCxcbiAgICBkZXRhaWxzLFxuICAgIGRhdGVzLFxuICB9O1xufTsiXSwibmFtZXMiOlsicGFyYW1Ub1VSTFBhcmFtIiwia2V5IiwidmFsdWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRlVG9SRkM1NTQ1IiwiZGF0ZSIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsImRhdGVQYXJhbVRvVVJMUGFyYW0iLCJldmVudERhdGVzIiwiaXNBbGxkYXkiLCJzdGFydCIsIkRhdGUiLCJlbmQiLCJleHRyYWN0U3RhcnRBbmRFbmREYXRlcyIsInRleHQiLCJ5ZWFyQW5kRGF5cyIsIm5vcm1hbGl6ZWRUZXh0IiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJ6ZW5rYWt1RGlnaXRzVG9IYW5rYWt1IiwiQXJyYXkiLCJmcm9tIiwibWF0Y2hBbGwiLCJtYXAiLCJtYXRjaCIsInllYXIiLCJncm91cHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRGdWxsWWVhciIsIm5vcm1hbGl6ZVllYXIiLCJwYXJzZUludCIsImZpbHRlciIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsImlzSW52YWxpZERhdGUiLCJmaW5kQWxsWWVhckFuZERheXMiLCJ0aW1lcyIsImhvdXIiLCJtaW51dGUiLCJmaW5kQWxsVGltZXMiLCJsZW5ndGgiLCJzZXRIb3VycyIsImVuZFRhcmdldERhdGUiLCJlbmRUYXJnZXRUaW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudERldGFpbHMiLCJldmVudFBhcmFtcyIsInBsYWluVGV4dCIsImRldGFpbHMiLCJsaW5lcyIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiZXh0cmFjdEV2ZW50VGl0bGVBbmREZXRhaWxzIiwiZGF0ZXMiLCJtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFBhcmFtcyIsImV2ZW50VXJsIiwiZXZlbnQiLCJsb2NhdGlvbiIsInVuZGVmaW5lZCIsInBhcmFtIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=