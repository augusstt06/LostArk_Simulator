const axios = require("axios");
const cheerio = require("cheerio");

exports.getExpeditionServer = async (url, id) => {
  try {
    let expedition_server = {};
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);
    const expedition_server_num = $(`#expand-character-list > strong`).length;

    for (i = 3; i <= expedition_server_num * 2 + 1; i += 2) {
      const char_num = $(
        `#expand-character-list > ul:nth-child(${i}) > li`
      ).length;
      let singleServer = [];
      console.log(char_num, "서버 캐릭갯수");
      for (j = 1; j <= char_num; j++) {
        if (
          id !==
          $(
            `#expand-character-list > ul:nth-child(${i}) > li:nth-child(${j}) > span > button > span`
          ).text()
        ) {
          singleServer.push(
            $(
              `#expand-character-list > ul:nth-child(${i}) > li:nth-child(${j}) > span > button > span`
            ).text()
          );
          console.log(
            $(
              `#expand-character-list > ul:nth-child(${i}) > li:nth-child(${j}) > span > button > span`
            ).text(),
            "더하는거"
          );
        } else continue;
      }
      expedition_server[
        $(`#expand-character-list > strong:nth-child(${i - 1})`)
          .text()
          .slice(1)
      ] = singleServer;
    }
    return expedition_server;
  } catch (err) {
    console.log(err);
  }
};
