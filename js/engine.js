import {storage,publish} from './storage.js';
import {DIFFICULTIES} from './data.js';

export function initialProgress(session,team,scenario){return {sessionId:session.id,teamId:team.id,scenarioId:scenario.id,stepIndex:0,score:0,hintsUsed:0,attempts:0,inventory:[],completedSteps:[],startedAt:Date.now(),pausedMs:0,finishedAt:null,lastSeen:Date.now(),answers:{},events:[],bonusTimeMs:0,hostMessage:null};}
export function loadProgress(sessionId,teamId){return storage.get(`progress:${sessionId}:${teamId}`)}
export function saveProgress(p){p.lastSeen=Date.now();storage.set(`progress:${p.sessionId}:${p.teamId}`,p);publish('progress',{sessionId:p.sessionId,teamId:p.teamId,stepIndex:p.stepIndex,score:p.score,finishedAt:p.finishedAt,lastSeen:p.lastSeen});return p;}
function normalizeText(v){return String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toUpperCase();}
function arraysEqualAsSet(a,b){return a.length===b.length && [...a].sort().every((v,i)=>v===[...b].sort()[i]);}
export function validateAnswer(step,value){
  if(step.type==='choice') return Number(value)===Number(step.answer);
  if(step.type==='text'||step.type==='team_split'){const answers=Array.isArray(step.answer)?step.answer:[step.answer];return answers.some(a=>normalizeText(a)===normalizeText(value));}
  if(step.type==='multi') return arraysEqualAsSet(value||[],step.answer||[]);
  if(step.type==='order') return JSON.stringify(value||[])===JSON.stringify(step.answer||[]);
  if(step.type==='manual') return value===true;
  return false;
}
export function submitAnswer({progress,step,value,difficultyId='aventure'}){
  const ok=validateAnswer(step,value); progress.attempts++; progress.answers[step.id]=value; progress.events.push({type:'answer',stepId:step.id,ok,at:Date.now()});
  if(ok){const diff=DIFFICULTIES.find(d=>d.id===difficultyId)||DIFFICULTIES[1]; const penalty=Math.min(0.4,Math.max(0,(progress.attempts-progress.completedSteps.length-1)*0.05)); const earned=Math.max(10,Math.round((step.points||100)*diff.multiplier*(1-penalty))); progress.score+=earned; if(step.reward && !progress.inventory.some(x=>x.id===step.reward.id)) progress.inventory.push(step.reward); if(!progress.completedSteps.includes(step.id))progress.completedSteps.push(step.id); progress.stepIndex++;}
  saveProgress(progress);return {ok,progress};
}
export function useHint(progress,step,index){if(!step.hints?.[index])return null;progress.hintsUsed++;progress.score=Math.max(0,progress.score-(index===0?20:40));progress.events.push({type:'hint',stepId:step.id,index,at:Date.now()});saveProgress(progress);return step.hints[index];}
export function finish(progress){progress.finishedAt=Date.now();saveProgress(progress);return progress;}
export function elapsedMs(progress){const end=progress.finishedAt||Date.now();return Math.max(0,end-progress.startedAt-(progress.pausedMs||0));}
