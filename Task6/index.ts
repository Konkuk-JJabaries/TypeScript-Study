import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: true, // 보이지 않게 해주는 모드입니다.
        /**
         * WSL의 경우 가상의 환경이기 때문에
         * OS와 같이 visible한 것들을 처리해줄 수 가 없어서 오류가 납니다.
         * 따라서 이에 대한 처리로 headless : true를 처리했습니다.
         * WSL 환경이 아니라 특정 OS환경에서 진행한다면 headless: false또는
         * 자우고 진행해주시면 됩니다.
         */
        devtools: true,
        ignoreDefaultArgs: ['--disable-extensions'],
        args: ['--no-sandbox', '--single-process'],
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 900, height: 600 });
    await page.goto('https://google.com');

    await page.waitFor(3000);

    await browser.close();
})();
