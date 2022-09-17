const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();

exports.getEngrave = async (url, id) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(encodeURI(url + `${id}`));

    let content = await page.content();

    const engrave = {};
    const $ = cheerio.load(content, { decodeEntities: true });
    const engrave_num = $(`${process.env.CRAW_ENGRAVE_NUM}`).length;

    for (i = 1; i <= engrave_num; i++) {
      const engrave_arr = [];
      const engrave_detail = $(
        `${process.env.CRAW_ENGRAVE_DETAIL}(${i}) > span`
      ).text();
      if (engrave_detail === "") {
        break;
      }
      for (j = 0; j <= engrave_detail.length; j++) {
        if (engrave_detail[j] === "L") {
          engrave_arr.push(engrave_detail.slice(0, j + 5));
          if (engrave_detail.slice(j + 5) !== "") {
            engrave_arr.push(engrave_detail.slice(j + 5));
          }
          break;
        }
      }
      for (n = 0; n < engrave_arr.length; n++) {
        for (k = 0; k <= engrave_arr[n].length; k++) {
          if (engrave_arr[n][k] === "L") {
            engrave_level = engrave_arr[n][engrave_arr[n].length - 1];
            engrave[engrave_arr[n].slice(0, k - 1)] = engrave_arr[n].at(-1);
          }
        }
      }
    }
    return engrave;
  } catch (err) {
    console.log(err);
  }
};
