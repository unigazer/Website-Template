const webdriverio = require('webdriverio'),
    client = webdriverio.remote();

// Initialize
client.init().end();

// Perform the test
describe('It searches for Webdriver.io', () => {
    browser.url('https://duckduckgo.com');
    browser.setValue('#search_from_inupt_homepage', 'WebdriverIO');
    browser.click('#search_button_homepage');

    let title = browser.getTitle();
    console.log(`The title is ${title}`);
});