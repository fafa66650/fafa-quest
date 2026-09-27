import {storage} from './storage.js';
const KEY='hostPinHash';
const UNLOCK='fafaquest-host-unlocked';
let memoryHash=null;
let memoryUnlocked=false;
function ssGet(k){try{return sessionStorage.getItem(k)}catch{return null}}
function ssSet(k,v){try{sessionStorage.setItem(k,v)}catch{}}
function ssRemove(k){try{sessionStorage.removeItem(k)}catch{}}
function fallbackHash(value){
  let h1=0x811c9dc5,h2=0x9e3779b9;const s=String(value);
  for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);h1=Math.imul(h1^c,0x01000193)>>>0;h2=Math.imul(h2^(c+i),0x85ebca6b)>>>0}
  return `local-v1:${h1.toString(16).padStart(8,'0')}${h2.toString(16).padStart(8,'0')}`;
}
async function digest(v){
  if(globalThis.crypto?.subtle&&globalThis.TextEncoder){
    const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(v)));
    return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  }
  return fallbackHash(v);
}
export const hostPinExists=()=>!!(storage.get(KEY)||memoryHash);
export const hostUnlocked=()=>memoryUnlocked||ssGet(UNLOCK)==='1';
export async function setHostPin(pin){
  if(!/^\d{4,8}$/.test(String(pin)))throw new Error('Le code doit contenir 4 à 8 chiffres.');
  const hash=await digest(pin);memoryHash=hash;memoryUnlocked=true;
  storage.set(KEY,hash);
  ssSet(UNLOCK,'1');
  return true;
}
export async function verifyHostPin(pin){
  if(!/^\d{4,8}$/.test(String(pin)))return false;
  const stored=storage.get(KEY)||memoryHash;if(!stored)return false;
  const ok=(await digest(pin))===stored;
  if(ok){memoryUnlocked=true;ssSet(UNLOCK,'1')}
  return ok;
}
export function lockHost(){memoryUnlocked=false;ssRemove(UNLOCK)}
export function resetHostPin(){memoryHash=null;memoryUnlocked=false;storage.remove(KEY);ssRemove(UNLOCK)}
