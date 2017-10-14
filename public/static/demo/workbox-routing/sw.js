// Would be good to swap with workbox-sw
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-core.dev.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.17/workbox-routing.dev.js');

/*
const wb = new WorkboxSW({
  debug: true
});
*/

// TODO Skip Waiting
// TODO Clieans Claim

const routing = workbox.routing.default;

// Set up a route to alter the demo-img
const specialImgUrl = new URL('/static/demo/workbox-routing/demo-img.png', location).toString();
const specialImgRoute = new workbox.routing.Route(({event}) => {
  return (event.request.url === specialImgUrl);
}, ()=> {
  return fetch('/static/demo/workbox-routing/demo-img-intercepted.png');
});
routing.registerRoute(specialImgRoute);


self.addEventListener('message', function(event) {
  switch(event.data.command) {
    default:
      console.log(`Unknown command received in the service worker: `, event);
  }
});
