const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getBasicStat = async (url, id) => {
  try {
    const basic_Stat = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    const offense_power = $(process.env.CRAW_BASIC_STAT).text();

    basic_Stat["공격력"] = offense_power;

    return basic_Stat;
  } catch (err) {
    console.log(err);
  }
};
