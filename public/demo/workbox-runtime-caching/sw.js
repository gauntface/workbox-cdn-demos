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

const EMPTY_CACHE = 'cache-only-empty';
const POPULATED_CACHE = 'cache-only-populated';

self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(POPULATED_CACHE)
    .then((cache) => {
      return cache.put(
        new Request('/demo/workbox-runtime-caching/cache-only-populated-cache'),
        new Response('Hello from the populated cache.'),
      );
    })
  );
});
self.addEventListener('activate', () => self.clients.claim());

const strategies = workbox.strategies;

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/demo/workbox-runtime-caching/cache-only-empty-cache')) {
    const cacheOnly = new strategies.CacheOnly({
      cacheName: EMPTY_CACHE
    });
    event.respondWith(cacheOnly.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/demo/workbox-runtime-caching/cache-only-populated-cache')) {
    const cacheOnly = new strategies.CacheOnly({
      cacheName: POPULATED_CACHE
    });
    event.respondWith(cacheOnly.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/demo/workbox-runtime-caching/cache-first')) {
    const cacheFirst = new strategies.CacheFirst({
      cacheName: 'cache-first'
    });
    event.respondWith(cacheFirst.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/demo/workbox-runtime-caching/network-only')) {
    const networkOnly = new strategies.NetworkOnly();
    event.respondWith(networkOnly.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/demo/workbox-runtime-caching/network-first')) {
    const networkFirst = new strategies.NetworkFirst({
      cacheName: 'network-first'
    });
    event.respondWith(networkFirst.handle(event));
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/demo/workbox-runtime-caching/stale-while-revalidate')) {
    const staleWhileRevalidate = new strategies.StaleWhileRevalidate({
      cacheName: 'staleWhileRevalidate'
    });
    event.respondWith(staleWhileRevalidate.handle(event));
  }
});

self.addEventListener('message', function(event) {
  switch(event.data.command) {
    default:
      console.log(`Unknown command received in the service worker: `, event);
  }
});
