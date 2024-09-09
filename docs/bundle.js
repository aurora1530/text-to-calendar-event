(()=>{"use strict";const e=(e,t)=>`${e}=${encodeURIComponent(t)}`,t=e=>e.toISOString().replace(/-|:|\.\d+/g,""),n=(n,r={isAllday:!0,start:new Date})=>{if(r.isAllday){const a=t(r.start).replace(/T.*$/,"");return e(n,`${a}/${a}`)}const a=t(r.start),o=t(r.end);return e(n,`${a}/${o}`)},r=(e,t)=>({hour:e.hour+t.hour,minute:e.minute+t.minute}),a=(e,t)=>new Date(e.setHours(t.hour,t.minute)),o=e=>{const t=(e=>{const t=(e=>e.replace(/[０-９]/g,(e=>String.fromCharCode(e.charCodeAt(0)-65248))))(e).replace(/\s/g,"");return Array.from(t.matchAll(/(?:(?<year>\d{1,4}[\/年])?\s*(?<date>\d{1,2}(?:[\/-]\d{1,2}|\s?[\/月]\s?\d{1,2}日?)))/g)).map((e=>{const t=e.groups?.year?(e=>e<100?e+100*Math.floor((new Date).getFullYear()/100):e)(parseInt(e.groups.year.replace(/[\/年]/g,""))):(new Date).getFullYear(),n=e.groups?.date.replace(/\s|月/g,"/").replace(/[\/年]/g,"-").replace(/日/g,"");return new Date(`${t}-${n}`)})).filter((e=>!(e=>Number.isNaN(e.getTime()))(e)))})(e),n=(e=>Array.from(e.matchAll(/(?<hour>\d{1,2})[:：時](?<minute>\d{2})?(?!間)/g)).map((e=>({hour:parseInt(e.groups?.hour??"0"),minute:parseInt(e.groups?.minute??"0")}))))(e);if(0===t.length)return{isAllday:!0,start:new Date};if(0===n.length)return{isAllday:!0,start:t[0]};const o=a(t[0],n[0]),s=t.length>1&&t[1].getTime()>t[0].getTime()?t[1]:t[0],i=(e=>{const t=e.match(/(?<hour>\d{1,2})時間(?<minute>(半|\d{1,2}分))?/);if(t&&t.groups?.hour)return{hour:parseInt(t.groups.hour),minute:"半"===t.groups?.minute?30:parseInt(t.groups?.minute??"0")}})(e),l=i?r(n[0],i):n.length>1?n[1]:r(n[0],{hour:1,minute:0});return{isAllday:!1,start:o,end:a(s,l)}},s=e=>{const{text:t,details:n}=(e=>{const t=e.split("\n");return{text:t[0],details:t.slice(1).join("\n")}})(e),r=o(e),a=(e=>{const t=[/https:\/\/(?:[a-zA-Z0-9-]+\.)?zoom\.us\/j\/[a-zA-Z0-9]+(?:\?pwd=[a-zA-Z0-9]+)?/,/https:\/\/meet\.google\.com\/[a-zA-Z0-9]{3}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}(?:\?[-a-zA-Z0-9=&]+)?/];for(const n of t){const t=e.match(n);if(t)return t[0]}})(e);return{text:t,details:n,dates:r,location:a}};let i,l=s("");document?.getElementById("eventDetails")?.addEventListener("paste",(async()=>{const e=document.getElementById("useHtml")?.checked??!1;i=e?await(async()=>{try{const e=await navigator.clipboard.read();for(const t of e)if(t.types.includes("text/html")){const e=await t.getType("text/html");return await e.text()}return}catch(e){return void console.error(e)}})():void 0,i=i?(e=>{const t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("[style]").forEach((e=>{e.removeAttribute("style")})),t.documentElement.innerHTML})(i):void 0;const t=document.getElementById("eventDetails"),n=new Event("input",{bubbles:!0});t.dispatchEvent(n)})),document?.getElementById("eventDetails")?.addEventListener("input",(()=>{const e=document.getElementById("eventDetails")?.value,t=i?e.split("\n")[0]+"\n"+i:e;l=s(t),(e=>{if(document.getElementById("previewTitle").innerText=e.text,document.getElementById("previewDescription").innerHTML=(e=>{const t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("script").forEach((e=>{e.remove()})),t.documentElement.innerHTML})(e.details),document.getElementById("previewLocation").innerText=e.location??"",!e.dates)return;const t=e.dates.isAllday?e.dates.start.toLocaleDateString():`${e.dates.start.toLocaleString()} - ${e.dates.end.toLocaleString()}`;document.getElementById("previewDate").innerText=t})(l)})),document?.getElementById("generateLink")?.addEventListener("click",(()=>{const t=`https://calendar.google.com/calendar/render?action=TEMPLATE&${[e("text",(r=l).text),e("details",r.details),n("dates",r.dates),r.location?e("location",r.location):void 0].filter((e=>void 0!==e)).join("&")}`;var r;window.open(t,"_blank")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0UxQyxTQUFTQyxlQUFlLGVBQWdCb0MsVUFBWUcsQ0FDOUMsRUZZTkcsQ0FBVzVDLEVBQVksSUFHekJDLFVBQVVDLGVBQWUsaUJBQWlCQyxpQkFBaUIsU0FBUyxLQUNsRSxNQUFNMEMsRUpvQkMsK0RBUFEsQ0FDYnBILEVBQWdCLFFBRnVCcUgsRUlaRzlDLEdKY1poRCxNQUM5QnZCLEVBQWdCLFVBQVdxSCxFQUFNM0QsU0FDakNsRCxFQUFvQixRQUFTNkcsRUFBTXJELE9BQ25DcUQsRUFBTWhELFNBQVdyRSxFQUFnQixXQUFZcUgsRUFBTWhELGVBQVlzQixHQUMvRGhELFFBQVEyRSxRQUFvQjNCLElBQVYyQixJQUVleEQsS0FBSyxPQVJBLElBQUN1RCxFSVZ6Q0UsT0FBT0MsS0FBS0osRUFBVSxTQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2xpYi9jbGlwYm9hcmQudHMiLCJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9ldmVudC9ldmVudC50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2V2ZW50L3BhcnNlci9kYXRlcy50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2V2ZW50L3BhcnNlci9tYWluLnRzIiwid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvZXZlbnQvcGFyc2VyL2xvY2F0aW9uLnRzIiwid2VicGFjazovL3RleHQtdG8tY2FsZW5kYXItZXZlbnQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGV4dC10by1jYWxlbmRhci1ldmVudC8uL3NyYy9saWIvaHRtbC50cyIsIndlYnBhY2s6Ly90ZXh0LXRvLWNhbGVuZGFyLWV2ZW50Ly4vc3JjL2xpYi9wcmV2aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRDbGlwYm9hcmRIVE1MID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaXBib2FyZEl0ZW1zID0gYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkKCk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2xpcGJvYXJkSXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGVzLmluY2x1ZGVzKCd0ZXh0L2h0bWwnKSkge1xuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgaXRlbS5nZXRUeXBlKCd0ZXh0L2h0bWwnKTtcbiAgICAgICAgY29uc3QgaHRtbFRleHQgPSBhd2FpdCBibG9iLnRleHQoKTtcbiAgICAgICAgcmV0dXJuIGh0bWxUZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBFVkVOVF9ST09UX1VSTCB9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5leHBvcnQgdHlwZSBFdmVudERhdGVzID1cbiAgfCB7XG4gICAgICBpc0FsbGRheTogZmFsc2U7XG4gICAgICBzdGFydDogRGF0ZTtcbiAgICAgIGVuZDogRGF0ZTtcbiAgICB9XG4gIHwge1xuICAgICAgaXNBbGxkYXk6IHRydWU7XG4gICAgICBzdGFydDogRGF0ZTtcbiAgICB9O1xuXG5leHBvcnQgdHlwZSBHb29nbGVDYWxlbmRhckV2ZW50ID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGRldGFpbHM6IHN0cmluZztcbiAgZGF0ZXM/OiBFdmVudERhdGVzO1xuICBsb2NhdGlvbj86IHN0cmluZztcbn07XG5cbmNvbnN0IHBhcmFtVG9VUkxQYXJhbSA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gO1xufTtcblxuY29uc3QgZGF0ZVRvUkZDNTU0NSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5yZXBsYWNlKC8tfDp8XFwuXFxkKy9nLCAnJyk7XG59O1xuXG5jb25zdCBkYXRlUGFyYW1Ub1VSTFBhcmFtID0gKFxuICBrZXk6IHN0cmluZyxcbiAgZXZlbnREYXRlczogRXZlbnREYXRlcyA9IHtcbiAgICBpc0FsbGRheTogdHJ1ZSxcbiAgICBzdGFydDogbmV3IERhdGUoKSxcbiAgfVxuKTogc3RyaW5nID0+IHtcbiAgaWYoZXZlbnREYXRlcy5pc0FsbGRheSl7XG4gICAgY29uc3QgdGltZSA9IGRhdGVUb1JGQzU1NDUoZXZlbnREYXRlcy5zdGFydCkucmVwbGFjZSgvVC4qJC8sICcnKTtcbiAgICByZXR1cm4gcGFyYW1Ub1VSTFBhcmFtKGtleSwgYCR7dGltZX0vJHt0aW1lfWApO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSBkYXRlVG9SRkM1NTQ1KGV2ZW50RGF0ZXMuc3RhcnQpO1xuICBjb25zdCBlbmQgPSBkYXRlVG9SRkM1NTQ1KGV2ZW50RGF0ZXMuZW5kKTtcbiAgcmV0dXJuIHBhcmFtVG9VUkxQYXJhbShrZXksIGAke3N0YXJ0fS8ke2VuZH1gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFVSTCA9IChldmVudDogR29vZ2xlQ2FsZW5kYXJFdmVudCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IFtcbiAgICBwYXJhbVRvVVJMUGFyYW0oJ3RleHQnLCBldmVudC50ZXh0KSxcbiAgICBwYXJhbVRvVVJMUGFyYW0oJ2RldGFpbHMnLCBldmVudC5kZXRhaWxzKSxcbiAgICBkYXRlUGFyYW1Ub1VSTFBhcmFtKCdkYXRlcycsIGV2ZW50LmRhdGVzKSxcbiAgICBldmVudC5sb2NhdGlvbiA/IHBhcmFtVG9VUkxQYXJhbSgnbG9jYXRpb24nLCBldmVudC5sb2NhdGlvbikgOiB1bmRlZmluZWQsXG4gIF0uZmlsdGVyKChwYXJhbSkgPT4gcGFyYW0gIT09IHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIGAke0VWRU5UX1JPT1RfVVJMfSYke3BhcmFtcy5qb2luKCcmJyl9YDtcbn07XG4iLCJpbXBvcnQgeyBFdmVudERhdGVzIH0gZnJvbSAnLi4vZXZlbnQnO1xuXG5jb25zdCB6ZW5rYWt1RGlnaXRzVG9IYW5rYWt1ID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL1vvvJAt77yZXS9nLCAocykgPT4ge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHMuY2hhckNvZGVBdCgwKSAtIDB4ZmVlMCk7XG4gIH0pO1xufTtcblxuY29uc3Qgbm9ybWFsaXplWWVhciA9ICh5ZWFyOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBpZiAoeWVhciA8IDEwMCkge1xuICAgIGNvbnN0IGN1cnJlbnRDZW50dXJ5ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLyAxMDApICogMTAwO1xuICAgIHJldHVybiB5ZWFyICsgY3VycmVudENlbnR1cnk7XG4gIH1cbiAgcmV0dXJuIHllYXI7XG59O1xuXG5jb25zdCBpc0ludmFsaWREYXRlID0gKGRhdGU6IERhdGUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSk7XG59O1xuXG5jb25zdCBmaW5kQWxsWWVhckFuZERheXMgPSAodGV4dDogc3RyaW5nKTogRGF0ZVtdID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZFRleHQgPSB6ZW5rYWt1RGlnaXRzVG9IYW5rYWt1KHRleHQpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIGNvbnN0IGRhdGVSZWdleCA9XG4gICAgLyg/Oig/PHllYXI+XFxkezEsNH1bXFwv5bm0XSk/XFxzKig/PGRhdGU+XFxkezEsMn0oPzpbXFwvLV1cXGR7MSwyfXxcXHM/W1xcL+aciF1cXHM/XFxkezEsMn3ml6U/KSkpL2c7XG4gIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKG5vcm1hbGl6ZWRUZXh0Lm1hdGNoQWxsKGRhdGVSZWdleCkpO1xuXG4gIGNvbnN0IGRhdGVzID0gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IG1hdGNoLmdyb3Vwcz8ueWVhclxuICAgICAgPyBub3JtYWxpemVZZWFyKHBhcnNlSW50KG1hdGNoLmdyb3Vwcy55ZWFyLnJlcGxhY2UoL1tcXC/lubRdL2csICcnKSkpXG4gICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBkYXRlID0gbWF0Y2guZ3JvdXBzPy5kYXRlXG4gICAgICAucmVwbGFjZSgvXFxzfOaciC9nLCAnLycpXG4gICAgICAucmVwbGFjZSgvW1xcL+W5tF0vZywgJy0nKVxuICAgICAgLnJlcGxhY2UoL+aXpS9nLCAnJyk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGAke3llYXJ9LSR7ZGF0ZX1gKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGVzLmZpbHRlcigoZGF0ZSkgPT4gIWlzSW52YWxpZERhdGUoZGF0ZSkpO1xufTtcblxudHlwZSBUaW1lID0ge1xuICBob3VyOiBudW1iZXI7XG4gIG1pbnV0ZTogbnVtYmVyO1xufTtcblxuY29uc3QgZmluZEFsbFRpbWVzID0gKHRleHQ6IHN0cmluZyk6IFRpbWVbXSA9PiB7XG4gIGNvbnN0IHRpbWVSZWdleCA9IC8oPzxob3VyPlxcZHsxLDJ9KVs677ya5pmCXSg/PG1pbnV0ZT5cXGR7Mn0pPyg/IemWkykvZztcbiAgY29uc3QgbWF0Y2hlcyA9IEFycmF5LmZyb20odGV4dC5tYXRjaEFsbCh0aW1lUmVnZXgpKTtcblxuICBjb25zdCB0aW1lcyA9IG1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBob3VyOiBwYXJzZUludChtYXRjaC5ncm91cHM/LmhvdXIgPz8gJzAnKSxcbiAgICAgIG1pbnV0ZTogcGFyc2VJbnQobWF0Y2guZ3JvdXBzPy5taW51dGUgPz8gJzAnKSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gdGltZXM7XG59O1xuXG5jb25zdCBmaW5kVGltZVJhbmdlID0gKHRleHQ6IHN0cmluZyk6IFRpbWUgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCB0aW1lUmVnZXggPSAvKD88aG91cj5cXGR7MSwyfSnmmYLplpMoPzxtaW51dGU+KOWNinxcXGR7MSwyfeWIhikpPy87XG4gIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCh0aW1lUmVnZXgpO1xuXG4gIGlmICghbWF0Y2ggfHwgIW1hdGNoLmdyb3Vwcz8uaG91cikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhvdXIgPSBwYXJzZUludChtYXRjaC5ncm91cHMuaG91cik7XG4gIGNvbnN0IG1pbnV0ZSA9XG4gICAgbWF0Y2guZ3JvdXBzPy5taW51dGUgPT09ICfljYonID8gMzAgOiBwYXJzZUludChtYXRjaC5ncm91cHM/Lm1pbnV0ZSA/PyAnMCcpO1xuICByZXR1cm4geyBob3VyLCBtaW51dGUgfTtcbn07XG5cbmNvbnN0IGFkZFRpbWUgPSAoeDogVGltZSwgeTogVGltZSk6IFRpbWUgPT4ge1xuICByZXR1cm4ge1xuICAgIGhvdXI6IHguaG91ciArIHkuaG91cixcbiAgICBtaW51dGU6IHgubWludXRlICsgeS5taW51dGUsXG4gIH07XG59O1xuXG5jb25zdCBzZXRUaW1lVG9EYXRlID0gKGRhdGU6IERhdGUsIHRpbWU6IFRpbWUpOiBEYXRlID0+IHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0SG91cnModGltZS5ob3VyLCB0aW1lLm1pbnV0ZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RTdGFydEFuZEVuZERhdGVzID0gKHRleHQ6IHN0cmluZyk6IEV2ZW50RGF0ZXMgPT4ge1xuICBjb25zdCB5ZWFyQW5kRGF5cyA9IGZpbmRBbGxZZWFyQW5kRGF5cyh0ZXh0KTtcbiAgY29uc3QgdGltZXMgPSBmaW5kQWxsVGltZXModGV4dCk7XG5cbiAgaWYgKHllYXJBbmREYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FsbGRheTogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgIH07XG4gIH1cblxuICBpZiAodGltZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWxsZGF5OiB0cnVlLFxuICAgICAgc3RhcnQ6IHllYXJBbmREYXlzWzBdLFxuICAgIH07XG4gIH1cblxuICAvLyBzdGFydOOBruaXpeS7mOOBq+aZguWIu+OCkuioreWumlxuICBjb25zdCBzdGFydCA9IHNldFRpbWVUb0RhdGUoeWVhckFuZERheXNbMF0sIHRpbWVzWzBdKTtcblxuICAvLyBlbmTjga7ml6Xku5jjgpLmjIflrprjgILmmYLliLvjgYzopIfmlbDjgYLjgovloLTlkIjjga/vvJLjgaTnm67jgpLjgIHjgarjgYTloLTlkIjjga/vvJHjgaTnm67vvIhzdGFydOOBqOWQjOOBmO+8ieOCkuS9v+OBhuOAglxuICAvLyDjgZ/jgaDjgZfjgIHvvJLjgaTnm67jga7ml6Xku5jjgYzvvJHjgaTnm67jgojjgorliY3jga7loLTlkIjjga/vvJHjgaTnm67jgpLkvb/jgYbjgIJcbiAgY29uc3QgZW5kVGFyZ2V0RGF0ZSA9XG4gICAgeWVhckFuZERheXMubGVuZ3RoID4gMSAmJiB5ZWFyQW5kRGF5c1sxXS5nZXRUaW1lKCkgPiB5ZWFyQW5kRGF5c1swXS5nZXRUaW1lKClcbiAgICAgID8geWVhckFuZERheXNbMV1cbiAgICAgIDogeWVhckFuZERheXNbMF07XG5cbiAgLy8g5omA6KaB5pmC6ZaT44GM5oyH5a6a44GV44KM44Gm44GE44KL5aC05ZCI44Gv44CBc3RhcnTjga7mmYLliLvjgavmiYDopoHmmYLplpPjgpLliqDnrpfjgZfjgaZlbmTjga7mmYLliLvjgpLoqK3lrppcbiAgLy8g5oyH5a6a44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gv44CB77yS44Gk55uu44Gu5pmC5Yi744G+44Gf44Gvc3RhcnTjga7mmYLliLvjgavvvJHmmYLplpPjgpLliqDnrpfjgZfjgaZlbmTjga7mmYLliLvjgpLoqK3lrppcbiAgY29uc3QgdGltZVJhbmdlID0gZmluZFRpbWVSYW5nZSh0ZXh0KTtcbiAgY29uc3QgZW5kVGFyZ2V0VGltZSA9IHRpbWVSYW5nZVxuICAgID8gYWRkVGltZSh0aW1lc1swXSwgdGltZVJhbmdlKVxuICAgIDogdGltZXMubGVuZ3RoID4gMVxuICAgID8gdGltZXNbMV1cbiAgICA6IGFkZFRpbWUodGltZXNbMF0sIHsgaG91cjogMSwgbWludXRlOiAwIH0pO1xuICBjb25zdCBlbmQgPSBzZXRUaW1lVG9EYXRlKGVuZFRhcmdldERhdGUsIGVuZFRhcmdldFRpbWUpO1xuXG4gIHJldHVybiB7XG4gICAgaXNBbGxkYXk6IGZhbHNlLFxuICAgIHN0YXJ0LFxuICAgIGVuZCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBFdmVudERhdGVzLCBHb29nbGVDYWxlbmRhckV2ZW50LCBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFVSTCB9IGZyb20gJy4uL2V2ZW50JztcbmltcG9ydCB7IGV4dHJhY3RTdGFydEFuZEVuZERhdGVzIH0gZnJvbSAnLi9kYXRlcyc7XG5pbXBvcnQgeyBleHRyYWN0TWVldGluZ1VSTCB9IGZyb20gJy4vbG9jYXRpb24nO1xuXG4vKipcbiAqIHRleHTjgYvjgonjgqTjg5njg7Pjg4jjgr/jgqTjg4jjg6vjgpLmir3lh7rjgZnjgovjgIJcbiAqIOacgOWIneOBruihjOOCkuOCpOODmeODs+ODiOOCv+OCpOODiOODq+OBqOOBl+OBpuaJseOBhuOAglxuICovXG5jb25zdCBleHRyYWN0RXZlbnRUaXRsZUFuZERldGFpbHMgPSAoXG4gIHRleHQ6IHN0cmluZ1xuKTogUGljazxHb29nbGVDYWxlbmRhckV2ZW50LCAndGV4dCcgfCAnZGV0YWlscyc+ID0+IHtcbiAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcblxuICByZXR1cm4ge1xuICAgIHRleHQ6IGxpbmVzWzBdLFxuICAgIGRldGFpbHM6IGxpbmVzLnNsaWNlKDEpLmpvaW4oJ1xcbicpLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zID0gKHBsYWluVGV4dDogc3RyaW5nKTogR29vZ2xlQ2FsZW5kYXJFdmVudCA9PiB7XG4gIGNvbnN0IHsgdGV4dCwgZGV0YWlscyB9ID0gZXh0cmFjdEV2ZW50VGl0bGVBbmREZXRhaWxzKHBsYWluVGV4dCk7XG4gIGNvbnN0IGRhdGVzOiBFdmVudERhdGVzID0gZXh0cmFjdFN0YXJ0QW5kRW5kRGF0ZXMocGxhaW5UZXh0KTtcbiAgY29uc3QgbWVldGluZ1VSTCA9IGV4dHJhY3RNZWV0aW5nVVJMKHBsYWluVGV4dCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0LFxuICAgIGRldGFpbHMsXG4gICAgZGF0ZXMsXG4gICAgbG9jYXRpb246IG1lZXRpbmdVUkwsXG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBleHRyYWN0TWVldGluZ1VSTCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCB1cmxSZWdleCA9IFtcbiAgICAvaHR0cHM6XFwvXFwvKD86W2EtekEtWjAtOS1dK1xcLik/em9vbVxcLnVzXFwvalxcL1thLXpBLVowLTldKyg/OlxcP3B3ZD1bYS16QS1aMC05XSspPy8sIC8vIFpvb21cbiAgICAvaHR0cHM6XFwvXFwvbWVldFxcLmdvb2dsZVxcLmNvbVxcL1thLXpBLVowLTldezN9LVthLXpBLVowLTldezR9LVthLXpBLVowLTldezN9KD86XFw/Wy1hLXpBLVowLTk9Jl0rKT8vLCAvLyBHb29nbGUgTWVldFxuICBdO1xuXG4gIGZvciAoY29uc3QgcmVnZXggb2YgdXJsUmVnZXgpIHtcbiAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2gocmVnZXgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q2xpcGJvYXJkSFRNTCB9IGZyb20gJy4vbGliL2NsaXBib2FyZCc7XG5pbXBvcnQgeyBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFVSTCB9IGZyb20gJy4vZXZlbnQvZXZlbnQnO1xuaW1wb3J0IHsgbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRQYXJhbXMgfSBmcm9tICcuL2V2ZW50L3BhcnNlci9tYWluJztcbmltcG9ydCB7IHNldFByZXZpZXcgfSBmcm9tICcuL2xpYi9wcmV2aWV3JztcbmltcG9ydCB7IHJlbW92ZUFsbFN0eWxlQXR0cmlidXRlcyB9IGZyb20gJy4vbGliL2h0bWwnO1xuXG5sZXQgZXZlbnRQYXJhbXMgPSBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFBhcmFtcygnJyk7XG5sZXQgY2xpcGJvYXJkSHRtbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5kb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50RGV0YWlscycpPy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXNlSHRtbCA9XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VIdG1sJykgYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQgPz8gZmFsc2U7XG4gIGNsaXBib2FyZEh0bWwgPSB1c2VIdG1sID8gYXdhaXQgZ2V0Q2xpcGJvYXJkSFRNTCgpIDogdW5kZWZpbmVkO1xuICBjbGlwYm9hcmRIdG1sID0gY2xpcGJvYXJkSHRtbCA/IHJlbW92ZUFsbFN0eWxlQXR0cmlidXRlcyhjbGlwYm9hcmRIdG1sKSA6IHVuZGVmaW5lZDtcblxuICAvLyBQYXN0ZeOCpOODmeODs+ODiOOBruWHpueQhuOBjOe1guOCj+OBo+OBn+OCieOAgeaJi+WLleOBp2lucHV044Kk44OZ44Oz44OI44KS44OI44Oq44Ks44O844GZ44KLXG4gIGNvbnN0IGV2ZW50RGV0YWlsc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnREZXRhaWxzJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgY29uc3QgaW5wdXRFdmVudCA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIGV2ZW50RGV0YWlsc0VsZW1lbnQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcbn0pO1xuXG5kb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50RGV0YWlscycpPy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgY29uc3QgaW5wdXRUZXh0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudERldGFpbHMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KVxuICAgID8udmFsdWU7XG5cbiAgY29uc3QgdGV4dCA9IGNsaXBib2FyZEh0bWxcbiAgICA/IGlucHV0VGV4dC5zcGxpdCgnXFxuJylbMF0gKyAnXFxuJyArIGNsaXBib2FyZEh0bWxcbiAgICA6IGlucHV0VGV4dDtcbiAgZXZlbnRQYXJhbXMgPSBtYWtlR29vZ2xlQ2FsZW5kYXJFdmVudFBhcmFtcyh0ZXh0KTtcbiAgc2V0UHJldmlldyhldmVudFBhcmFtcyk7XG59KTtcblxuZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUxpbmsnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50VXJsID0gbWFrZUdvb2dsZUNhbGVuZGFyRXZlbnRVUkwoZXZlbnRQYXJhbXMpO1xuXG4gIHdpbmRvdy5vcGVuKGV2ZW50VXJsLCAnX2JsYW5rJyk7XG59KTtcbiIsIi8qKlxuICogaHRtbOODhuOCreOCueODiOWGheOBi+OCiXNjcmlwdOOCv+OCsOOCkuWFqOOBpuWJiumZpOOBmeOCi1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsU2NyaXB0VGFncyA9IChodG1sOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xuXG4gIGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogaHRtbOODhuOCreOCueODiOWGheOBi+OCiXN0eWxl5bGe5oCn44KS5YWo44Gm5YmK6Zmk44GZ44KLXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVBbGxTdHlsZUF0dHJpYnV0ZXMgPSAoaHRtbDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcblxuICBkb2MucXVlcnlTZWxlY3RvckFsbCgnW3N0eWxlXScpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIH0pO1xuXG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTDtcbn07XG4iLCJpbXBvcnQgeyBHb29nbGVDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vZXZlbnQvZXZlbnQnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsU2NyaXB0VGFncyB9IGZyb20gJy4vaHRtbCc7XG5cbmV4cG9ydCBjb25zdCBzZXRQcmV2aWV3ID0gKGV2ZW50UGFyYW1zOiBHb29nbGVDYWxlbmRhckV2ZW50KSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3VGl0bGUnKSEuaW5uZXJUZXh0ID0gZXZlbnRQYXJhbXMudGV4dDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdEZXNjcmlwdGlvbicpIS5pbm5lckhUTUwgPSByZW1vdmVBbGxTY3JpcHRUYWdzKFxuICAgIGV2ZW50UGFyYW1zLmRldGFpbHNcbiAgKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdMb2NhdGlvbicpIS5pbm5lclRleHQgPSBldmVudFBhcmFtcy5sb2NhdGlvbiA/PyAnJztcblxuICBpZiAoIWV2ZW50UGFyYW1zLmRhdGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRhdGVUZXh0ID0gZXZlbnRQYXJhbXMuZGF0ZXMuaXNBbGxkYXlcbiAgICA/IGV2ZW50UGFyYW1zLmRhdGVzLnN0YXJ0LnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgOiBgJHtldmVudFBhcmFtcy5kYXRlcy5zdGFydC50b0xvY2FsZVN0cmluZygpfSAtICR7ZXZlbnRQYXJhbXMuZGF0ZXMuZW5kLnRvTG9jYWxlU3RyaW5nKCl9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdEYXRlJykhLmlubmVyVGV4dCA9IGRhdGVUZXh0O1xuICByZXR1cm47XG59O1xuIl0sIm5hbWVzIjpbInBhcmFtVG9VUkxQYXJhbSIsImtleSIsInZhbHVlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0ZVRvUkZDNTU0NSIsImRhdGUiLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJkYXRlUGFyYW1Ub1VSTFBhcmFtIiwiZXZlbnREYXRlcyIsImlzQWxsZGF5Iiwic3RhcnQiLCJEYXRlIiwidGltZSIsImVuZCIsImFkZFRpbWUiLCJ4IiwieSIsImhvdXIiLCJtaW51dGUiLCJzZXRUaW1lVG9EYXRlIiwic2V0SG91cnMiLCJleHRyYWN0U3RhcnRBbmRFbmREYXRlcyIsInRleHQiLCJ5ZWFyQW5kRGF5cyIsIm5vcm1hbGl6ZWRUZXh0IiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJ6ZW5rYWt1RGlnaXRzVG9IYW5rYWt1IiwiQXJyYXkiLCJmcm9tIiwibWF0Y2hBbGwiLCJtYXAiLCJtYXRjaCIsInllYXIiLCJncm91cHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRGdWxsWWVhciIsIm5vcm1hbGl6ZVllYXIiLCJwYXJzZUludCIsImZpbHRlciIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsImlzSW52YWxpZERhdGUiLCJmaW5kQWxsWWVhckFuZERheXMiLCJ0aW1lcyIsImZpbmRBbGxUaW1lcyIsImxlbmd0aCIsImVuZFRhcmdldERhdGUiLCJ0aW1lUmFuZ2UiLCJmaW5kVGltZVJhbmdlIiwiZW5kVGFyZ2V0VGltZSIsIm1ha2VHb29nbGVDYWxlbmRhckV2ZW50UGFyYW1zIiwicGxhaW5UZXh0IiwiZGV0YWlscyIsImxpbmVzIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJleHRyYWN0RXZlbnRUaXRsZUFuZERldGFpbHMiLCJkYXRlcyIsIm1lZXRpbmdVUkwiLCJ1cmxSZWdleCIsInJlZ2V4IiwiZXh0cmFjdE1lZXRpbmdVUkwiLCJsb2NhdGlvbiIsImNsaXBib2FyZEh0bWwiLCJldmVudFBhcmFtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXN5bmMiLCJ1c2VIdG1sIiwiY2hlY2tlZCIsImNsaXBib2FyZEl0ZW1zIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwicmVhZCIsIml0ZW0iLCJ0eXBlcyIsImluY2x1ZGVzIiwiYmxvYiIsImdldFR5cGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZ2V0Q2xpcGJvYXJkSFRNTCIsInVuZGVmaW5lZCIsImh0bWwiLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZSIsInJlbW92ZUF0dHJpYnV0ZSIsImRvY3VtZW50RWxlbWVudCIsImlubmVySFRNTCIsInJlbW92ZUFsbFN0eWxlQXR0cmlidXRlcyIsImV2ZW50RGV0YWlsc0VsZW1lbnQiLCJpbnB1dEV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImlucHV0VGV4dCIsImlubmVyVGV4dCIsInJlbW92ZSIsInJlbW92ZUFsbFNjcmlwdFRhZ3MiLCJkYXRlVGV4dCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRvTG9jYWxlU3RyaW5nIiwic2V0UHJldmlldyIsImV2ZW50VXJsIiwiZXZlbnQiLCJwYXJhbSIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9