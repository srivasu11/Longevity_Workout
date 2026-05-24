/* Service worker intentionally minimal â€” no caching to avoid path issues on subdirectory hosts */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
