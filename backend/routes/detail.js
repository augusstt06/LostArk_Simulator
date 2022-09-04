var express = require("express");
var router = express.Router();

var craw_expedition = require("../module/expedition");
var craw_level = require("../module/level");

const url = "https://lostark.game.onstove.com/Profile/Character/";

let characterInfo = {};

// 각각의 모듈실행 데이터를 characterInfo로 모아서 한번에 response

router.get("/", (req, res, next) => {
  let id = req.query.id;
  craw_expedition.getExpedition(url, id).then((data) => {
    return (characterInfo["Expedition"] = data), next();
  });
});
router.get("/", (req, res, next) => {
  let id = req.query.id;
  craw_level.getLevel(url, id).then((data) => {
    return (characterInfo["Level"] = data), next();
  });
});

router.get("/", (req, res, next) => {
  res.send(characterInfo);
});

module.exports = router;
