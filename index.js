import puppeteer from "puppeteer";
import {setTimeout} from "node:timers/promises";

const openWebsite1 = async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const URL = "https://find-me-a-coffee-shop.onrender.com/";

    await page.goto(URL, {waitUntil: "domcontentloaded", timeout: 300000});
    console.log(`Website 1 opened at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);

    await setTimeout(5000);

    await page.close();
}

const openWebsite2 = async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const URL = "https://rezerv.onrender.com/";

    await page.goto(URL, {waitUntil: "domcontentloaded", timeout: 300000});
    console.log(`Website 2 opened at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);

    await setTimeout(5000);

    await page.close();
}

const interval = 14 * 60 * 1000; // 14 minutes

setInterval(openWebsite1, interval);

openWebsite1();

setInterval(openWebsite2, interval);

openWebsite2()