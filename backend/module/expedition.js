const axios = require("axios");
const cheerio = require("cheerio");

// 다른 서버캐릭터 확인해서 보여주기
exports.getExpedition = async (url, id) => {
  try {
    let expeditionArr = [];
    const res = await axios.get(encodeURI(url + `${id}`));
    const $ = cheerio.load(res.data);

    const expedition_num = $(
      `#expand-character-list > ul:nth-child(3) > li`
    ).length;

    for (i = 1; i <= expedition_num; i++) {
      if (
        id !==
        $(
          `#expand-character-list > ul:nth-child(3) > li:nth-child(${i}) > span > button > span`
        ).text()
      ) {
        expeditionArr.push(
          $(
            `#expand-character-list > ul:nth-child(3) > li:nth-child(${i}) > span > button > span`
          ).text()
        );
      } else {
        continue;
      }
    }
    return expeditionArr;
  } catch (err) {
    console.log(err);
  }
};
