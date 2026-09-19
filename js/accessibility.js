export function initAccessibility(){
 const mq=matchMedia('(prefers-reduced-motion: reduce)'); document.documentElement.classList.toggle('reduced-motion',mq.matches);mq.addEventListener?.('change',e=>document.documentElement.classList.toggle('reduced-motion',e.matches));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelector('[data-modal].open [data-close]')?.click()});
}
export function announce(msg){let el=document.getElementById('live-region');if(!el){el=document.createElement('div');el.id='live-region';el.className='sr-only';el.setAttribute('aria-live','polite');document.body.appendChild(el)}el.textContent='';setTimeout(()=>el.textContent=msg,20)}
