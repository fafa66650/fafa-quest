const PREFIX='fafaquest:';
export const storage={
  get(key,fallback=null){try{const raw=localStorage.getItem(PREFIX+key);return raw?JSON.parse(raw):fallback}catch{return fallback}},
  set(key,value){localStorage.setItem(PREFIX+key,JSON.stringify(value));window.dispatchEvent(new CustomEvent('fafaquest:storage',{detail:{key,value}}));},
  remove(key){localStorage.removeItem(PREFIX+key)},
  clearSession(id){Object.keys(localStorage).filter(k=>k.startsWith(PREFIX+'progress:'+id)).forEach(k=>localStorage.removeItem(k));}
};
export const channel = 'BroadcastChannel' in window ? new BroadcastChannel('fafaquest-live') : null;
export function publish(type,payload){const msg={type,payload,at:Date.now()}; channel?.postMessage(msg); window.dispatchEvent(new CustomEvent('fafaquest:live',{detail:msg}));}
export function subscribe(fn){ channel?.addEventListener('message',e=>fn(e.data)); window.addEventListener('fafaquest:live',e=>fn(e.detail)); window.addEventListener('storage',e=>{if(e.key?.startsWith(PREFIX)) fn({type:'storage',payload:{key:e.key,newValue:e.newValue},at:Date.now()})});}
