// Enter your custom cache name
var CACHE = 'my-cache-name';

// Install event
addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => {
            return cache.addAll([
                // Add your files here, those that are needed by the index.html. Must be absolute path
                './',
                'index.html',
                'manifest.json',
                './dist/css/bootstrap-grid.css',
                './dist/fonts/fa-brands-400.woff2',
                './dist/fonts/fa-regular-400.woff2',
                './dist/fonts/fa-solid-900.woff2',
                './dist/js/bootstrap.min.js',
                './dist/js/jquery-3.3.1.min.js',
                './dist/js/popper.min.js',
                './src/css/app.css',
                './src/js/app.js'
            ]);
        })
    );
});

// Fetch event
addEventListener('fetch', e => {
    e.respondWith(fromCache(e.request));
    e.waitUntil(updateCache(e.request));
});

// Load from cache
var fromCache = request => {
    return caches.open(CACHE).then(cache => {
        return cache.match(request).then(response => {
            return response || Promise.reject('no-match');
        });
    });
};

// Fetch from network
var updateCache = request => {
    return caches.open(CACHE).then(cache => {
        return fetch(request).then(response => {
            return cache.put(request, response);
        });
    });
};
