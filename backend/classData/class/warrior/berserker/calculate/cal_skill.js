var berserkerData = require("../skill.json");

exports.getBerserker_Tripod_Dmg = (data) => {
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
          if (tier1 === null) {
            i++;
            continue;
          } else {
            const test = Object.keys(tier1)[0];
            console.log("tier1 : ", tier1);
            console.log("트포 레벨 : ", tier1_Level);
            i++;
            continue;
          }
        case 2:
          console.log(each_tripod);
          const tier2 = berserkerData[skill]["tripod"]["tier2"][each_tripod];
          const tier2_Level = tripod[skill][each_tripod];
          console.log(i);
          if (tier2 === null) {
            i++;
            continue;
          } else {
            const test = Object.keys(tier2)[0];
            console.log("tier2 : ", tier2);
            console.log(test);
            console.log("트포 레벨 : ", tier2_Level);
            i++;
            continue;
          }

        case 3:
          const tier3 = berserkerData[skill]["tripod"]["tier3"][each_tripod];

          const tier3_Level = tripod[skill][each_tripod];
          console.log(i);
          if (tier3 === null) {
            i++;
            continue;
          } else {
            const test = Object.keys(tier3)[0];
            console.log("tier3 : ", tier3);
            console.log(test);
            console.log("트포 레벨 : ", tier3_Level);
            i++;
            continue;
          }
        default:
          continue;
      }
    }
  }
  return atk_stat;
};
