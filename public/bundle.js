(()=>{"use strict";const e=(e,t)=>`${e}=${encodeURIComponent(t)}`,t=e=>e.toISOString().replace(/-|:|\.\d+/g,""),r=(r,n={isAllday:!0,start:new Date})=>{const a=n.isAllday?t(n.start).replace(/T.*$/,""):`${t(n.start)}/${t(n.end)}`;return e(r,a)},n=e=>{const t=(e=>{const t=(e=>e.replace(/[０-９]/g,(e=>String.fromCharCode(e.charCodeAt(0)-65248))))(e);return Array.from(t.matchAll(/(?:(?<year>\d{1,4}[\/年])?\s*(?<date>\d{1,2}(?:[\/-]\d{1,2}|\s?[\/月]\s?\d{1,2}日?)))/g)).map((e=>{const t=e.groups?.year?(e=>e<100?e+100*Math.floor((new Date).getFullYear()/100):e)(parseInt(e.groups.year.replace(/[\/年]/g,""))):(new Date).getFullYear(),r=e.groups?.date.replace(/\s|月|日/g,"/").replace(/[\/年]/g,"-");return new Date(`${t}-${r}`)})).filter((e=>!(e=>Number.isNaN(e.getTime()))(e)))})(e),r=(e=>Array.from(e.matchAll(/(?<hour>\d{1,2})[:時](?<minute>\d{2})?/g)).map((e=>({hour:parseInt(e.groups?.hour??"0"),minute:parseInt(e.groups?.minute??"0")}))))(e);if(0===t.length)return{isAllday:!0,start:new Date};if(0===r.length)return{isAllday:!0,start:t[0]};const n=new Date(t[0].setHours(r[0].hour,r[0].minute)),a=t.length>1&&t[1].getTime()>t[0].getTime()?t[1]:t[0],o=r.length>1?r[1]:{hour:r[0].hour+1,minute:r[0].minute};return{isAllday:!1,start:n,end:new Date(a.setHours(o.hour,o.minute))}};document?.getElementById("generateLink")?.addEventListener("click",(function(){const t=document.getElementById("eventDetails")?.value,a=(e=>{const{text:t,details:r}=(e=>{const t=e.split("\n");return{text:t[0],details:t.slice(1).join("\n")}})(e);return{text:t,details:r,dates:n(e)}})(t),o=`https://calendar.google.com/calendar/render?action=TEMPLATE&${[e("text",(s=a).text),e("details",s.details),r("dates",s.dates),s.location?e("location",s.location):void 0].filter((e=>void 0!==e)).join("&")}`;var s;window.open(o,"_blank")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBTSxNQUx3Qi9DLEVBQXdCd0MsR0FNakQsRURwQm1CUSxDQUE4QlYsR0FDNUNXLEVGMENDLCtEQVBRLENBQ2IvRCxFQUFnQixRQUZ1QmdFLEVFbENHWCxHRm9DWnRDLE1BQzlCZixFQUFnQixVQUFXZ0UsRUFBTVQsU0FDakMvQyxFQUFvQixRQUFTd0QsRUFBTUgsT0FDbkNHLEVBQU1DLFNBQVdqRSxFQUFnQixXQUFZZ0UsRUFBTUMsZUFBWUMsR0FDL0QvQixRQUFRZ0MsUUFBb0JELElBQVZDLElBRWVSLEtBQUssT0FSQSxJQUFDSyxFRWhDekNJLE9BQU9DLEtBQUtOLEVBQVUsU0FDeEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvZXZlbnQvY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9ldmVudC9ldmVudC50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2V2ZW50L3BhcnNlci9kYXRlcy50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvZXZlbnQvcGFyc2VyL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEVWRU5UX1JPT1RfVVJMID0gXCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvcmVuZGVyP2FjdGlvbj1URU1QTEFURVwiOyIsImltcG9ydCB7IEVWRU5UX1JPT1RfVVJMIH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmV4cG9ydCB0eXBlIEV2ZW50RGF0ZXMgPVxuICB8IHtcbiAgICAgIGlzQWxsZGF5OiBmYWxzZTtcbiAgICAgIHN0YXJ0OiBEYXRlO1xuICAgICAgZW5kOiBEYXRlO1xuICAgIH1cbiAgfCB7XG4gICAgICBpc0FsbGRheTogdHJ1ZTtcbiAgICAgIHN0YXJ0OiBEYXRlO1xuICAgIH07XG5cbmV4cG9ydCB0eXBlIEdvb2dsZUNhbGVuZGFyRXZlbnQgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgZGV0YWlsczogc3RyaW5nO1xuICBkYXRlcz86IEV2ZW50RGF0ZXM7XG4gIGxvY2F0aW9uPzogc3RyaW5nO1xufTtcblxuY29uc3QgcGFyYW1Ub1VSTFBhcmFtID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWA7XG59O1xuXG5jb25zdCBkYXRlVG9SRkM1NTQ1ID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoLy18OnxcXC5cXGQrL2csICcnKTtcbn07XG5cbmNvbnN0IGRhdGVQYXJhbVRvVVJMUGFyYW0gPSAoXG4gIGtleTogc3RyaW5nLFxuICBldmVudERhdGVzOiBFdmVudERhdGVzID0ge1xuICAgIGlzQWxsZGF5OiB0cnVlLFxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICB9XG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGV2ZW50RGF0ZXMuaXNBbGxkYXlcbiAgICA/IGRhdGVUb1JGQzU1NDUoZXZlbnREYXRlcy5zdGFydCkucmVwbGFjZSgvVC4qJC8sICcnKVxuICAgIDogYCR7ZGF0ZVRvUkZDNTU0NShldmVudERhdGVzLnN0YXJ0KX0vJHtkYXRlVG9SRkM1NTQ1KGV2ZW50RGF0ZXMuZW5kKX1gO1xuICByZXR1cm4gcGFyYW1Ub1VSTFBhcmFtKGtleSwgdmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50VVJMID0gKGV2ZW50OiBHb29nbGVDYWxlbmRhckV2ZW50KTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gW1xuICAgIHBhcmFtVG9VUkxQYXJhbSgndGV4dCcsIGV2ZW50LnRleHQpLFxuICAgIHBhcmFtVG9VUkxQYXJhbSgnZGV0YWlscycsIGV2ZW50LmRldGFpbHMpLFxuICAgIGRhdGVQYXJhbVRvVVJMUGFyYW0oJ2RhdGVzJywgZXZlbnQuZGF0ZXMpLFxuICAgIGV2ZW50LmxvY2F0aW9uID8gcGFyYW1Ub1VSTFBhcmFtKCdsb2NhdGlvbicsIGV2ZW50LmxvY2F0aW9uKSA6IHVuZGVmaW5lZCxcbiAgXS5maWx0ZXIoKHBhcmFtKSA9PiBwYXJhbSAhPT0gdW5kZWZpbmVkKTtcblxuICByZXR1cm4gYCR7RVZFTlRfUk9PVF9VUkx9JiR7cGFyYW1zLmpvaW4oJyYnKX1gO1xufTtcbiIsImltcG9ydCB7IEV2ZW50RGF0ZXMgfSBmcm9tICcuLi9ldmVudCc7XG5cbmNvbnN0IHplbmtha3VEaWdpdHNUb0hhbmtha3UgPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvW++8kC3vvJldL2csIChzKSA9PiB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocy5jaGFyQ29kZUF0KDApIC0gMHhmZWUwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVZZWFyID0gKHllYXI6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGlmICh5ZWFyIDwgMTAwKSB7XG4gICAgY29uc3QgY3VycmVudENlbnR1cnkgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAvIDEwMCkgKiAxMDA7XG4gICAgcmV0dXJuIHllYXIgKyBjdXJyZW50Q2VudHVyeTtcbiAgfVxuICByZXR1cm4geWVhcjtcbn07XG5cbmNvbnN0IGlzSW52YWxpZERhdGUgPSAoZGF0ZTogRGF0ZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn07XG5cbmNvbnN0IGZpbmRBbGxZZWFyQW5kRGF5cyA9ICh0ZXh0OiBzdHJpbmcpOiBEYXRlW10gPT4ge1xuICBjb25zdCBub3JtYWxpemVkVGV4dCA9IHplbmtha3VEaWdpdHNUb0hhbmtha3UodGV4dCk7XG5cbiAgY29uc3QgZGF0ZVJlZ2V4ID1cbiAgICAvKD86KD88eWVhcj5cXGR7MSw0fVtcXC/lubRdKT9cXHMqKD88ZGF0ZT5cXGR7MSwyfSg/OltcXC8tXVxcZHsxLDJ9fFxccz9bXFwv5pyIXVxccz9cXGR7MSwyfeaXpT8pKSkvZztcbiAgY29uc3QgbWF0Y2hlcyA9IEFycmF5LmZyb20obm9ybWFsaXplZFRleHQubWF0Y2hBbGwoZGF0ZVJlZ2V4KSk7XG5cbiAgY29uc3QgZGF0ZXMgPSBtYXRjaGVzLm1hcCgobWF0Y2gpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gbWF0Y2guZ3JvdXBzPy55ZWFyXG4gICAgICA/IG5vcm1hbGl6ZVllYXIocGFyc2VJbnQobWF0Y2guZ3JvdXBzLnllYXIucmVwbGFjZSgvW1xcL+W5tF0vZywgJycpKSlcbiAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGRhdGUgPSBtYXRjaC5ncm91cHM/LmRhdGUucmVwbGFjZSgvXFxzfOaciHzml6UvZywgJy8nKS5yZXBsYWNlKC9bXFwv5bm0XS9nLCAnLScpO1xuICAgIHJldHVybiBuZXcgRGF0ZShgJHt5ZWFyfS0ke2RhdGV9YCk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRlcy5maWx0ZXIoKGRhdGUpID0+ICFpc0ludmFsaWREYXRlKGRhdGUpKTtcbn07XG5cbnR5cGUgVGltZSA9IHtcbiAgaG91cjogbnVtYmVyO1xuICBtaW51dGU6IG51bWJlcjtcbn07XG5cbmNvbnN0IGZpbmRBbGxUaW1lcyA9ICh0ZXh0OiBzdHJpbmcpOiBUaW1lW10gPT4ge1xuICBjb25zdCB0aW1lUmVnZXggPSAvKD88aG91cj5cXGR7MSwyfSlbOuaZgl0oPzxtaW51dGU+XFxkezJ9KT8vZztcbiAgY29uc3QgbWF0Y2hlcyA9IEFycmF5LmZyb20odGV4dC5tYXRjaEFsbCh0aW1lUmVnZXgpKTtcblxuICBjb25zdCB0aW1lcyA9IG1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBob3VyOiBwYXJzZUludChtYXRjaC5ncm91cHM/LmhvdXIgPz8gJzAnKSxcbiAgICAgIG1pbnV0ZTogcGFyc2VJbnQobWF0Y2guZ3JvdXBzPy5taW51dGUgPz8gJzAnKSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gdGltZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0cmFjdFN0YXJ0QW5kRW5kRGF0ZXMgPSAodGV4dDogc3RyaW5nKTogRXZlbnREYXRlcyA9PiB7XG4gIGNvbnN0IHllYXJBbmREYXlzID0gZmluZEFsbFllYXJBbmREYXlzKHRleHQpO1xuICBjb25zdCB0aW1lcyA9IGZpbmRBbGxUaW1lcyh0ZXh0KTtcblxuICBpZiAoeWVhckFuZERheXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWxsZGF5OiB0cnVlLFxuICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIGlmICh0aW1lcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBbGxkYXk6IHRydWUsXG4gICAgICBzdGFydDogeWVhckFuZERheXNbMF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoeWVhckFuZERheXNbMF0uc2V0SG91cnModGltZXNbMF0uaG91ciwgdGltZXNbMF0ubWludXRlKSk7XG4gIGNvbnN0IGVuZFRhcmdldERhdGUgPVxuICAgIHllYXJBbmREYXlzLmxlbmd0aCA+IDEgJiYgeWVhckFuZERheXNbMV0uZ2V0VGltZSgpID4geWVhckFuZERheXNbMF0uZ2V0VGltZSgpXG4gICAgICA/IHllYXJBbmREYXlzWzFdXG4gICAgICA6IHllYXJBbmREYXlzWzBdO1xuICBjb25zdCBlbmRUYXJnZXRUaW1lID1cbiAgICB0aW1lcy5sZW5ndGggPiAxID8gdGltZXNbMV0gOiB7IGhvdXI6IHRpbWVzWzBdLmhvdXIgKyAxLCBtaW51dGU6IHRpbWVzWzBdLm1pbnV0ZSB9O1xuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmRUYXJnZXREYXRlLnNldEhvdXJzKGVuZFRhcmdldFRpbWUuaG91ciwgZW5kVGFyZ2V0VGltZS5taW51dGUpKTtcblxuICByZXR1cm4ge1xuICAgIGlzQWxsZGF5OiBmYWxzZSxcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRVUkwgfSBmcm9tIFwiLi9ldmVudC9ldmVudFwiXG5pbXBvcnQgeyBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFBhcmFtcyB9IGZyb20gXCIuL2V2ZW50L3BhcnNlci9tYWluXCJcblxuXG5kb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlTGluaycpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXZlbnREZXRhaWxzID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudERldGFpbHMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KT8udmFsdWU7XG4gIGNvbnN0IGV2ZW50UGFyYW1zID0gbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRQYXJhbXMoZXZlbnREZXRhaWxzKTtcbiAgY29uc3QgZXZlbnRVcmwgPSBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFVSTChldmVudFBhcmFtcyk7XG5cbiAgd2luZG93Lm9wZW4oZXZlbnRVcmwsICdfYmxhbmsnKTtcbn0pOyIsImltcG9ydCB7IEV2ZW50RGF0ZXMsIEdvb2dsZUNhbGVuZGFyRXZlbnQsIG1ha2VHb29nbGVDYWxlbmRhckV2ZW50VVJMIH0gZnJvbSAnLi4vZXZlbnQnO1xuaW1wb3J0IHsgZXh0cmFjdFN0YXJ0QW5kRW5kRGF0ZXMgfSBmcm9tICcuL2RhdGVzJztcblxuLyoqXG4gKiB0ZXh044GL44KJ44Kk44OZ44Oz44OI44K/44Kk44OI44Or44KS5oq95Ye644GZ44KL44CCXG4gKiDmnIDliJ3jga7ooYzjgpLjgqTjg5njg7Pjg4jjgr/jgqTjg4jjg6vjgajjgZfjgabmibHjgYbjgIJcbiAqL1xuY29uc3QgZXh0cmFjdEV2ZW50VGl0bGVBbmREZXRhaWxzID0gKFxuICB0ZXh0OiBzdHJpbmdcbik6IFBpY2s8R29vZ2xlQ2FsZW5kYXJFdmVudCwgJ3RleHQnIHwgJ2RldGFpbHMnPiA9PiB7XG4gIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiBsaW5lc1swXSxcbiAgICBkZXRhaWxzOiBsaW5lcy5zbGljZSgxKS5qb2luKCdcXG4nKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFBhcmFtcyA9IChwbGFpblRleHQ6IHN0cmluZyk6IEdvb2dsZUNhbGVuZGFyRXZlbnQgPT4ge1xuICBjb25zdCB7IHRleHQsIGRldGFpbHMgfSA9IGV4dHJhY3RFdmVudFRpdGxlQW5kRGV0YWlscyhwbGFpblRleHQpO1xuICBjb25zdCBkYXRlczogRXZlbnREYXRlcyA9IGV4dHJhY3RTdGFydEFuZEVuZERhdGVzKHBsYWluVGV4dCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0LFxuICAgIGRldGFpbHMsXG4gICAgZGF0ZXMsXG4gIH07XG59OyJdLCJuYW1lcyI6WyJwYXJhbVRvVVJMUGFyYW0iLCJrZXkiLCJ2YWx1ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRhdGVUb1JGQzU1NDUiLCJkYXRlIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwiZGF0ZVBhcmFtVG9VUkxQYXJhbSIsImV2ZW50RGF0ZXMiLCJpc0FsbGRheSIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsImV4dHJhY3RTdGFydEFuZEVuZERhdGVzIiwidGV4dCIsInllYXJBbmREYXlzIiwibm9ybWFsaXplZFRleHQiLCJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInplbmtha3VEaWdpdHNUb0hhbmtha3UiLCJBcnJheSIsImZyb20iLCJtYXRjaEFsbCIsIm1hcCIsIm1hdGNoIiwieWVhciIsImdyb3VwcyIsIk1hdGgiLCJmbG9vciIsImdldEZ1bGxZZWFyIiwibm9ybWFsaXplWWVhciIsInBhcnNlSW50IiwiZmlsdGVyIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwiaXNJbnZhbGlkRGF0ZSIsImZpbmRBbGxZZWFyQW5kRGF5cyIsInRpbWVzIiwiaG91ciIsIm1pbnV0ZSIsImZpbmRBbGxUaW1lcyIsImxlbmd0aCIsInNldEhvdXJzIiwiZW5kVGFyZ2V0RGF0ZSIsImVuZFRhcmdldFRpbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50RGV0YWlscyIsImV2ZW50UGFyYW1zIiwicGxhaW5UZXh0IiwiZGV0YWlscyIsImxpbmVzIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJleHRyYWN0RXZlbnRUaXRsZUFuZERldGFpbHMiLCJkYXRlcyIsIm1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zIiwiZXZlbnRVcmwiLCJldmVudCIsImxvY2F0aW9uIiwidW5kZWZpbmVkIiwicGFyYW0iLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==