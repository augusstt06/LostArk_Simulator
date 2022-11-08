var berserkerData = require("./berserker/skill.json");
var warlordData = require("./warlord/skill.json");
console.log(berserkerData["피니쉬 스트라이크"]["tripod"]);
// 매개변수로 넘어온 데이터를 기반으로 클래스 skill.json으로 계산
// 아덴계산도 같이
exports.getBerserker = (data) => {
  const atk_stat = data["Basic_Stat"]["공격력"];
  const tripod = data["Tripod"];
  for (skill in tripod) {
    console.log(skill, "??");
    let i = 1;
    console.log(tripod[skill]);
    for (each_tripod in tripod[skill]) {
      switch (i) {
        case 1:
          const tier1 = berserkerData[skill]["tripod"]["tier1"];
          console.log(i);
          console.log(tier1, "1티어");
          i++;
          return;
        case 2:
          const tier2 = berserkerData[skill]["tripod"]["tier2"];
          console.log(i);
          console.log(tier2);
          i++;
          return;
        case 3:
          const tier3 = berserkerData[skill]["tripod"]["tier3"];
          console.log(i);
          console.log(tier3);
          i++;
          return;
        default:
          continue;
      }

      // console.log(test);
      // 트포이름
      // console.log(each_tripod);
      // 트포레벨
      // console.log(tripod[skill][each_tripod]);
    }
  }
  return atk_stat;
};
exports.getDestroyer = (data) => {
  return;
};
exports.getWarlord = (data) => {
  return;
};
