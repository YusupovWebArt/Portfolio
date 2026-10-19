const CACHE_NAME = 'portfolio-pwa-v2.0.0';
const PRECACHE_ASSETS = [
  '/Portfolio/',
  '/Portfolio/manifest.webmanifest',
  '/Portfolio/images/favicon.ico',
  '/Portfolio/images/hero-pic.webp',
  '/Portfolio/images/icons/icon-192x192.png',
  '/Portfolio/images/icons/icon-512x512.png',
  '/Portfolio/images/icons/maskable-icon-512x512.png'
];

// Install Event - Precache App Shell static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[PWA] Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network-First for navigation (HTML) to prevent stale asset hashes; Stale-While-Revalidate for static assets
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only intercept GET requests
  if (request.method !== 'GET') return;

  // Bypass Google Analytics & external API calls
  const url = new URL(request.url);
  if (
    url.hostname.includes('google-analytics.com') ||
    url.hostname.includes('googletagmanager.com')
  ) {
    return;
  }

  // 1. Navigation requests (HTML documents): Network-First
  // Guarantees latest index.html with up-to-date JS chunk hashes, falling back to cache only when offline
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/Portfolio/')))
    );
    return;
  }

  // 2. Static assets & media: Stale-While-Revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === 'basic'
            ) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      });
    })
  );
});

