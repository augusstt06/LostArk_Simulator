var berserkerData = require("../skill.json");
// > 데미지 = 공격력 _ 스킬계수 _ 피해증가 _ 추가피해 _ 치명타 피해
// 아덴계산도 같이
exports.getBerserker_Tripod_Dmg = (data) => {
  const atk_stat = data["Basic_Stat"]["공격력"];
  const tripod = data["Tripod"];
  // 스킬계수 : 우선 1로 가정
  const skill_coef = 1;

  for (skill in tripod) {
    let i = 1;
    console.log(skill);
    let skill_increase = {
      increase_dmg: 0,
      add_dmg: 0,
      critical_dmg: 0,
      increase_atk: 0,
    };
    for (each_tripod in tripod[skill]) {
      switch (i) {
        case 1:
          const tier1 = berserkerData[skill]["tripod"]["tier1"][each_tripod];
          const tier1_Level = tripod[skill][each_tripod];

          if (tier1 === null) {
            i++;
            continue;
          } else {
            const increase_category = Object.keys(tier1)[0];
            const increase_coef =
              tier1[increase_category][tier1_Level.slice(3) - 1];

            skill_increase[increase_category] += increase_coef;
            i++;
            continue;
          }
        case 2:
          const tier2 = berserkerData[skill]["tripod"]["tier2"][each_tripod];
          const tier2_Level = tripod[skill][each_tripod];

          if (tier2 === null) {
            i++;
            continue;
          } else {
            const increase_category = Object.keys(tier2)[0];
            const increase_coef =
              tier2[increase_category][tier2_Level.slice(3) - 1];
            skill_increase[increase_category] += increase_coef;
            i++;
            continue;
          }

        case 3:
          const tier3 = berserkerData[skill]["tripod"]["tier3"][each_tripod];
          const tier3_Level = tripod[skill][each_tripod];

          if (tier3 === null) {
            i++;
            continue;
          } else {
            const increase_category = Object.keys(tier3)[0];
            const increase_coef =
              tier3[increase_category][tier3_Level.slice(3) - 1];
            skill_increase[increase_category] += increase_coef;
            i++;
            continue;
          }
        // 위의 switch문이 완료되면 스킬 하나의 트포당 데미지 추가 항목이 계산이 완료됨
        // 따라서 switch문이 끝나는 시점에 각 항목을 종합하여 리턴
        // 최종적인 계산은 어디서?

        // 각 카테고리의 계수가 0.xxx일때 계산 미스
        default:
          continue;
      }
    }
    console.log(skill_increase);
    let skillDMG = atk_stat * skill_coef;
    for (category in skill_increase) {
      if (category === "buff") {
        continue;
      } else if (skill_increase[category] === 0) {
        continue;
      } else {
        console.log(skill_increase[category], "이거 곱하는거임 ");
        skillDMG *= skill_increase[category];
      }
    }
    console.log(skillDMG);
  }
  return atk_stat;
};
