var berserker_tripod_cal = require("../warrior/berserker/calculate/cal_skill");
var jewel_cal = require("../../common_cal/cal_jewel");
var card_cal = require("../../common_cal/cal_card");
var engrave_cal = require("../../common_cal/cal_engrave");

exports.getBerserker = (data) => {
  // > 데미지 = 공격력 _ 스킬계수 _ 피해증가 _ 추가피해 _ 치명타 피해
  // 스킬을 변수선언 시켜놓고 각각 dic으로 만들어 놓는다
  const user_skill = Object.keys(data["Tripod"]);
  const skill_coef = {};

  for (let i in user_skill) {
    skill_coef[user_skill[i]] = {};
  }

  console.log(skill_coef);
  const b_tripod = berserker_tripod_cal.getBerserker_Tripod_Increase(
    data["Tripod"]
  );
  const tripod_skill = Object.keys(b_tripod);
  console.log(tripod_skill, "11");

  console.log(skill_coef);

  const b_jewel = jewel_cal.getJewel_Increase(data["Jewel"]);
  const b_card = card_cal.getCard_Increase(data["Card"]);
  const b_engrave = engrave_cal.getEngrave_Increase(
    data["Engrave"],
    data["Class"]
  );
  // 스킬별로 나눠서 계수 계산
};
exports.getDestroyer = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
