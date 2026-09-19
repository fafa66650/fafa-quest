export function initAccessibility(){
  document.documentElement.lang='fr';
  document.addEventListener('keydown',e=>{
    const modal=document.querySelector('.modal.open');
    if(e.key==='Escape'&&modal){modal.remove();return}
    if(e.key==='Tab'&&modal){
      const focusables=[...modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled&&x.offsetParent!==null);
      if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  })
}
export function announce(msg){let n=document.getElementById('fq-live');if(!n){n=document.createElement('div');n.id='fq-live';n.className='sr-only';n.setAttribute('aria-live','polite');n.setAttribute('aria-atomic','true');document.body.appendChild(n)}n.textContent='';setTimeout(()=>n.textContent=msg,20)}
