const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getClass = async (url, id) => {
  try {
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    const characterClass = $(`${process.env.CRAW_CLASS}`).attr("alt");
    console.log("Success Crawling Class!");
    return characterClass;
  } catch (err) {
    console.log(err);
  }
};
