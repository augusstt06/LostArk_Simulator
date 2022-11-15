var berserkerData = require("./berserker/skill.json");
var warlordData = require("./warlord/skill.json");

// 아덴계산도 같이
// 일단 작성하고 calculate로 옮기기.
exports.getBerserker = (data) => {
  const atk_stat = data["Basic_Stat"]["공격력"];
  const tripod = data["Tripod"];
  // 우선 1로 가정
  const basic_dmg = 1;

  for (skill in tripod) {
    let i = 1;
    console.log(skill);

    for (each_tripod in tripod[skill]) {
      switch (i) {
        case 1:
          const tier1 = berserkerData[skill]["tripod"]["tier1"][each_tripod];
          const tier1_Level = tripod[skill][each_tripod];

          console.log(i);
          console.log("tier1 : ", tier1);
          console.log("트포 레벨 : ", tier1_Level);

          i++;
          continue;
        case 2:
          const tier2 = berserkerData[skill]["tripod"]["tier2"][each_tripod];
          console.log(i);
          console.log("tier2", tier2);
          i++;
          continue;
        case 3:
          const tier3 = berserkerData[skill]["tripod"]["tier3"][each_tripod];
          console.log(i);
          console.log("tier3", tier3);
          i++;
          continue;
        default:
          continue;
      }
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
