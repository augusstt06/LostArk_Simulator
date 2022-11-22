// 기타 속성 피해 카드 추가하기
exports.getCard_Increase = (data) => {
  let card_coef = {
    increase_dmg: 0,
  };

  for (i in data) {
    switch (data[i]) {
      case "세상을 구하는 빛 6세트 (18각성합계)" ||
        "카제로스의 군단장 6세트 (18각성합계)":
        card_coef["increase_dmg"] += 0.07;
        break;

      case "세상을 구하는 빛 6세트 (30각성합계)" ||
        "카제로스의 군단장 6세트 (30각성합계)":
        card_coef["increase_dmg"] += 0.15;
        break;

      case "라제니스의 운명 2세트 (4각성합계)":
        card_coef["increase_dmg"] += 0.02;
        i++;
        continue;

      case "라제니스의 운명 2세트 (10각성합계)":
        card_coef["increase_dmg"] += 0.26;
        i++;
        continue;

      case "세 우마르가 오리라 3세트 (6각성합계)":
        card_increase["increase_dmg"] += 0.02;
        i++;
        continue;

      case "세 우마르가 오리라 3세트 (6각성합계)":
        card_coef["increase_dmg"] += 0.12;
        i++;
        continue;

      default:
        i++;
        continue;
    }
  }
  console.log("Card Coef : ", card_coef);
  return card_coef;
};
