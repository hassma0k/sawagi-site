const C='sawagi-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./'])))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(fetch(r).then(res=>{if(r.mode==='navigate'){const cp=res.clone();caches.open(C).then(c=>c.put('./',cp))}return res}).catch(()=>caches.match(r.mode==='navigate'?'./':r)))});
