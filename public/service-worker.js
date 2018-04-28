const CACHE_NAME = 'cats-to-go-v1';

/** Adds app shell to cache on service worker installation */
self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
        '.',
        'app.css',
        'app.js',
        'vendor.js',
        'static/manifest.json'
      ])
    )
  )
});

/** Try cache first for all requests */
self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  )
);

/** Respond to push events */
self.addEventListener('push', event => {
  const options = {
    body: 'The talk is almost over!',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '-push-notification'
    },
    actions: [
      {
        action: 'explore',
        title: 'Do something now'
      },
      {
        action: 'close',
        title: 'Close the notification'
      },
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Lightning Talk', options)
  );
});