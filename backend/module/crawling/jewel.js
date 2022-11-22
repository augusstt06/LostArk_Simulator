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

      switch (jewel_effect.slice(jewel_effect.length - 2)) {
        case "감소":
          jewel["홍염"][jewel_effect.slice(0, jewel_effect.length - 19)] =
            jewel_effect.slice(
              jewel_effect.length - 9,
              jewel_effect.length - 4
            );
          continue;
        case "증가":
          jewel["멸화"][jewel_effect.slice(0, jewel_effect.length - 13)] =
            Number(
              jewel_effect.slice(
                jewel_effect.length - 9,
                jewel_effect.length - 4
              )
            ) / 100;
      }
    }
    console.log("Success Crawling Jewel!");
    return jewel;
  } catch (err) {
    console.log(err);
  }
};
