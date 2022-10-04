const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();

exports.getTripod = async (url, id) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(encodeURI(url + `${id}`));

    const tripod = {};

    let i = 1;
    while (i <= 8) {
      await page.evaluate(() => {
        return document
          .querySelector(
            `#profile-skill > div.profile-skill-battle > div.profile-skill__list > div:nth-child(${i}) > a`
          )
          .click();
      });

      let content = await page.content();
      const $ = cheerio.load(content, { decodeEntities: true });
      const skillName = $(
        `${process.env.CRAW_SKILL_NAME_PREV}(${i})${process.env.CRAW_SKILL_NAME_AFTER}`
      ).text();
      tripod[skillName] = [];
      console.log(skillName);
      const test = $(
        `#profile-skill > div.profile-skill-battle > div.profile-skill-tripod > div:nth-child(2) > div.profile-skill-tripod__item.profile-skill-tripod__item--selected > span > font`
      ).text();
      console.log(test, "이건데");

      // for (j = 1; j <= 3; j++) {
      //   const tier = `#profile-skill > div.profile-skill-battle > div.profile-skill-tripod > div:nth-child(${
      //     j + 1
      //   }) > div.profile-skill-tripod__item.profile-skill-tripod__item--selected > span`;
      //   const tier_Tripod_Name = $(`${tier} > font`).text();
      //   tripod[skillName].push(tier_Tripod_Name);
      // }
      // 여기서 반복문 추가
      // const tier1 = `#profile-skill > div.profile-skill-battle > div.profile-skill-tripod > div:nth-child(2) > div.profile-skill-tripod__item.profile-skill-tripod__item--selected > span`;
      // const tier2 = `#profile-skill > div.profile-skill-battle > div.profile-skill-tripod > div:nth-child(3) > div.profile-skill-tripod__item.profile-skill-tripod__item--selected > span`;
      // const tier3 = `#profile-skill > div.profile-skill-battle > div.profile-skill-tripod > div:nth-child(4) > div.profile-skill-tripod__item.profile-skill-tripod__item--selected > span`;
      // const tier1_Tripod_Name = $(`${tier1} > font`).text();
      // const tier1_Tripod_Level = $(`${tier1} > div`).text();

      // tripod[skillName].push(tier1_Tripod_Name + " " + tier1_Tripod_Level);
      // console.log(tripod);
      i++;
    }

    return;
  } catch (err) {
    console.log(err);
  }
};
