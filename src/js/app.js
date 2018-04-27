// And so it begins...

// Declaring variables
let mssg = "Hello World!";

// Arrow function
var myFunction = () => alert(mssg);

// onload event
addEventListener('load', myFunction());

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {scope: '/'})
    .then(() => {
        console.log('Service Worker registered.')
    })
    .catch(e => {
        console.log(`Service Worker failed to register, ${e}`)
    })
}