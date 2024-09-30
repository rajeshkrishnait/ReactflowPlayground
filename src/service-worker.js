// src/service-worker.js
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
cleanupOutdatedCaches();

precacheAndRoute(window.self.__WB_MANIFEST);
window.self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('reactflow-playground').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/manifest.json',  // Cache manifest if you're using one
        '/static/js/main.[hash].js',  // Check the build folder for actual filenames
        '/static/js/0.[hash].js', 
        '/static/js/runtime-main.[hash].js', 
        '/static/css/main.[hash].css',  // Cache CSS if available
        '/logo192.png',
        '/logo512.png',
      ]);
    })
  );
});

  window.self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  