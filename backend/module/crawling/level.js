const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getLevel = async (url, id) => {
  try {
    const level = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    const itemlevel = $(process.env.CRAW_ITEM_LEVEL).text();
    const battelLevel = $(process.env.CRAW_BATTLE_LEVEL).text();
    const expeditionLevel = $(process.env.CRAW_EXPEDITION_LEVEL).text();

    level["아이템 레벨"] = itemlevel;
    level["전투 레벨"] = battelLevel;
    level["원정대 레벨"] = expeditionLevel;

    console.log("Success Crawling Level!");
    return level;
  } catch (err) {
    console.log(err);
  }
};
