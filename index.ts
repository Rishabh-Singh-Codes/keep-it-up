import puppeteer from "puppeteer";
import {setTimeout} from "node:timers/promises";

const openWebsite = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const URL = "https://find-me-a-coffee-shop.onrender.com/";

    await page.goto(URL, {waitUntil: "domcontentloaded"});

    await setTimeout(5000);

    await page.close();
}

const interval = 14 * 60 * 1000; // 14 minutes

setInterval(openWebsite, interval);

openWebsite();