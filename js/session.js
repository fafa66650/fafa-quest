import {TEAM_NAMES,ROLE_LIBRARY} from './data.js';
import {storage,publish} from './storage.js';

function uid(prefix='q'){return `${prefix}-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}
function shortCode(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='';for(let i=0;i<6;i++)s+=chars[Math.floor(Math.random()*chars.length)];return s;}
export function balanceParticipants(names,teamCount){const clean=names.map(x=>x.trim()).filter(Boolean);const teams=Array.from({length:teamCount},(_,i)=>({id:uid('team'),name:TEAM_NAMES[i%TEAM_NAMES.length],code:shortCode(),members:[],roles:{},score:0,status:'ready'}));clean.forEach((name,i)=>teams[i%teamCount].members.push(name));teams.forEach(t=>assignRoles(t));return teams;}
export function assignRoles(team){team.roles={};team.members.forEach((name,i)=>team.roles[name]=ROLE_LIBRARY[i%ROLE_LIBRARY.length].id);return team;}
export function createSession({scenarioId,difficulty='aventure',durationMin=60,mode='competitive',participants=[],teamCount=2,title=''}){
  const session={id:uid('session'),title:title||'Partie FAFA QUEST',scenarioId,difficulty,durationMin,mode,createdAt:Date.now(),startedAt:null,pausedAt:null,endedAt:null,teams:balanceParticipants(participants,Math.max(1,teamCount)),version:1};
  storage.set('sessions:'+session.id,session);storage.set('lastSessionId',session.id);publish('session:create',{sessionId:session.id});return session;
}
export function getSession(id){return storage.get('sessions:'+id)}
export function saveSession(session){storage.set('sessions:'+session.id,session);publish('session:update',{sessionId:session.id});return session;}
export function findTeamByCode(code){const keys=Object.keys(localStorage).filter(k=>k.startsWith('fafaquest:sessions:'));for(const k of keys){try{const s=JSON.parse(localStorage.getItem(k));const team=s.teams?.find(t=>t.code===code.toUpperCase());if(team)return {session:s,team};}catch{}}return null;}
export function joinLink(session,team,base=location.href.split('#')[0].split('?')[0]){return `${base}?join=${encodeURIComponent(team.code)}#join`;}
