const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config();

exports.getExpeditionServer = async (url, id) => {
  try {
    const expedition_server = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    const server_expedition_num = $(process.env.CRAW_SERVER_EXPEDITION).length;

    for (i = 3; i <= server_expedition_num * 2 + 1; i += 2) {
      const server_char_num = $(
        `${process.env.CRAW_SERVER_CHAR}(${i}) > li`
      ).length;
      const singleServer = [];
      for (j = 1; j <= server_char_num; j++) {
        if (
          id !==
          $(
            `${process.env.CRAW_SERVER_CHAR}(${i}) > li:nth-child(${j}) > span > button > span`
          ).text()
        ) {
          singleServer.push(
            $(
              `${process.env.CRAW_SERVER_CHAR}(${i}) > li:nth-child(${j}) > span > button > span`
            ).text()
          );
        } else continue;
      }
      expedition_server[
        $(`${process.env.CRAW_SERVER_EXPEDITION}:nth-child(${i - 1})`)
          .text()
          .slice(1)
      ] = singleServer;
    }

    console.log("Success Crawling Expedition!");
    return expedition_server;
  } catch (err) {
    console.log(err);
  }
};
