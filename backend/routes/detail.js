var express = require("express");
var router = express.Router();

const axios = require("axios");
const cheerio = require("cheerio");
// const url = "https://lostark.game.onstove.com/Profile/Character/";

const url =
  "https://lostark.game.onstove.com/Profile/Character/%ED%9D%AC%ED%98%84%EC%9E%89";

let $href = [];

const getHtml = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
};

router.get("/", (req, res, next) => {
  getHtml(url).then((res) => {
    let ulList = [];
    const $ = cheerio.load(res.data);
    // $(`div#lostark-wrapper > div > main > div`)
    const level = $(
      `#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition > span:nth-child(2)`
    ).text();
    return console.log(level);
  });
  res.send("TEST CONNECT");
});

module.exports = router;
