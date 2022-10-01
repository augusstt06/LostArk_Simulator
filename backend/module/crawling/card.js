const axios = require("axios");
const cheerio = require("cheerio");

exports.getCard = async (url, id) => {
  try {
    const card = [];
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    const card_effect_num = $(`#cardSetList > li`).length;

    const card_set = [];
    for (i = 1; i <= card_effect_num; i++) {
      const test = $(
        `${process.env.CRAW_CARD_PREV}(${i}) > ${process.env.CRAW_CARD_AFTER}`
      ).text();

      let card_name;
      for (j = 0; j <= test.length; j++) {
        if (
          test[j] === "2" ||
          test[j] === "3" ||
          test[j] === "4" ||
          test[j] === "6"
        ) {
          card_name = test;
          if (card_set.includes(card_name) === false) {
            card_set.push(card_name);
          }
        } else continue;
      }
    }

    for (k = 0; k < card_set.length - 1; k++) {
      if (
        card_set[k].slice(0, 3) === card_set[k + 1].slice(0, 3) &&
        k + 1 === card_set.length - 1
      ) {
        card.push(card_set[k + 1]);
      } else if (card_set[k].slice(0, 3) !== card_set[k + 1].slice(0, 3)) {
        card.push(card_set[k]);
      }
    }

    return card;
  } catch (err) {
    console.log(err);
  }
};
