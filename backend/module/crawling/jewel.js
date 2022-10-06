const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getJewel = async (url, id) => {
  try {
    const jewel = { 홍염: {}, 멸화: {} };
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    const jewel_num = $(`${process.env.CRAW_JEWEL_NUM}`).length;

    for (i = 1; i <= jewel_num; i++) {
      const jewel_effect = $(
        `${process.env.CRAW_JEWEL_EFFECT}(${i}) > p`
      ).text();

      for (j = 0; j < jewel_effect.length; j++) {
        switch (jewel_effect[j]) {
          case "재":
            jewel["홍염"][jewel_effect.slice(0, j - 1)] = jewel_effect.slice(
              j + 9,
              j + 14
            );
            break;
          case "피":
            jewel["멸화"][jewel_effect.slice(0, j - 1)] = jewel_effect.slice(
              j + 3,
              j + 8
            );
            break;
          default:
            continue;
        }
      }
    }

    console.log("Success Crawling Jewel!");
    return jewel;
  } catch (err) {
    console.log(err);
  }
};
