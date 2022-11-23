var pro_engraveData = require("../pro_engrave.json");
var public_engraveData = require("../public_engrave.json");

// 직업 필요
exports.getEngrave_Increase = (data_engrave, data_class) => {
  let engrave_coef = {
    increase_dmg: 0,
    add_dmg: 0,
    critical_dmg: 0,
    increase_atk: 0,
  };
  const user_engrave = Object.keys(data_engrave);

  for (i in user_engrave) {
    if (user_engrave[i] in pro_engraveData[data_class]) {
      const increase_category = Object.keys(
        pro_engraveData[data_class][user_engrave[i]]
      );
      const pro_engrave_coef =
        pro_engraveData[data_class][user_engrave[i]][increase_category][
          Number(data_engrave[user_engrave[i]]) - 1
        ];

      engrave_coef[increase_category] += pro_engrave_coef;
    } else if (user_engrave[i] in public_engraveData) {
      const increase_category = Object.keys(
        public_engraveData[user_engrave[i]]
      );
      const public_engrave_coef =
        public_engraveData[user_engrave[i]][increase_category][
          Number(data_engrave[user_engrave[i]]) - 1
        ];

      engrave_coef[increase_category] += public_engrave_coef;
    } else {
      continue;
    }
  }
  console.log("Engrave Coef : ", engrave_coef);
  return engrave_coef;
};
