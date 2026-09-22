const P='fafaquest:';
export const storage={
  get(k,f=null){try{const v=localStorage.getItem(P+k);return v===null?f:JSON.parse(v)}catch{return f}},
  set(k,v){try{localStorage.setItem(P+k,JSON.stringify(v));return v}catch(e){console.warn('FAFA QUEST storage write failed',k,e);return v}},
  remove(k){try{localStorage.removeItem(P+k)}catch{}},
  keys(){const out=[];try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k?.startsWith(P))out.push(k.slice(P.length))}}catch{}return out}
};
export function persistentStorageAvailable(){
  try{
    const k=P+'storage-probe';localStorage.setItem(k,'1');const ok=localStorage.getItem(k)==='1';localStorage.removeItem(k);return ok;
  }catch{return false}
}
const ch=('BroadcastChannel'in window)?new BroadcastChannel('fafaquest-live'):null;
export function publish(type,payload={}){const msg={type,payload,at:Date.now()};try{ch?.postMessage(msg)}catch{}try{localStorage.setItem(P+'pulse',JSON.stringify(msg))}catch{}}
export function subscribe(fn){if(ch)ch.onmessage=e=>fn(e.data);addEventListener('storage',e=>{if(e.key===P+'pulse'&&e.newValue)try{fn(JSON.parse(e.newValue))}catch{}})}
/**
 * Migration non destructive : les parties et progressions locales compatibles sont conservées.
 */
export function migrateStorage(schema=8){
  const current=Number(storage.get('schemaVersion',0)||0);if(current>=schema)return;
  for(const k of storage.keys()){
    if(!k.startsWith('sessions:'))continue;
    const s=storage.get(k);if(!s||typeof s!=='object')continue;
    s.version=Math.max(Number(s.version||0),8);s.rotationMode=s.rotationMode!==false;s.pausedTotalMs=Number(s.pausedTotalMs||0);s.teams=Array.isArray(s.teams)?s.teams:[];
    s.teams.forEach((t,i)=>{t.teamKey=t.teamKey||String((i%12)+1).padStart(2,'0');t.members=Array.isArray(t.members)?t.members:[];t.roles=t.roles||{};t.startWorldIndex=Number(t.startWorldIndex||0)});storage.set(k,s);
  }
  for(const k of storage.keys()){
    if(!k.startsWith('progress:'))continue;const p=storage.get(k);if(!p||typeof p!=='object')continue;
    p.completedSteps=Array.isArray(p.completedSteps)?p.completedSteps:[];p.inventory=Array.isArray(p.inventory)?p.inventory:[];p.answers=p.answers||{};p.events=Array.isArray(p.events)?p.events:[];p.seenChapters=Array.isArray(p.seenChapters)?p.seenChapters:[];p.hintsUsed=Number(p.hintsUsed||0);p.hintCost=Number(p.hintCost||0);p.attempts=Number(p.attempts||0);p.score=Number(p.score||0);storage.set(k,p);
  }
  storage.set('schemaVersion',schema);
}
