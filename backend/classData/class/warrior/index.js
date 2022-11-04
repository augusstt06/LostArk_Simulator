var berserkerData = require("./berserker/skill.json");
var warlordData = require("./warlord/skill.json");

// 매개변수로 넘어온 데이터를 기반으로 클래스 skill.json으로 계산
// 아덴계산도 같이
exports.getBerserker = (data) => {
  const atk_stat = data["Basic_Stat"]["공격력"];
  const tripod = data["Tripod"];

  for (skill in tripod) {
    console.log(skill, "??");
    console.log(typeof skill);
    for (each_tripod in tripod[skill]) {
      console.log(each_tripod);
      console.log(tripod[skill][each_tripod]);
    }
  }
  console.log(atk_stat, "ㄷ?");

  return atk_stat;
};
exports.getDestryoter = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
