var express = require("express");
var router = express.Router();
var app = express();

var craw_expedition = require("../module/expedition");
var craw_level = require("../module/level");

const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://lostark.game.onstove.com/Profile/Character/";

router.get("/", (req, res, next) => {
  let id = req.query.id;
  craw_expedition
    .getExpedition(url, id)
    .then((data) => {
      return res.send(data), console.log("Expedition Response Success");
    })
    .catch((err) => console.log(err));
  // craw_level.getLevel(url, id).then((data) => {
  //   test[`level`] = data;
  //   console.log(test, "안");
  //   return res.send(data), console.log("Level Response Success");
  // });

  //   .catch((err) => console.log(err));
  // console.log(test, "밖");
});

module.exports = router;
