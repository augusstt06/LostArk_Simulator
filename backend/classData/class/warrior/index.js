var berserkerData = require("./berserker/skill.json");
var warlordData = require("./warlord/skill.json");

var berserker_tripod = require("../warrior/berserker/calculate/cal_skill");
// 아덴계산도 같이
// 일단 작성하고 calculate로 옮기기.
exports.getBerserker = (data) => {
  // > 데미지 = 공격력 _ 스킬계수 _ 피해증가 _ 추가피해 _ 치명타 피해
  berserker_tripod.getBerserker_Tripod_Dmg(data);
};
exports.getDestroyer = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
