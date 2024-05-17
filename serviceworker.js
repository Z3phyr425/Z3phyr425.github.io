const urlsToCache = [
    "/",
    "image/apple-touch-icon.png",
    "image/favicon.icon",
    "image/icon-192.png",
    "image/icon-512-maskable.png",
    "image/icon-512.png"
  ];
   
  self.addEventListener("install", (event) => {
    let cacheUrls = async () => {
       const cache = await caches.open("pwa-assets");
       return cache.addAll(urlsToCache);
    };
    event.waitUntil(cacheUrls());
  });
   
  self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request));
  });