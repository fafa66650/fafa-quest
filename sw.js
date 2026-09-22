const CACHE='fafa-quest-v1.0.0';
const ASSETS=[
  './index.html','./assets/app.css','./app.webmanifest',
  './runtime/boot.js','./runtime/app.js','./runtime/data.js','./runtime/engine.js','./runtime/session.js','./runtime/storage.js','./runtime/ui.js','./runtime/accessibility.js','./runtime/host-auth.js','./runtime/share.js','./runtime/qrcode.js',
  './assets/icon-192.png','./assets/icon-512.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('fafa-quest-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting()});
async function put(req,resp){if(resp?.ok&&resp.type==='basic'){const c=await caches.open(CACHE);await c.put(req,resp.clone())}return resp}
async function fromNetwork(req,ms=3500){let timer;try{return await Promise.race([fetch(req,{cache:'no-store'}).then(r=>put(req,r)),new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('network timeout')),ms)})])}finally{clearTimeout(timer)}}
async function fromCache(req){return (await caches.match(req))||null}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);if(url.origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fromNetwork(e.request).catch(async()=>await fromCache('./index.html')||new Response('FAFA QUEST est indisponible hors connexion sur cet appareil.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})));
    return;
  }
  e.respondWith(fromNetwork(e.request).catch(async()=>await fromCache(e.request)||new Response('Ressource indisponible hors connexion.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})));
});
