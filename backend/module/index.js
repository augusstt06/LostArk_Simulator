var craw_class = require("./crawling/class");
var craw_expedtion = require("./crawling/expedition");
var craw_level = require("./crawling/level");
var craw_basic_Stat = require("./crawling/stat/basicStat");
var craw_battle_Stat = require("./crawling/stat/battleStat");
var craw_engrave = require("./crawling/engrave");
var craw_jewel = require("./crawling/jewel");
var craw_card = require("./crawling/card");
var craw_tripod = require("./crawling/tripod");

exports.getCrawlingData = async (url, id) => {
  try {
    const characterInfo = {};

    const character_Class = await craw_class.getClass(url, id);
    const level = await craw_level.getLevel(url, id);
    const expedition = await craw_expedtion.getExpeditionServer(url, id);
    const basic_Stat = await craw_basic_Stat.getBasicStat(url, id);
    const battle_Stat = await craw_battle_Stat.getBattleStat(url, id);
    const engrave = await craw_engrave.getEngrave(url, id);
    const jewel = await craw_jewel.getJewel(url, id);
    const card = await craw_card.getCard(url, id);
    const tripod = await craw_tripod.getTripod(url, id);

    characterInfo["Class"] = character_Class;
    characterInfo["Level"] = level;
    characterInfo["Expedition"] = expedition;
    characterInfo["Basic_Stat"] = basic_Stat;
    characterInfo["Battle_Stat"] = battle_Stat;
    characterInfo["Engrave"] = engrave;
    characterInfo["Jewel"] = jewel;
    characterInfo["Card"] = card;
    characterInfo["Tripod"] = tripod;

    return characterInfo;
  } catch (err) {
    console.log(err);
  }
};
