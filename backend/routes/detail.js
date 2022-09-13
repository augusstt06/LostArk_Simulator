var express = require("express");
var router = express.Router();
var req = express.request;

require("dotenv").config();

var craw_expedition = require("../module/expedition");
var craw_level = require("../module/level");
var craw_basic = require("../module/stat/basicStat");
// var craw_eqip = require("../module/equipment");

const url = process.env.CRAW_URL;

const getData = async (url, id) => {
  try {
    const characterInfo = {};

    const level = await craw_level.getLevel(url, id);
    const expedition = await craw_expedition.getExpeditionServer(url, id);
    const basic_stat = await craw_basic.getBasicStat(url, id);
    // const eqip = await craw_eqip.getEquip(url, id);

    characterInfo["Level"] = level;
    characterInfo["Expedition"] = expedition;
    characterInfo["Stat"] = basic_stat;
    // characterInfo["Eqipment"] = eqip;

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
