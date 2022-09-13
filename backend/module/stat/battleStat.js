const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getBattleStat = async (url, id) => {
  try {
    const battle_Stat = {};
    const res = await axios.get(encodeURI(url + `${id}`));
  } catch (err) {
    console.log(err);
  }
};
