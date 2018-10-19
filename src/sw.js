// You can also use your app in Offline mode, it's already configured

// Enter your custom cache name
var CACHE = 'my-cache-name';

// Install event
addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                './',
                'index.html',
                './manifest.json',
                '/.*\.css/',
                '/.*\.(?:png|jpg|jpeg|svg|gif)/',
                '/.*\.woff2',
                '/.*\.js/'
                // Add your files here, those that are needed by the index.html. Must be absolute path
                // './path-to-my-custom-file'
            ]);
        })
    );
});

// Fetch event
addEventListener('fetch', (e) => {
    e.respondWith(fromCache(e.request));
    e.waitUntil(updateCache(e.request));
});

// Load from cache
function fromCache(request) {
    return caches.open(CACHE).then((cache) => {
        return cache.match(request).then((response) => {
            return response || Promise.reject('no-match');
        });
    });
};

// Fetch from network
function updateCache(request) {
    return caches.open(CACHE).then((cache) => {
        return fetch(request).then((response) => {
            return cache.put(request, response);
        });
    });
};

// Push event
// You need to subscribe the user on frontend in order for this to work
addEventListener('push', (e) => {
    let payload = e.data.json();
    
    // Send the notification
    self.registration.showNotification('My custom title', {
        body: 'This should be received from the server',
        icon: 'path-to-icon',
        url: 'https://www.example.com'
    })
});

// Close the notification
addEventListener('notificationclick', (e) => {
    e.notification.close();
});
