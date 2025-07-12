const CACHE_NAME = "llm-assistant-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/doc.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/screenshots/pdf_rag_example.png",
  "/screenshots/chat_interface_example.png",
  "/screenshots/answer_evaluation_example.png",
  "/screenshots/wikipedia_tab_example.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  );
});
