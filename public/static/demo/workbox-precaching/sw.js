importScripts('https://storage.googleapis.com/workbox-cdn/releases/v3.0.0-alpha/workbox-sw.dev.js');

const precacheList = [
  {url: 'workbox-precaching.html', revision: self.location.search},
  'test-file.txt',
];

if (self.location.search === '?version=1') {
  precacheList.push('version-1-file.txt');
} else {
  precacheList.push('version-2-file.txt');
}

const wb = new WorkboxSW();
wb.precaching.precache(precacheList);
