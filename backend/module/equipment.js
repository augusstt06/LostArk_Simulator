const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();

// 머리
// #lostark-wrapper > div.game-tooltip.game-tooltip-item > div.NameTagBox > p > font
// 견갑
// #lostark-wrapper > div.game-tooltip.game-tooltip-item > div.NameTagBox > p > font

exports.getEquip = async (url, id) => {
  try {
    let eqip = [];
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    const eqipLevel = $(
      `#lostark-wrapper > div.game-tooltip.game-tooltip-item > div.NameTagBox > p > font`
    ).text();
    console.log(eqip, "아 제발");
    eqip.push(eqipLevel);

    // return eqip;
  } catch (err) {
    console.log(err);
  }
};
