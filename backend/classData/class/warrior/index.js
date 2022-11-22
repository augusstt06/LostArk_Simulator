var berserker_tripod = require("../warrior/berserker/calculate/cal_skill");
var berserker_jewel = require("../warrior/berserker/calculate/cal_jewel");

exports.getBerserker = (data) => {
  // > 데미지 = 공격력 _ 스킬계수 _ 피해증가 _ 추가피해 _ 치명타 피해
  berserker_tripod.getBerserker_Tripod_Dmg(data["Tripod"]);
  berserker_jewel.getBerserker_Jewel_Dmg(data["Jewel"]);
};
exports.getDestroyer = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
