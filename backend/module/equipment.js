const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();
// 무기 세트는 바꾼 상태로 둘 일이 많으니 이건 선택할 수 있도록 만들자
// 일단 여긴 보류

// puppeteer로 먼저 페이지를 전부 로딩한후 데이터를 스크랩핑 한다.

// 머리
// #lostark-wrapper > div.game-tooltip.game-tooltip-item > div.NameTagBox > p > font
// 견갑
// #lostark-wrapper > div.game-tooltip.game-tooltip-item > div.NameTagBox > p > font

exports.getEquip = async (url, id) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(encodeURI(url + `${id}`));
    await page.hover(
      `#profile-equipment > div.profile-equipment__slot > div.slot1`
    );

    let content = await page.content();

    const eqip = [];
    // const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(content, { decodeEntities: true });

    const eqipLevel = $(
      `#lostark-wrapper > div.game-tooltip.game-tooltip-item > div.NameTagBox > p > font`
    ).text();
    console.log(eqipLevel, "아 제발");
    eqip.push(eqipLevel);

    // return eqip;
  } catch (err) {
    console.log(err);
  }
};
