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

    level["Item_Level"] = itemlevel;
    level["Battle_Level"] = battelLevel;
    level["Expedition_Level"] = expeditionLevel;

    return level;
  } catch (err) {
    console.log(err);
  }
};
