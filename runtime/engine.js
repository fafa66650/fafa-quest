import {DIFFICULTIES} from './data.js';
import {storage,publish} from './storage.js';

const rank=id=>DIFFICULTIES.find(d=>d.id===id)?.rank??1;
const cleanChoice=s=>String(s??'').replace(/^[^A-Za-zÀ-ÿ0-9]+/,'').trim();
const norm=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toUpperCase().replace(/\s+/g,' ');
const seteq=(a,b)=>{
  if(!Array.isArray(a)||!Array.isArray(b)||a.length!==b.length)return false;
  const aa=[...a].sort(),bb=[...b].sort();
  return aa.every((v,i)=>v===bb[i]);
};

export function resolveStep(step,difficulty='aventure'){
  let out={...step,...(step.variants?.[difficulty]||{})};
  const r=rank(difficulty),diff=DIFFICULTIES.find(d=>d.id===difficulty)||DIFFICULTIES[1];

  if(!step.variants?.[difficulty]&&r>=2&&out.type==='choice'&&Array.isArray(out.options)){
    const correct=out.options[Number(out.answer)];
    out={...out,type:'text',answer:[String(correct),cleanChoice(correct)],prompt:out.prompt+' Répondez sans propositions.'};
    delete out.options;
  }
  if(out.type==='memory'){
    out.memoryMs=diff.memoryMs;
    if(difficulty==='decouverte'&&Array.isArray(out.sequence)&&out.sequence.length>3){
      out.sequence=out.sequence.slice(0,3);
      out.answer=out.sequence.slice();
    }
  }
  if(out.type==='team_split')out.cardMode=r===0?'open':r===1?'roles':'sealed';
  if(out.type==='cipher')out.showCipherHelper=r<3;
  if(out.type==='file_hunt'&&r>=2&&Array.isArray(out.expertDecoys)){
    const count=r>=3?2:1;
    out.entries=[...out.entries,...out.expertDecoys.slice(0,count)];
  }
  if(out.type==='hotspot'&&r>=2&&Array.isArray(out.expertSpots)){
    const count=r>=3?2:1;
    out.spots=[...out.spots,...out.expertSpots.slice(0,count)];
  }
  if(out.type==='order'&&r===0)out.guidedOrder=true;
  if(out.type==='multi'&&r===0&&Array.isArray(out.answer))out.selectionCount=out.answer.length;
  if(out.type==='color_code'&&r===0&&Array.isArray(out.answer))out.expectedLength=out.answer.length;
  if(out.type==='match')out.shuffleMatchOptions=true;
  if(out.type==='lock_parts'&&r>=3)out.hideLockLabels=true;
  if(out.type==='keypad'&&r>=3)out.hideCodeLength=true;
  out.level=difficulty;
  out.difficultyRank=r;
  return out;
}

export function activeSteps(scenario,difficulty='aventure'){
  const r=rank(difficulty);
  return scenario.steps
    .filter(s=>(s.minRank??0)<=r&&(s.maxRank??99)>=r)
    .map(s=>resolveStep(s,difficulty));
}

export function initialProgress(session,team,scenario){
  return {sessionId:session.id,teamId:team.id,scenarioId:scenario.id,stepIndex:0,worldIndex:0,score:0,hintsUsed:0,hintCost:0,attempts:0,inventory:[],completedSteps:[],startedAt:session.startedAt||null,finishedAt:null,lastSeen:Date.now(),answers:{},events:[],bonusTimeMs:0,hostMessage:null,introSeen:false,seenChapters:[],currentStepId:null,currentStepStartedAt:null,memoryViews:{}};
}
export function loadProgress(s,t){return storage.get(`progress:${s}:${t}`)}
export function saveProgress(p){
  p.lastSeen=Date.now();
  storage.set(`progress:${p.sessionId}:${p.teamId}`,p);
  publish('progress',{sessionId:p.sessionId,teamId:p.teamId,stepIndex:p.stepIndex,worldIndex:p.worldIndex,score:p.score,finishedAt:p.finishedAt});
  return p;
}

export function validateAnswer(step,value){
  if(step.type==='choice')return Number(value)===Number(step.answer);
  if(['text','team_split','keypad','cipher','reveal','hotspot'].includes(step.type)){
    const a=Array.isArray(step.answer)?step.answer:[step.answer];
    return a.some(x=>norm(x)===norm(value));
  }
  if(step.type==='multi'||step.type==='file_hunt')return seteq(value||[],step.answer||[]);
  if(step.type==='color_code'||step.type==='memory')return Array.isArray(value)&&Array.isArray(step.answer)&&JSON.stringify(value)===JSON.stringify(step.answer);
  if(step.type==='order')return JSON.stringify(value||[])===JSON.stringify(step.answer||[]);
  if(step.type==='lock_parts'){
    const a=value||[],b=step.answer||[];
    return a.length===b.length&&a.every((x,i)=>norm(x)===norm(b[i]));
  }
  if(step.type==='match')return value==='ok'||value===true;
  if(step.type==='physical'){
    if(step.hostValidation&&value===true)return true;
    const accepted=(Array.isArray(step.answer)?step.answer:[step.answer]).filter(Boolean).map(norm);
    return accepted.includes(norm(value));
  }
  if(step.type==='sound')return norm(value)===norm(step.answer);
  return false;
}

