var berserker_tripod_cal = require("../warrior/berserker/calculate/cal_skill");
var jewel_cal = require("../../common_cal/cal_jewel");
var card_cal = require("../../common_cal/cal_card");
var engrave_cal = require("../../common_cal/cal_engrave");

exports.getBerserker = (data) => {
  // > 데미지 = 공격력 _ 스킬계수 _ 피해증가 _ 추가피해 _ 치명타 피해
  berserker_tripod_cal.getBerserker_Tripod_Increase(data["Tripod"]);
  jewel_cal.getJewel_Increase(data["Jewel"]);
  card_cal.getCard_Increase(data["Card"]);
  engrave_cal.getEngrave_Increase(data["Engrave"]);
};
exports.getDestroyer = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
