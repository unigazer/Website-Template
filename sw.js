// Enter your custom cache name
var CACHE = 'my-cache-name';

// Install event
addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE).then(cache => {
            cache.addAll([
                // Add your files here. Must be absolute path
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
addEventListener('fetch', function (e) {
    e.respondWith(fromCache(e.request));
    e.waitUntil(updateCache(e.request));
});

function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (response) {
            return response || Promise.reject('no-match');
        });
    });
};

function updateCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
};