export function submitAnswer({progress,step,value,difficultyId='aventure'}){
  if((progress.completedSteps||[]).includes(step.id))return {ok:true,progress,duplicate:true};
  const ok=validateAnswer(step,value),diff=DIFFICULTIES.find(d=>d.id===difficultyId)||DIFFICULTIES[1];
  progress.attempts++;
  progress.answers[step.id]=value;
  progress.events.push({type:'answer',stepId:step.id,ok,at:Date.now()});
  if(ok){
    const earned=Math.max(10,Math.round((step.points||100)*diff.scoreMultiplier));
    progress.score+=earned;
    if(step.reward&&!progress.inventory.some(x=>x.id===step.reward.id))progress.inventory.push(step.reward);
    if(!progress.completedSteps.includes(step.id))progress.completedSteps.push(step.id);
    progress.stepIndex++;
    progress.currentStepId=null;
    progress.currentStepStartedAt=null;
  }else{
    progress.score=Math.max(0,progress.score-(diff.attemptPenalty||0));
  }
  saveProgress(progress);
  return {ok,progress};
}

function solutionText(step){
  if(step.type==='choice')return String(step.options?.[Number(step.answer)]??'');
  if(step.type==='multi'){
    const labels=new Map((step.options||[]).map(o=>[o.id,o.label]));
    return (step.answer||[]).map(id=>labels.get(id)||id).join(' • ');
  }
  if(step.type==='file_hunt'){
    const labels=new Map((step.entries||[]).map(o=>[o.id,o.name]));
    return (step.answer||[]).map(id=>labels.get(id)||id).join(' • ');
  }
  if(step.type==='match')return (step.pairs||[]).map(([a,b])=>`${a} → ${b}`).join(' • ');
  if(['order','color_code','memory','lock_parts'].includes(step.type))return (step.answer||[]).join(' → ');
  if(Array.isArray(step.answer))return String(step.answer[0]??'');
  return String(step.answer??'');
}

export function hintText(step,kind){
  const h=step.hints||[];
  if(kind==='clue')return h[0]||'';
  if(kind==='strong')return h[1]||h[0]||'';
  if(kind==='solution')return `Solution : ${solutionText(step)}`;
  return '';
}

export function useHint(progress,step,kind='clue'){
  const content=hintText(step,kind),prior=(progress.events||[]).find(e=>e.type==='hint'&&e.stepId===step.id&&e.kind===kind);
  if(prior)return content;
  const cost=kind==='clue'?1:kind==='strong'?2:3;
  progress.hintsUsed++;
  progress.hintCost=(progress.hintCost||0)+cost;
  progress.score=Math.max(0,progress.score-(kind==='clue'?10:kind==='strong'?25:50));
  progress.events.push({type:'hint',kind,stepId:step.id,cost,at:Date.now()});
  saveProgress(progress);
  return content;
}

export function ensureStepClock(progress,step){
  if(progress.currentStepId!==step.id){
    progress.currentStepId=step.id;
    progress.currentStepStartedAt=Date.now();
    saveProgress(progress);
  }
  return progress;
}
export function solutionAvailable(progress,difficultyId){
  const d=DIFFICULTIES.find(x=>x.id===difficultyId)||DIFFICULTIES[1];
  return !d.solutionDelaySec||!progress.currentStepStartedAt||(Date.now()-progress.currentStepStartedAt)>=d.solutionDelaySec*1000;
}
export function solutionWait(progress,difficultyId){
  const d=DIFFICULTIES.find(x=>x.id===difficultyId)||DIFFICULTIES[1];
  const left=Math.max(0,d.solutionDelaySec*1000-(Date.now()-(progress.currentStepStartedAt||Date.now())));
  return Math.ceil(left/1000);
}
export function finish(p){p.finishedAt=Date.now();return saveProgress(p)}
export function derivedWorldCode(world,team){return `${String(world.code).replace(/\s+/g,'')}${team?.teamKey||'01'}`.toUpperCase()}
export function validateWorldCode(world,team,value){return norm(derivedWorldCode(world,team)).replace(/ /g,'')===norm(value).replace(/ /g,'')}
export function currentWorldIndex(session,team,progress,worldCount){
  if(!worldCount)return 0;
  const start=session.rotationMode===false?0:(team.startWorldIndex||0);
  return (start+(progress.worldIndex||0))%worldCount;
}
