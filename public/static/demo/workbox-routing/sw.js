importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-sw.dev.js');

const wb = new WorkboxSW({
  debug: true
});

console.log(wb.routing);

self.addEventListener('message', function(event) {
  switch(event.data.command) {
    default:
      console.log(`Unknown command received in the service worker: `, event);
  }
});
