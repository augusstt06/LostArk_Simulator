var berserkerData = require("./berserker/skill.json");
var warlordData = require("./warlord/skill.json");

// 아덴계산도 같이
exports.getBerserker = (data) => {
  const atk_stat = data["Basic_Stat"]["공격력"];
  const tripod = data["Tripod"];
  for (skill in tripod) {
    let i = 1;
    console.log(tripod[skill]);
    for (each_tripod in tripod[skill]) {
      switch (i) {
        case 1:
          const tier1 = berserkerData[skill]["tripod"]["tier1"];
          console.log(i);
          console.log(tier1, "1티어");
          i++;
          continue;
        case 2:
          const tier2 = berserkerData[skill]["tripod"]["tier2"];
          console.log(i);
          console.log(tier2);
          i++;
          continue;
        case 3:
          const tier3 = berserkerData[skill]["tripod"]["tier3"];
          console.log(i);
          console.log(tier3);
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
