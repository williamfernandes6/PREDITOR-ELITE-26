const CACHE_NAME = 'pe-av26-v1';

// Estratégia: IA sempre busca dados frescos do Render, mas carrega interface rápido
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

self.addEventListener('install', (event) => {
  console.log('Preditor de Elite AV26: Motor Ativo');
});
