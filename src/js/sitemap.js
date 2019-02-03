var sm = require('sitemap'),
    fs = require('fs');

var route = (url, freq, pr) => {
    return {
        url: url,
        changefreq: freq,
        priority: pr
    }
};

// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
    hostname: 'https://mydomain.com',
    cacheTime: 600000, // 600 sec - cache purge period
    urls: [route('/', 'yearly', 1)]
});

// Generates XML with a callback function
sitemap.toXML(function (err, xml) {
    if (!err) {
        fs.writeFile('public/sitemap.xml', xml, (err) => {
            if (err) console.error(err);
        });
    }
});