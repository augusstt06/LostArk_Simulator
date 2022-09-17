const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getBattleStat = async (url, id) => {
  try {
    const battle_Stat = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    for (i = 1; i <= 6; i++) {
      const battleStat_name = $(
        `${process.env.CRAW_BATTLE_STAT}(${i}) > span:nth-child(1)`
      ).text();
      const battleStat_num = $(
        `${process.env.CRAW_BATTLE_STAT}(${i}) > span:nth-child(2)`
      ).text();

      battle_Stat[battleStat_name] = battleStat_num;
    }

    return battle_Stat;
  } catch (err) {
    console.log(err);
  }
};
