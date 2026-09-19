import {TEAM_NAMES,ROLE_LIBRARY,DIFFICULTIES} from './data.js';
import {storage,publish} from './storage.js';

const uid=(p='q')=>`${p}-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
function code(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';return Array.from({length:6},()=>c[Math.floor(Math.random()*c.length)]).join('')}
function teamKey(i){return String((i%12)+1).padStart(2,'0')}

export function assignRoles(t){
  t.roles=t.roles||{};
  t.members.forEach((m,i)=>{if(!t.roles[m])t.roles[m]=ROLE_LIBRARY[i%ROLE_LIBRARY.length].id});
  Object.keys(t.roles).forEach(m=>{if(!t.members.includes(m))delete t.roles[m]});
  return t;
}

export function balanceParticipants(names,n,worldCount=1){
  const a=names.map(x=>x.trim()).filter(Boolean);
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  const teams=Array.from({length:n},(_,i)=>({
    id:uid('team'),name:TEAM_NAMES[i%TEAM_NAMES.length],code:code(),members:[],roles:{},
    teamKey:teamKey(i),startWorldIndex:worldCount>1?i%worldCount:0
  }));
  a.forEach((x,i)=>teams[i%n].members.push(x));
  teams.forEach(assignRoles);return teams
}

export function createSession(o){
  const diff=DIFFICULTIES.find(d=>d.id===o.difficulty)||DIFFICULTIES[1];
  const duration=Math.max(10,Math.round((o.durationMin||60)*diff.timeMultiplier));
  const teams=balanceParticipants(o.participants||[],Math.max(1,o.teamCount||1),Math.max(1,o.worldCount||1));
  const s={
    id:uid('session'),title:o.title||'Partie FAFA QUEST',scenarioId:o.scenarioId,difficulty:o.difficulty||'aventure',
    durationMin:duration,baseDurationMin:o.durationMin||60,playMode:o.playMode||'central',competition:o.competition||'classement',
    timerMode:o.timerMode||'host',rotationMode:o.rotationMode!==false,createdAt:Date.now(),startedAt:null,pausedAt:null,pausedTotalMs:0,
    teams,worldCount:Math.max(1,o.worldCount||1),version:6
  };
  storage.set('sessions:'+s.id,s);storage.set('lastSessionId',s.id);publish('session:create',{sessionId:s.id});return s
}

export function createImportedSession(payload){
  const t={id:uid('team'),name:payload.team?.name||'Équipe',code:payload.team?.code||code(),members:[],roles:{},memberCount:payload.team?.memberCount||0,teamKey:payload.team?.teamKey||'01',startWorldIndex:payload.team?.startWorldIndex||0};
  assignRoles(t);
  const s={id:uid('session'),title:payload.title||'Partie autonome',scenarioId:payload.scenarioId,difficulty:payload.difficulty||'aventure',durationMin:payload.durationMin||60,baseDurationMin:payload.durationMin||60,playMode:'team_device',competition:'loisir',timerMode:'loisir',rotationMode:false,createdAt:Date.now(),startedAt:null,pausedAt:null,pausedTotalMs:0,teams:[t],worldCount:1,imported:true,version:6};
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
export function renameTeam(session,teamId,name){const t=session.teams.find(x=>x.id===teamId);if(t&&name.trim())t.name=name.trim().slice(0,30);return saveSession(session)}
export function addMember(session,teamId,name){const t=session.teams.find(x=>x.id===teamId),n=String(name||'').trim();if(!t||!n)return session;if(!t.members.includes(n))t.members.push(n);assignRoles(t);return saveSession(session)}
export function removeMember(session,teamId,name){const t=session.teams.find(x=>x.id===teamId);if(!t)return session;t.members=t.members.filter(x=>x!==name);delete t.roles[name];assignRoles(t);return saveSession(session)}
export function moveMember(session,fromId,toId,name){const from=session.teams.find(x=>x.id===fromId),to=session.teams.find(x=>x.id===toId);if(!from||!to||!from.members.includes(name))return session;const role=from.roles[name];from.members=from.members.filter(x=>x!==name);delete from.roles[name];to.members.push(name);to.roles[name]=role||ROLE_LIBRARY[(to.members.length-1)%ROLE_LIBRARY.length].id;assignRoles(from);assignRoles(to);return saveSession(session)}
export function setRole(session,teamId,name,roleId){const t=session.teams.find(x=>x.id===teamId);if(t&&t.members.includes(name)&&ROLE_LIBRARY.some(r=>r.id===roleId))t.roles[name]=roleId;return saveSession(session)}
