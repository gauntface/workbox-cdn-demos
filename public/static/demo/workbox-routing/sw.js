// Would be good to swap with workbox-sw
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-core.dev.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-routing.dev.js');

/*
const wb = new WorkboxSW({
  debug: true
});
*/

const routing = workbox.routing.default;

const specialImgUrl = new URL('/static/demo/workbox-routing/demo-img.png', location).toString();
const specialImgRoute = new workbox.routing.Route(({url}) => {
  return (url === specialImgUrl);
}, ()=> {
  return fetch('http://via.placeholder.com/300x300/ffffff/F57C00?text=Hello+from+Workbox');
});
routing.registerRoute();

self.addEventListener('message', function(event) {
  switch(event.data.command) {
    default:
      console.log(`Unknown command received in the service worker: `, event);
  }
});
