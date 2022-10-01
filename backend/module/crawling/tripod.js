const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getTripod = async (url, id) => {
  try {
    const tripod = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    for (i = 1; i <= 8; i++) {
      const skillName = $(
        `${process.env.CRAW_SKILL_NAME_PREV}(${i})${process.env.CRAW_SKILL_NAME_AFTER}`
      ).text();

      console.log(test, "트포");
    }

    return;
  } catch (err) {
    console.log(err);
  }
};
