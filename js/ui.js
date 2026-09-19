export const $=(s,r=document)=>r.querySelector(s); export const $$=(s,r=document)=>[...r.querySelectorAll(s)];
export function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
export function fmtTime(ms){const total=Math.max(0,Math.floor(ms/1000));const m=Math.floor(total/60),s=total%60;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
export function toast(msg,type='info'){let el=document.createElement('div');el.className=`toast ${type}`;el.textContent=msg;document.body.appendChild(el);requestAnimationFrame(()=>el.classList.add('show'));setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),220)},2600)}
export function card(title,body,cls=''){return `<section class="card ${cls}"><h2>${title}</h2>${body}</section>`}
export function metric(label,value){return `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`}
