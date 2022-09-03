var express = require("express");
var router = express.Router();

const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://lostark.game.onstove.com/Profile/Character/";

let $href = [];

const getHtml = async (url, id) => {
  try {
    const res = await axios.get(
      encodeURI(`https://lostark.game.onstove.com/Profile/Character/${id}`)
    );
    const $ = cheerio.load(res.data);
    const level = $(
      `#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition > span:nth-child(2)`
    ).text();
    return level;
  } catch (err) {
    console.log(err);
  }
};

router.get("/", (req, res, next) => {
  let id = req.query.id;
  getHtml(url, id)
    .then((data) => {
      return res.send(data), console.log("Response Success");
    })
    .catch((err) => console.log("tlqkf", err));
});

module.exports = router;
