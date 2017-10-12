importScripts('https://storage.googleapis.com/workbox-cdn/releases/v3.0.0-alpha/workbox-sw.dev.js');

const wb = new WorkboxSW({
  debug: true
});

wb.precaching.precache([
  {url: '/demo/workbox-precaching', revision: '1'},
  'test-file.txt',
  'hello-world.1234.txt',
]);
