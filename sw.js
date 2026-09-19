const CACHE='fafa-quest-v0.8.2';
const ASSETS=['./index.html','./styles.css','./manifest.webmanifest','./js/boot.js','./js/app.js','./js/data.js','./js/engine.js','./js/session.js','./js/storage.js','./js/ui.js','./js/accessibility.js','./js/host-auth.js','./js/share.js','./js/qrcode.js','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('fafa-quest-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting()});
async function cached(req){return (await caches.match(req))||(await caches.match(req,{ignoreSearch:true}))}
async function networkWithTimeout(req,ms=3500){let timer;try{return await Promise.race([fetch(req,{cache:'no-store'}),new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('network timeout')),ms)})])}finally{clearTimeout(timer)}}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;const url=new URL(e.request.url);if(url.origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){e.respondWith(networkWithTimeout(e.request).then(resp=>{if(resp?.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy))}return resp}).catch(()=>cached('./index.html')));return}
  e.respondWith((async()=>{const hit=await cached(e.request);if(hit)return hit;try{const resp=await fetch(e.request);if(resp.ok&&resp.type==='basic'){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return resp}catch{return new Response('Ressource indisponible hors connexion.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})}})())
});
