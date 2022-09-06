const axios = require("axios");
const cheerio = require("cheerio");

exports.getEquip = async (url, id) => {
  try {
    let eqip = [];
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    return;
  } catch (err) {
    console.log(err);
  }
};
