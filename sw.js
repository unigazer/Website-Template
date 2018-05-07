// You can also use your app in Offline mode, it's already configured

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
                './dist/css/style.min.css',
                './dist/fonts/fa-brands-400.woff2',
                './dist/fonts/fa-regular-400.woff2',
                './dist/fonts/fa-solid-900.woff2',
                './dist/js/main.min.js'
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

// Push event
// You need to subscribe the user in order for this to work
addEventListener('push', e => {
    const payload = e.data.json();
    
    // Send the notification
    self.registration.showNotification('My custom title', {
        body: payload.key.value,
        icon: 'path-to-icon',
        url: 'https://www.example.com'
    }
});

// Close the notification
addEventListener('notificationclick', e => {
    e.notification.close();
});
