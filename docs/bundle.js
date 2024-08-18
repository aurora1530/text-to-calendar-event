(()=>{"use strict";const e=(e,t)=>`${e}=${encodeURIComponent(t)}`,t=e=>e.toISOString().replace(/-|:|\.\d+/g,""),r=(r,n={isAllday:!0,start:new Date})=>{if(n.isAllday){const a=t(n.start).replace(/T.*$/,"");return e(r,`${a}/${a}`)}const a=t(n.start),o=t(n.end);return e(r,`${a}/${o}`)},n=e=>{const t=(e=>{const t=(e=>e.replace(/[０-９]/g,(e=>String.fromCharCode(e.charCodeAt(0)-65248))))(e).replace(/\s/g,"");return Array.from(t.matchAll(/(?:(?<year>\d{1,4}[\/年])?\s*(?<date>\d{1,2}(?:[\/-]\d{1,2}|\s?[\/月]\s?\d{1,2}日?)))/g)).map((e=>{const t=e.groups?.year?(e=>e<100?e+100*Math.floor((new Date).getFullYear()/100):e)(parseInt(e.groups.year.replace(/[\/年]/g,""))):(new Date).getFullYear(),r=e.groups?.date.replace(/\s|月|日/g,"/").replace(/[\/年]/g,"-");return new Date(`${t}-${r}`)})).filter((e=>!(e=>Number.isNaN(e.getTime()))(e)))})(e),r=(e=>Array.from(e.matchAll(/(?<hour>\d{1,2})[:時](?<minute>\d{2})?(?!間)/g)).map((e=>({hour:parseInt(e.groups?.hour??"0"),minute:parseInt(e.groups?.minute??"0")}))))(e);if(0===t.length)return{isAllday:!0,start:new Date};if(0===r.length)return{isAllday:!0,start:t[0]};const n=new Date(t[0].setHours(r[0].hour,r[0].minute)),a=t.length>1&&t[1].getTime()>t[0].getTime()?t[1]:t[0],o=r.length>1?r[1]:{hour:r[0].hour+1,minute:r[0].minute};return{isAllday:!1,start:n,end:new Date(a.setHours(o.hour,o.minute))}};document?.getElementById("generateLink")?.addEventListener("click",(function(){const t=document.getElementById("eventDetails")?.value,a=(e=>{const{text:t,details:r}=(e=>{const t=e.split("\n");return{text:t[0],details:t.slice(1).join("\n")}})(e),a=n(e),o=(e=>{const t=[/https:\/\/(?:[a-zA-Z0-9-]+\.)?zoom\.us\/j\/[a-zA-Z0-9]+(?:\?pwd=[a-zA-Z0-9]+)?/,/https:\/\/meet\.google\.com\/[a-zA-Z0-9]{3}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}(?:\?[-a-zA-Z0-9=&]+)?/];for(const r of t){const t=e.match(r);if(t)return t[0]}})(e);return{text:t,details:r,dates:a,location:o}})(t),o=`https://calendar.google.com/calendar/render?action=TEMPLATE&${[e("text",(s=a).text),e("details",s.details),r("dates",s.dates),s.location?e("location",s.location):void 0].filter((e=>void 0!==e)).join("&")}`;var s;window.open(o,"_blank")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU15QyxFQUFNLEdBQ1pELFFBQVNDLEVBQU1FLE1BQU0sR0FBR0MsS0FBSyxNQUM5QixFQUl5QkMsQ0FBNEJOLEdBQ2hETyxFQUFvQi9DLEVBQXdCd0MsR0FDNUNRLEVDdEJ5QixDQUFDL0MsSUFDaEMsTUFBTWdELEVBQVcsQ0FDZixpRkFDQSxtR0FHRixJQUFLLE1BQU1DLEtBQVNELEVBQVUsQ0FDNUIsTUFBTXBDLEVBQVFaLEVBQUtZLE1BQU1xQyxHQUN6QixHQUFJckMsRUFDRixPQUFPQSxFQUFNLEVBRWpCLENBRWdCLEVEU0dzQyxDQUFrQlgsR0FFckMsTUFBTyxDQUNMdkMsT0FDQXdDLFVBQ0FNLFFBQ0FLLFNBQVVKLEVBQ1gsRUR2Qm1CSyxDQUE4QmYsR0FDNUNnQixFRjhDQywrREFQUSxDQUNickUsRUFBZ0IsUUFGdUJzRSxFRXRDR2hCLEdGd0NadEMsTUFDOUJoQixFQUFnQixVQUFXc0UsRUFBTWQsU0FDakNoRCxFQUFvQixRQUFTOEQsRUFBTVIsT0FDbkNRLEVBQU1ILFNBQVduRSxFQUFnQixXQUFZc0UsRUFBTUgsZUFBWUksR0FDL0RuQyxRQUFRb0MsUUFBb0JELElBQVZDLElBRWVaLEtBQUssT0FSQSxJQUFDVSxFRXBDekNHLE9BQU9DLEtBQUtMLEVBQVUsU0FDeEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvZXZlbnQvY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9ldmVudC9ldmVudC50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2V2ZW50L3BhcnNlci9kYXRlcy50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvZXZlbnQvcGFyc2VyL21haW4udHMiLCJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9ldmVudC9wYXJzZXIvbG9jYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEVWRU5UX1JPT1RfVVJMID0gXCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvcmVuZGVyP2FjdGlvbj1URU1QTEFURVwiOyIsImltcG9ydCB7IEVWRU5UX1JPT1RfVVJMIH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmV4cG9ydCB0eXBlIEV2ZW50RGF0ZXMgPVxuICB8IHtcbiAgICAgIGlzQWxsZGF5OiBmYWxzZTtcbiAgICAgIHN0YXJ0OiBEYXRlO1xuICAgICAgZW5kOiBEYXRlO1xuICAgIH1cbiAgfCB7XG4gICAgICBpc0FsbGRheTogdHJ1ZTtcbiAgICAgIHN0YXJ0OiBEYXRlO1xuICAgIH07XG5cbmV4cG9ydCB0eXBlIEdvb2dsZUNhbGVuZGFyRXZlbnQgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgZGV0YWlsczogc3RyaW5nO1xuICBkYXRlcz86IEV2ZW50RGF0ZXM7XG4gIGxvY2F0aW9uPzogc3RyaW5nO1xufTtcblxuY29uc3QgcGFyYW1Ub1VSTFBhcmFtID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWA7XG59O1xuXG5jb25zdCBkYXRlVG9SRkM1NTQ1ID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoLy18OnxcXC5cXGQrL2csICcnKTtcbn07XG5cbmNvbnN0IGRhdGVQYXJhbVRvVVJMUGFyYW0gPSAoXG4gIGtleTogc3RyaW5nLFxuICBldmVudERhdGVzOiBFdmVudERhdGVzID0ge1xuICAgIGlzQWxsZGF5OiB0cnVlLFxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICB9XG4pOiBzdHJpbmcgPT4ge1xuICBpZihldmVudERhdGVzLmlzQWxsZGF5KXtcbiAgICBjb25zdCB0aW1lID0gZGF0ZVRvUkZDNTU0NShldmVudERhdGVzLnN0YXJ0KS5yZXBsYWNlKC9ULiokLywgJycpO1xuICAgIHJldHVybiBwYXJhbVRvVVJMUGFyYW0oa2V5LCBgJHt0aW1lfS8ke3RpbWV9YCk7XG4gIH1cblxuICBjb25zdCBzdGFydCA9IGRhdGVUb1JGQzU1NDUoZXZlbnREYXRlcy5zdGFydCk7XG4gIGNvbnN0IGVuZCA9IGRhdGVUb1JGQzU1NDUoZXZlbnREYXRlcy5lbmQpO1xuICByZXR1cm4gcGFyYW1Ub1VSTFBhcmFtKGtleSwgYCR7c3RhcnR9LyR7ZW5kfWApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50VVJMID0gKGV2ZW50OiBHb29nbGVDYWxlbmRhckV2ZW50KTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gW1xuICAgIHBhcmFtVG9VUkxQYXJhbSgndGV4dCcsIGV2ZW50LnRleHQpLFxuICAgIHBhcmFtVG9VUkxQYXJhbSgnZGV0YWlscycsIGV2ZW50LmRldGFpbHMpLFxuICAgIGRhdGVQYXJhbVRvVVJMUGFyYW0oJ2RhdGVzJywgZXZlbnQuZGF0ZXMpLFxuICAgIGV2ZW50LmxvY2F0aW9uID8gcGFyYW1Ub1VSTFBhcmFtKCdsb2NhdGlvbicsIGV2ZW50LmxvY2F0aW9uKSA6IHVuZGVmaW5lZCxcbiAgXS5maWx0ZXIoKHBhcmFtKSA9PiBwYXJhbSAhPT0gdW5kZWZpbmVkKTtcblxuICByZXR1cm4gYCR7RVZFTlRfUk9PVF9VUkx9JiR7cGFyYW1zLmpvaW4oJyYnKX1gO1xufTtcbiIsImltcG9ydCB7IEV2ZW50RGF0ZXMgfSBmcm9tICcuLi9ldmVudCc7XG5cbmNvbnN0IHplbmtha3VEaWdpdHNUb0hhbmtha3UgPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvW++8kC3vvJldL2csIChzKSA9PiB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocy5jaGFyQ29kZUF0KDApIC0gMHhmZWUwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVZZWFyID0gKHllYXI6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGlmICh5ZWFyIDwgMTAwKSB7XG4gICAgY29uc3QgY3VycmVudENlbnR1cnkgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAvIDEwMCkgKiAxMDA7XG4gICAgcmV0dXJuIHllYXIgKyBjdXJyZW50Q2VudHVyeTtcbiAgfVxuICByZXR1cm4geWVhcjtcbn07XG5cbmNvbnN0IGlzSW52YWxpZERhdGUgPSAoZGF0ZTogRGF0ZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn07XG5cbmNvbnN0IGZpbmRBbGxZZWFyQW5kRGF5cyA9ICh0ZXh0OiBzdHJpbmcpOiBEYXRlW10gPT4ge1xuICBjb25zdCBub3JtYWxpemVkVGV4dCA9IHplbmtha3VEaWdpdHNUb0hhbmtha3UodGV4dCkucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgY29uc3QgZGF0ZVJlZ2V4ID1cbiAgICAvKD86KD88eWVhcj5cXGR7MSw0fVtcXC/lubRdKT9cXHMqKD88ZGF0ZT5cXGR7MSwyfSg/OltcXC8tXVxcZHsxLDJ9fFxccz9bXFwv5pyIXVxccz9cXGR7MSwyfeaXpT8pKSkvZztcbiAgY29uc3QgbWF0Y2hlcyA9IEFycmF5LmZyb20obm9ybWFsaXplZFRleHQubWF0Y2hBbGwoZGF0ZVJlZ2V4KSk7XG5cbiAgY29uc3QgZGF0ZXMgPSBtYXRjaGVzLm1hcCgobWF0Y2gpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gbWF0Y2guZ3JvdXBzPy55ZWFyXG4gICAgICA/IG5vcm1hbGl6ZVllYXIocGFyc2VJbnQobWF0Y2guZ3JvdXBzLnllYXIucmVwbGFjZSgvW1xcL+W5tF0vZywgJycpKSlcbiAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGRhdGUgPSBtYXRjaC5ncm91cHM/LmRhdGUucmVwbGFjZSgvXFxzfOaciHzml6UvZywgJy8nKS5yZXBsYWNlKC9bXFwv5bm0XS9nLCAnLScpO1xuICAgIHJldHVybiBuZXcgRGF0ZShgJHt5ZWFyfS0ke2RhdGV9YCk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRlcy5maWx0ZXIoKGRhdGUpID0+ICFpc0ludmFsaWREYXRlKGRhdGUpKTtcbn07XG5cbnR5cGUgVGltZSA9IHtcbiAgaG91cjogbnVtYmVyO1xuICBtaW51dGU6IG51bWJlcjtcbn07XG5cbmNvbnN0IGZpbmRBbGxUaW1lcyA9ICh0ZXh0OiBzdHJpbmcpOiBUaW1lW10gPT4ge1xuICBjb25zdCB0aW1lUmVnZXggPSAvKD88aG91cj5cXGR7MSwyfSlbOuaZgl0oPzxtaW51dGU+XFxkezJ9KT8oPyHplpMpL2c7XG4gIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKHRleHQubWF0Y2hBbGwodGltZVJlZ2V4KSk7XG5cbiAgY29uc3QgdGltZXMgPSBtYXRjaGVzLm1hcCgobWF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG91cjogcGFyc2VJbnQobWF0Y2guZ3JvdXBzPy5ob3VyID8/ICcwJyksXG4gICAgICBtaW51dGU6IHBhcnNlSW50KG1hdGNoLmdyb3Vwcz8ubWludXRlID8/ICcwJyksXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRpbWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RTdGFydEFuZEVuZERhdGVzID0gKHRleHQ6IHN0cmluZyk6IEV2ZW50RGF0ZXMgPT4ge1xuICBjb25zdCB5ZWFyQW5kRGF5cyA9IGZpbmRBbGxZZWFyQW5kRGF5cyh0ZXh0KTtcbiAgY29uc3QgdGltZXMgPSBmaW5kQWxsVGltZXModGV4dCk7XG5cbiAgaWYgKHllYXJBbmREYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FsbGRheTogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgIH07XG4gIH1cblxuICBpZiAodGltZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWxsZGF5OiB0cnVlLFxuICAgICAgc3RhcnQ6IHllYXJBbmREYXlzWzBdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHllYXJBbmREYXlzWzBdLnNldEhvdXJzKHRpbWVzWzBdLmhvdXIsIHRpbWVzWzBdLm1pbnV0ZSkpO1xuICBjb25zdCBlbmRUYXJnZXREYXRlID1cbiAgICB5ZWFyQW5kRGF5cy5sZW5ndGggPiAxICYmIHllYXJBbmREYXlzWzFdLmdldFRpbWUoKSA+IHllYXJBbmREYXlzWzBdLmdldFRpbWUoKVxuICAgICAgPyB5ZWFyQW5kRGF5c1sxXVxuICAgICAgOiB5ZWFyQW5kRGF5c1swXTtcbiAgY29uc3QgZW5kVGFyZ2V0VGltZSA9XG4gICAgdGltZXMubGVuZ3RoID4gMSA/IHRpbWVzWzFdIDogeyBob3VyOiB0aW1lc1swXS5ob3VyICsgMSwgbWludXRlOiB0aW1lc1swXS5taW51dGUgfTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kVGFyZ2V0RGF0ZS5zZXRIb3VycyhlbmRUYXJnZXRUaW1lLmhvdXIsIGVuZFRhcmdldFRpbWUubWludXRlKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc0FsbGRheTogZmFsc2UsXG4gICAgc3RhcnQsXG4gICAgZW5kLFxuICB9O1xufTtcbiIsImltcG9ydCB7IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50VVJMIH0gZnJvbSBcIi4vZXZlbnQvZXZlbnRcIlxuaW1wb3J0IHsgbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRQYXJhbXMgfSBmcm9tIFwiLi9ldmVudC9wYXJzZXIvbWFpblwiXG5cblxuZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUxpbmsnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2ZW50RGV0YWlscyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnREZXRhaWxzJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCk/LnZhbHVlO1xuICBjb25zdCBldmVudFBhcmFtcyA9IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zKGV2ZW50RGV0YWlscyk7XG4gIGNvbnN0IGV2ZW50VXJsID0gbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRVUkwoZXZlbnRQYXJhbXMpO1xuXG4gIHdpbmRvdy5vcGVuKGV2ZW50VXJsLCAnX2JsYW5rJyk7XG59KTsiLCJpbXBvcnQgeyBFdmVudERhdGVzLCBHb29nbGVDYWxlbmRhckV2ZW50LCBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFVSTCB9IGZyb20gJy4uL2V2ZW50JztcbmltcG9ydCB7IGV4dHJhY3RTdGFydEFuZEVuZERhdGVzIH0gZnJvbSAnLi9kYXRlcyc7XG5pbXBvcnQgeyBleHRyYWN0TWVldGluZ1VSTCB9IGZyb20gJy4vbG9jYXRpb24nO1xuXG4vKipcbiAqIHRleHTjgYvjgonjgqTjg5njg7Pjg4jjgr/jgqTjg4jjg6vjgpLmir3lh7rjgZnjgovjgIJcbiAqIOacgOWIneOBruihjOOCkuOCpOODmeODs+ODiOOCv+OCpOODiOODq+OBqOOBl+OBpuaJseOBhuOAglxuICovXG5jb25zdCBleHRyYWN0RXZlbnRUaXRsZUFuZERldGFpbHMgPSAoXG4gIHRleHQ6IHN0cmluZ1xuKTogUGljazxHb29nbGVDYWxlbmRhckV2ZW50LCAndGV4dCcgfCAnZGV0YWlscyc+ID0+IHtcbiAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcblxuICByZXR1cm4ge1xuICAgIHRleHQ6IGxpbmVzWzBdLFxuICAgIGRldGFpbHM6IGxpbmVzLnNsaWNlKDEpLmpvaW4oJ1xcbicpLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zID0gKHBsYWluVGV4dDogc3RyaW5nKTogR29vZ2xlQ2FsZW5kYXJFdmVudCA9PiB7XG4gIGNvbnN0IHsgdGV4dCwgZGV0YWlscyB9ID0gZXh0cmFjdEV2ZW50VGl0bGVBbmREZXRhaWxzKHBsYWluVGV4dCk7XG4gIGNvbnN0IGRhdGVzOiBFdmVudERhdGVzID0gZXh0cmFjdFN0YXJ0QW5kRW5kRGF0ZXMocGxhaW5UZXh0KTtcbiAgY29uc3QgbWVldGluZ1VSTCA9IGV4dHJhY3RNZWV0aW5nVVJMKHBsYWluVGV4dCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0LFxuICAgIGRldGFpbHMsXG4gICAgZGF0ZXMsXG4gICAgbG9jYXRpb246IG1lZXRpbmdVUkwsXG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBleHRyYWN0TWVldGluZ1VSTCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCB1cmxSZWdleCA9IFtcbiAgICAvaHR0cHM6XFwvXFwvKD86W2EtekEtWjAtOS1dK1xcLik/em9vbVxcLnVzXFwvalxcL1thLXpBLVowLTldKyg/OlxcP3B3ZD1bYS16QS1aMC05XSspPy8sIC8vIFpvb21cbiAgICAvaHR0cHM6XFwvXFwvbWVldFxcLmdvb2dsZVxcLmNvbVxcL1thLXpBLVowLTldezN9LVthLXpBLVowLTldezR9LVthLXpBLVowLTldezN9KD86XFw/Wy1hLXpBLVowLTk9Jl0rKT8vLCAvLyBHb29nbGUgTWVldFxuICBdO1xuXG4gIGZvciAoY29uc3QgcmVnZXggb2YgdXJsUmVnZXgpIHtcbiAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2gocmVnZXgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIl0sIm5hbWVzIjpbInBhcmFtVG9VUkxQYXJhbSIsImtleSIsInZhbHVlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0ZVRvUkZDNTU0NSIsImRhdGUiLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJkYXRlUGFyYW1Ub1VSTFBhcmFtIiwiZXZlbnREYXRlcyIsImlzQWxsZGF5Iiwic3RhcnQiLCJEYXRlIiwidGltZSIsImVuZCIsImV4dHJhY3RTdGFydEFuZEVuZERhdGVzIiwidGV4dCIsInllYXJBbmREYXlzIiwibm9ybWFsaXplZFRleHQiLCJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInplbmtha3VEaWdpdHNUb0hhbmtha3UiLCJBcnJheSIsImZyb20iLCJtYXRjaEFsbCIsIm1hcCIsIm1hdGNoIiwieWVhciIsImdyb3VwcyIsIk1hdGgiLCJmbG9vciIsImdldEZ1bGxZZWFyIiwibm9ybWFsaXplWWVhciIsInBhcnNlSW50IiwiZmlsdGVyIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwiaXNJbnZhbGlkRGF0ZSIsImZpbmRBbGxZZWFyQW5kRGF5cyIsInRpbWVzIiwiaG91ciIsIm1pbnV0ZSIsImZpbmRBbGxUaW1lcyIsImxlbmd0aCIsInNldEhvdXJzIiwiZW5kVGFyZ2V0RGF0ZSIsImVuZFRhcmdldFRpbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50RGV0YWlscyIsImV2ZW50UGFyYW1zIiwicGxhaW5UZXh0IiwiZGV0YWlscyIsImxpbmVzIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJleHRyYWN0RXZlbnRUaXRsZUFuZERldGFpbHMiLCJkYXRlcyIsIm1lZXRpbmdVUkwiLCJ1cmxSZWdleCIsInJlZ2V4IiwiZXh0cmFjdE1lZXRpbmdVUkwiLCJsb2NhdGlvbiIsIm1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zIiwiZXZlbnRVcmwiLCJldmVudCIsInVuZGVmaW5lZCIsInBhcmFtIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=