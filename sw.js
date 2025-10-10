const CACHE_NAME = 'kalkulator-kpr-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];
self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});
self.addEventListener('activate', (evt) => { self.clients.claim(); });
self.addEventListener('fetch', (evt) => { evt.respondWith(caches.match(evt.request).then((r)=> r || fetch(evt.request))); });