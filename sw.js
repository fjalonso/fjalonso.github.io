const version = "0.2.0";
const cacheName = `fjalonso-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/css/foundation.css`,
        `/css/otros/grid3d.css`,
        `/css/fjalonso.css`,
        `/css/main.css`,
        `/js/otros/modernizr.custom.js`,
        `/js/otros/typed.min.js`,
        `/js/otros/jquery.js`,
        `/js/foundation.min.js`,
        `/js/app.js`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});