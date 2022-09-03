const axios = require("axios");
const cheerio = require("cheerio");

exports.getLevel = async (url, id) => {
  try {
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    const level = $(
      `#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition > span:nth-child(2)`
    ).text();
    return level;
  } catch (err) {
    console.log(err);
  }
};
