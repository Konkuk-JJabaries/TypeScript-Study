import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ devtools: true });
    const page = await browser.newPage();
    await page.goto('https://google.com');

    await page.waitFor(3000);

    await browser.close();
})();
