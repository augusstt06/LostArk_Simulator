const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();

exports.getEquip = async (url, id) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(encodeURI(url + `${id}`));
    await page.hover(`${process.env.CRAW_EQIP_HOVER}`);

    let content = await page.content();

    const eqip = [];
    // const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(content, { decodeEntities: true });

    const eqipLevel = $(`${process.env.CRAW_EQIP_LEVEL}`).text();

    eqip.push(eqipLevel);

    browser.close();
    // return eqip;
  } catch (err) {
    console.log(err);
  }
};
