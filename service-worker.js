const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache=[
  './',
  './.nojekyll',
  './index.html',
  './manifest.json',
  './README.md',
  './service-worker.js',
  './~.png/Lotus_Icon_192.png',
  './~.png/Lotus_Icon_512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
