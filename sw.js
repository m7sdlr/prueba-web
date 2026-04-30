const CACHE = 'ruta-vino-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './ruta.geojson',
  './senalizacion.geojson',
  './atencion.geojson',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://tile.openstreetmap.org/15/15904/12425.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cachear assets propios (los externos pueden fallar en primera carga)
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './ruta.geojson',
        './senalizacion.geojson',
        './atencion.geojson'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Estrategia: network-first para tiles del mapa, cache-first para datos propios
  const url = e.request.url;

  if (url.includes('tile.openstreetmap.org')) {
    // Cache de tiles: si está en caché lo devuelve, si no, va a red y cachea
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            cache.put(e.request, res.clone());
            return res;
          }).catch(() => new Response('', { status: 503 }));
        })
      )
    );
    return;
  }

  // Para el resto: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          caches.open(CACHE).then(cache => cache.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
