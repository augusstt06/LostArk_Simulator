exports.getJewel_Increase = (data) => {
  const jewel = data["멸화"];
  const jewel_coef = {};
  for (skill in jewel) {
    let jewel_increase = {
      increase_dmg: 0,
    };

    jewel_increase["increase_dmg"] += jewel[skill];

    jewel_coef[skill] = jewel_increase;
  }
  console.log("jewel coef : ", jewel_coef);

  return jewel_coef;
};
