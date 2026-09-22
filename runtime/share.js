function b64urlEncode(obj){const s=JSON.stringify(obj),bytes=new TextEncoder().encode(s);let bin='';bytes.forEach(b=>bin+=String.fromCharCode(b));return btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function b64urlDecode(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';const bin=atob(s),bytes=Uint8Array.from(bin,c=>c.charCodeAt(0));return JSON.parse(new TextDecoder().decode(bytes))}
// V3 compact : aucune donnée nominative. Format court pour garder un QR facile à scanner.
export function makeTeamPayload(session,team){return {v:3,s:session.scenarioId,d:session.difficulty,m:session.durationMin,t:[team.name,team.code,(team.members||[]).length,team.teamKey,team.startWorldIndex||0]}}
export function makeTeamLink(session,team){const u=new URL(location.href);u.hash='';u.search='';u.searchParams.set('team',b64urlEncode(makeTeamPayload(session,team)));return u.toString()}
export function parseTeamPayload(raw){try{
  if(typeof raw!=='string'||!raw||raw.length>4096)return null;const p=b64urlDecode(raw);
  if(p?.v===3&&typeof p.s==='string'&&p.s&&Array.isArray(p.t)&&p.t.length>=5)return {v:3,scenarioId:p.s,difficulty:typeof p.d==='string'?p.d:'aventure',durationMin:Number(p.m||60),team:{name:String(p.t[0]||'Équipe'),code:String(p.t[1]||''),memberCount:Number(p.t[2]||0),teamKey:String(p.t[3]||'01'),startWorldIndex:Number(p.t[4]||0)}};
  if(![1,2].includes(p?.v)||!p.scenarioId||!p.team)return null;
  if(p.v===1){p.team.members=[];p.team.roles={};p.v=2}return p;
}catch{return null}}
