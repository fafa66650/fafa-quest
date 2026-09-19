import {storage} from './storage.js';
const KEY='hostPinHash';const UNLOCK='fafaquest-host-unlocked';
async function digest(v){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(v)));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
export const hostPinExists=()=>!!storage.get(KEY);
export const hostUnlocked=()=>sessionStorage.getItem(UNLOCK)==='1';
export async function setHostPin(pin){if(!/^\d{4,8}$/.test(String(pin)))throw new Error('Le code doit contenir 4 à 8 chiffres.');storage.set(KEY,await digest(pin));sessionStorage.setItem(UNLOCK,'1');return true}
export async function verifyHostPin(pin){const ok=(await digest(pin))===storage.get(KEY);if(ok)sessionStorage.setItem(UNLOCK,'1');return ok}
export function lockHost(){sessionStorage.removeItem(UNLOCK)}
