const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();

exports.getTripod = async (url, id) => {
  try {
    const tripod = {};

    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    const skill_num = $(`${process.env.CRAW_SKILL_NUM}`).length;

    process.setMaxListeners(skill_num);

    const clickSkill = async (i) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(encodeURI(url + `${id}`));
      const evaluate_Variables = process.env.CRAW_SKILL_CLICK;

      await page.evaluate(
        (i, evaluate_Variables) => {
          document.querySelector(`${evaluate_Variables}(${i}) > a`).click();
        },
        i,
        evaluate_Variables
      );

      let content = await page.content();

      const $ = cheerio.load(content, { decodeEntities: true });

      const skillName = $(`${process.env.CRAW_SKILL_NAME}`).text();
      const skillLevel = $(`${process.env.CRAW_SKILL_LEVEL}`).text();

      if (skillLevel !== "1") {
        tripod[skillName] = {};

        for (j = 1; j <= 3; j++) {
          const skillTripod_Name = $(
            `${process.env.CRAW_SKILL_TRIPOD_PREV}(${j + 1}) > ${
              process.env.CRAW_SKILL_TRIPOD_AFTER
            } > span > font`
          ).text();

          const skillTripod_Level = $(
            `${process.env.CRAW_SKILL_TRIPOD_PREV}(${j + 1}) > ${
              process.env.CRAW_SKILL_TRIPOD_AFTER
            } > span > div`
          ).text();
          if (skillTripod_Name.length !== 0) {
            tripod[skillName][skillTripod_Name] = skillTripod_Level;
          }
        }

        browser.close();
      }
    };

    for (i = 1; i <= skill_num; i++) {
      await clickSkill(i);
    }

    console.log("Success Crawling Tripod!");

    return tripod;
  } catch (err) {
    console.log(err);
  }
};
