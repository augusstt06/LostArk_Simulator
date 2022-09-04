const axios = require("axios");
const cheerio = require("cheerio");

exports.getLevel = async (url, id) => {
  try {
    const level = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    const itemlevel = $(
      `#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition > span:nth-child(2)`
    ).text();
    const battelLevel = $(
      `#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info > div.level-info__item > span:nth-child(2)`
    ).text();
    const expeditionLevel = $(
      `#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info > div.level-info__expedition > span:nth-child(2)`
    ).text();
    level["Item_Level"] = itemlevel;
    level["Battle_Level"] = battelLevel;
    level["Expedition_Level"] = expeditionLevel;
    return level;
  } catch (err) {
    console.log(err);
  }
};
