var express = require("express");
var router = express.Router();

var craw_expedition = require("../module/expedition");
var craw_level = require("../module/level");

const url = "https://lostark.game.onstove.com/Profile/Character/";

let characterInfo = {};

router.get("/", (req, res, next) => {
  let id = req.query.id;
  craw_expedition.getExpeditionServer(url, id).then((data) => {
    return (
      (characterInfo["Expedition"] = data),
      console.log("Expedition Response Success"),
      next()
    );
  });
});
router.get("/", (req, res, next) => {
  let id = req.query.id;
  craw_level.getLevel(url, id).then((data) => {
    return (
      (characterInfo["Level"] = data),
      console.log("Level Response Success"),
      next()
    );
  });
});

router.get("/", (req, res, next) => {
  console.log("Sending to Client...");
  res.send(characterInfo);
  console.log("Response Success!");
});

module.exports = router;
