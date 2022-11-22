var berserker_tripod = require("../warrior/berserker/calculate/cal_skill");
var berserker_jewel = require("../../common_cal/cal_jewel");
var berserker_card = require("../../common_cal/cal_card");

exports.getBerserker = (data) => {
  // > 데미지 = 공격력 _ 스킬계수 _ 피해증가 _ 추가피해 _ 치명타 피해
  berserker_tripod.getBerserker_Tripod_Increase(data["Tripod"]);
  berserker_jewel.getJewel_Increase(data["Jewel"]);
  berserker_card.getCard_Increase(data["Card"]);
};
exports.getDestroyer = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
