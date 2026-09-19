import fs from 'node:fs';
const raw=fs.readFileSync(new URL('../js/data.js',import.meta.url),'utf8');
const json=raw.slice('export const DATA = '.length,raw.indexOf(';\nexport const'));
const D=JSON.parse(json);let errors=[];
const ids=new Set();for(const s of D.SCENARIOS){if(ids.has(s.id))errors.push(`duplicate scenario ${s.id}`);ids.add(s.id);const stepIds=new Set();for(const st of s.steps||[]){if(stepIds.has(st.id))errors.push(`duplicate step ${s.id}/${st.id}`);stepIds.add(st.id)}if((s.formats||[]).includes('hybride')&&(!(s.printables||[]).length||s.physicalPack!=='complete'))errors.push(`hybrid pack incomplete ${s.id}`);}
console.log(`FAFA QUEST ${D.APP_VERSION}: ${D.SCENARIOS.length} scenarios; ${D.SCENARIOS.filter(s=>(s.formats||[]).includes('hybride')).length} hybrid packs complete.`);if(errors.length){console.error(errors.join('\n'));process.exit(1)}
