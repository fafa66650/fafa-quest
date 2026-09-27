let lastOutsideModal=null;
function focusPageTitle(){
  const h=document.querySelector('#app h1');if(!h)return;h.setAttribute('tabindex','-1');h.focus({preventScroll:true});
}
export function initAccessibility(){
  document.documentElement.lang='fr';
  const observer=new MutationObserver(()=>{const modal=document.querySelector('.modal.open');if(!modal||modal.contains(document.activeElement))return;const target=modal.querySelector('[autofocus],h1,h2,input,select,textarea,button,[href]');if(target){if(/^H[12]$/.test(target.tagName))target.setAttribute('tabindex','-1');queueMicrotask(()=>target.focus?.({preventScroll:true}))}});observer.observe(document.body,{childList:true,subtree:true});
  document.addEventListener('focusin',e=>{if(!e.target.closest?.('.modal.open'))lastOutsideModal=e.target});
  addEventListener('hashchange',()=>setTimeout(focusPageTitle,40));
  document.addEventListener('keydown',e=>{
    const modal=document.querySelector('.modal.open');
    if(e.key==='Escape'&&modal){e.preventDefault();modal.remove();if(lastOutsideModal?.isConnected)lastOutsideModal.focus();return}
    if(e.key==='Tab'&&modal){
      const focusables=[...modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled&&x.offsetParent!==null);
      if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  });
}
export function announce(msg){let n=document.getElementById('fq-live');if(!n){n=document.createElement('div');n.id='fq-live';n.className='sr-only';n.setAttribute('aria-live','polite');n.setAttribute('aria-atomic','true');document.body.appendChild(n)}n.textContent='';setTimeout(()=>n.textContent=msg,20)}
