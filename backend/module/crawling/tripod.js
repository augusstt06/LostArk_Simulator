const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();

exports.getTripod = async (url, id) => {
  try {
    const tripod = {};
    const clickSkill = async (i) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(encodeURI(url + `${id}`));

      await page.evaluate((i) => {
        document
          .querySelector(
            `#profile-skill > div.profile-skill-battle > div.profile-skill__list > div:nth-child(${i}) > a`
          )
          .click();
      }, i);

      let content = await page.content();

      const $ = cheerio.load(content, { decodeEntities: true });

      const test = $(
        `#profile-skill > div.profile-skill-battle > div.profile-skill-tripod > h5`
      ).text();
      console.log(test);
      browser.close();
    };
    for (i = 1; i <= 8; i++) {
      await clickSkill(i);
    }

    return;
  } catch (err) {
    console.log(err);
  }
};
