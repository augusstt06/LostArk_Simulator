var express = require("express");
var router = express.Router();

var craw_expedition = require("../module/expedition");
var craw_level = require("../module/level");

const url = "https://lostark.game.onstove.com/Profile/Character/";

let characterInfo = {};

router.get("/", (req, res, next) => {
  let id = req.query.id;
  craw_expedition.getExpeditionServer(url, id).then((data) => {
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
