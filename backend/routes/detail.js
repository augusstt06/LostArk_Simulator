var express = require("express");
var router = express.Router();

require("dotenv").config();

var craw_expedition = require("../module/crawling/expedition");
var craw_level = require("../module/crawling/level");
var craw_basic_Stat = require("../module/crawling/stat/basicStat");
var craw_battle_Stat = require("../module/crawling/stat/battleStat");
var craw_engrave = require("../module/crawling/engrave");
var craw_jewel = require("../module/crawling/jewel");
var craw_card = require("../module/crawling/card");
var craw_tripod = require("../module/crawling/tripod");

var calculate = require("../module/calculate/index");

const url = process.env.CRAW_URL;

const getData = async (url, id) => {
  try {
    const characterInfo = {};

    const level = await craw_level.getLevel(url, id);
    const expedition = await craw_expedition.getExpeditionServer(url, id);
    const basic_Stat = await craw_basic_Stat.getBasicStat(url, id);
    const battle_Stat = await craw_battle_Stat.getBattleStat(url, id);
    const engrave = await craw_engrave.getEngrave(url, id);
    const jewel = await craw_jewel.getJewel(url, id);
    const card = await craw_card.getCard(url, id);
    const tripod = await craw_tripod.getTripod(url, id);

    characterInfo["Level"] = level;
    characterInfo["Expedition"] = expedition;
    characterInfo["Basic_Stat"] = basic_Stat;
    characterInfo["Battle_Stat"] = battle_Stat;
    characterInfo["Engrave"] = engrave;
    characterInfo["Jewel"] = jewel;
    characterInfo["Card"] = card;

    return characterInfo;
  } catch (err) {
    console.log(err);
  }
};

router.get("/", async (req, res, next) => {
  try {
    console.log("Responsing to Client...");
    const userData = await getData(url, req.query.id);
    res.send(userData);
    console.log("Response Success!");
  } catch (err) {
    console.log(err);
    res.send("Response Error!");
  }
});

module.exports = router;
