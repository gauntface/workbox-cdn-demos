// Would be good to swap with workbox-sw
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-core.dev.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-runtime-caching.dev.js');

/*
const wb = new WorkboxSW({
  debug: true
});
*/

// TODO Skip Waiting
// TODO Clieans Claim

const strategies = workbox.strategies;

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/static/demo/workbox-runtime-caching/cache-only-empty-cache')) {
    const cacheOnly = stategies.CacheOnly();
    event.respondWith(cacheOnly.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/static/demo/workbox-runtime-caching/cache-only-populated-cache')) {
    const cacheOnly = stategies.CacheOnly();
    event.respondWith(cacheOnly.handle(event));
  }
});

/** self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/static/demo/workbox-runtime-caching/cache-first')) {
    const cacheFirst = stategies.CacheFirst();
    event.respondWith(cacheFirst.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/static/demo/workbox-runtime-caching/network-only')) {
    const networkOnly = stategies.NetworkOnly();
    event.respondWith(networkOnly.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/static/demo/workbox-runtime-caching/network-first')) {
    const networkFirst = stategies.NetworkFirst();
    event.respondWith(networkFirst.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/static/demo/workbox-runtime-caching/stale-while-revalidate')) {
    const staleWhileRevalidate = stategies.StaleWhileRevalidate();
    event.respondWith(staleWhileRevalidate.handle(event));
  }
});

self.addEventListener('message', function(event) {
  switch(event.data.command) {
    default:
      console.log(`Unknown command received in the service worker: `, event);
  }
});
**/
