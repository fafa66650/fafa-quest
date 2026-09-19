import {TEAM_NAMES,ROLE_LIBRARY,DIFFICULTIES} from './data.js';
import {storage,publish} from './storage.js';

const uid=(p='q')=>`${p}-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
function rawCode(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',a=new Uint32Array(6);if(globalThis.crypto?.getRandomValues)crypto.getRandomValues(a);else for(let i=0;i<a.length;i++)a[i]=Math.floor(Math.random()*2**32);return Array.from(a,x=>c[x%c.length]).join('')}
function usedCodes(){return new Set(storage.keys().filter(k=>k.startsWith('sessions:')).flatMap(k=>(storage.get(k)?.teams||[]).map(t=>t.code)).filter(Boolean))}
function code(reserved=new Set()){const used=usedCodes();for(const v of reserved)used.add(v);for(let i=0;i<500;i++){const v=rawCode();if(!used.has(v)){reserved.add(v);return v}}throw new Error('Impossible de générer un code équipe unique. Réessaie.')}
function teamKey(i){return String((i%12)+1).padStart(2,'0')}
function uniqueMemberLabels(names){const seen=new Map();return names.map(raw=>{const base=cleanText(raw,40);if(!base)return'';const key=base.toLocaleLowerCase('fr-FR');const n=(seen.get(key)||0)+1;seen.set(key,n);return n===1?base:`${base} (${n})`}).filter(Boolean)}
function uniqueMemberName(team,name){const base=cleanText(name,40);if(!base)return'';if(!team.members.includes(base))return base;let i=2;while(team.members.includes(`${base} (${i})`))i++;return `${base} (${i})`}
function cleanText(v,max=60){return String(v??'').replace(/[\u0000-\u001f\u007f]/g,' ').replace(/\s+/g,' ').trim().slice(0,max)}
function clampInt(v,min,max,fallback){const n=Math.round(Number(v));return Number.isFinite(n)?Math.min(max,Math.max(min,n)):fallback}

export function assignRoles(t){
  t.roles=t.roles||{};
  const validRoles=new Set(ROLE_LIBRARY.map(r=>r.id));
  t.members.forEach((m,i)=>{if(!validRoles.has(t.roles[m]))t.roles[m]=ROLE_LIBRARY[i%ROLE_LIBRARY.length].id});
  Object.keys(t.roles).forEach(m=>{if(!t.members.includes(m))delete t.roles[m]});
  return t;
}

export function balanceParticipants(names,n,worldCount=1){
  const a=uniqueMemberLabels(names);
  n=Math.max(1,Math.min(12,Number(n)||1));if(a.length)n=Math.min(n,a.length);
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  const reserved=new Set();
  const teams=Array.from({length:n},(_,i)=>({
    id:uid('team'),name:TEAM_NAMES[i%TEAM_NAMES.length],code:code(reserved),members:[],roles:{},
    teamKey:teamKey(i),startWorldIndex:worldCount>1?i%worldCount:0
  }));
  a.forEach((x,i)=>teams[i%n].members.push(x));
  teams.forEach(assignRoles);return teams
}

export function createSession(o){
  const diff=DIFFICULTIES.find(d=>d.id===o.difficulty)||DIFFICULTIES[1],difficulty=diff.id;
  const baseDuration=clampInt(o.durationMin,10,180,60),duration=clampInt(baseDuration*diff.timeMultiplier,10,240,60);
  const worldCount=clampInt(o.worldCount,1,12,1),teamCount=clampInt(o.teamCount,1,12,1),teams=balanceParticipants(o.participants||[],teamCount,worldCount);
  const playMode=['central','team_device','solo'].includes(o.playMode)?o.playMode:'central',competition=['classement','cooperation','loisir'].includes(o.competition)?o.competition:'classement',timerMode=['host','strict','loisir'].includes(o.timerMode)?o.timerMode:'host';
  const s={
    id:uid('session'),title:cleanText(o.title||'Partie FAFA QUEST',80)||'Partie FAFA QUEST',scenarioId:cleanText(o.scenarioId,80),difficulty,
    durationMin:duration,baseDurationMin:baseDuration,playMode,competition,
    timerMode,rotationMode:o.rotationMode!==false,createdAt:Date.now(),startedAt:null,pausedAt:null,pausedTotalMs:0,
    teams,worldCount,personal:!!o.personal,version:8
  };
  storage.set('sessions:'+s.id,s);storage.set('lastSessionId',s.id);publish('session:create',{sessionId:s.id});return s
}

export function createImportedSession(payload){
  const difficulty=DIFFICULTIES.some(d=>d.id===payload.difficulty)?payload.difficulty:'aventure',durationMin=clampInt(payload.durationMin,10,240,60),teamName=cleanText(payload.team?.name||'Équipe',30)||'Équipe';
  const requestedCode=cleanText(payload.team?.code,12).toUpperCase().replace(/[^A-Z0-9]/g,'');
  const teamCode=requestedCode&&!usedCodes().has(requestedCode)?requestedCode:code();
  const rawTeamKey=String(payload.team?.teamKey||''),teamKey=/^(0[1-9]|1[0-2])$/.test(rawTeamKey)?rawTeamKey:'01';
  const t={id:uid('team'),name:teamName,code:teamCode,members:[],roles:{},memberCount:clampInt(payload.team?.memberCount,0,99,0),teamKey,startWorldIndex:clampInt(payload.team?.startWorldIndex,0,11,0)};
  assignRoles(t);
  const s={id:uid('session'),title:cleanText(payload.title||'Partie autonome',80)||'Partie autonome',scenarioId:cleanText(payload.scenarioId,80),difficulty,durationMin,baseDurationMin:durationMin,playMode:'team_device',competition:'loisir',timerMode:'loisir',rotationMode:false,createdAt:Date.now(),startedAt:null,pausedAt:null,pausedTotalMs:0,teams:[t],worldCount:1,imported:true,version:8};
  storage.set('sessions:'+s.id,s);storage.set('lastSessionId',s.id);return {session:s,team:t}
}

export const getSession=id=>storage.get('sessions:'+id);
export function saveSession(s){storage.set('sessions:'+s.id,s);publish('session:update',{sessionId:s.id});return s}
export function allSessions(){return storage.keys().filter(k=>k.startsWith('sessions:')).map(k=>storage.get(k)).filter(Boolean).sort((a,b)=>b.createdAt-a.createdAt)}
export function deleteSession(id){storage.remove('sessions:'+id);for(const k of storage.keys())if(k.startsWith('progress:'+id+':'))storage.remove(k);publish('session:delete',{sessionId:id})}
export function duplicateSession(source){
  return createSession({scenarioId:source.scenarioId,difficulty:source.difficulty,durationMin:source.baseDurationMin||source.durationMin,playMode:source.playMode,teamCount:source.teams.length,participants:source.teams.flatMap(t=>t.members||[]),worldCount:source.worldCount||Math.max(1,...source.teams.map(t=>(t.startWorldIndex||0)+1)),competition:source.competition,timerMode:source.timerMode,rotationMode:source.rotationMode});
}
export function findTeamByCode(c){const q=String(c||'').trim().toUpperCase();for(const s of allSessions()){const t=s.teams.find(x=>x.code===q);if(t)return {session:s,team:t}}return null}
export function renameTeam(session,teamId,name){const t=session.teams.find(x=>x.id===teamId),clean=cleanText(name,30);if(t&&clean)t.name=clean;return saveSession(session)}
export function addMember(session,teamId,name){const t=session.teams.find(x=>x.id===teamId);if(!t)return session;const n=uniqueMemberName(t,name);if(!n)return session;t.members.push(n);assignRoles(t);return saveSession(session)}
export function removeMember(session,teamId,name){const t=session.teams.find(x=>x.id===teamId);if(!t)return session;t.members=t.members.filter(x=>x!==name);delete t.roles[name];assignRoles(t);return saveSession(session)}
export function moveMember(session,fromId,toId,name){const from=session.teams.find(x=>x.id===fromId),to=session.teams.find(x=>x.id===toId);if(!from||!to||from===to||!from.members.includes(name))return session;const role=from.roles[name],targetName=uniqueMemberName(to,name);from.members=from.members.filter(x=>x!==name);delete from.roles[name];to.members.push(targetName);to.roles[targetName]=role||ROLE_LIBRARY[(to.members.length-1)%ROLE_LIBRARY.length].id;assignRoles(from);assignRoles(to);return saveSession(session)}
export function setRole(session,teamId,name,roleId){const t=session.teams.find(x=>x.id===teamId);if(t&&t.members.includes(name)&&ROLE_LIBRARY.some(r=>r.id===roleId))t.roles[name]=roleId;return saveSession(session)}
