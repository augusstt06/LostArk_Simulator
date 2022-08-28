// import axios from "axios";
// import cheerio from "cheerio";
// require("axios");
// require("cheerio");
import axios from "axios";
import cheerio from "cheerio";

export const getHTML = async (keyword: string) => {
  keyword = encodeURI(keyword);
  try {
    return axios.get(`https://kin.naver.com/search/list.nhn?query=` + keyword);
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (keyword: string) => {
  const html = await getHTML(keyword);
  const $ = cheerio.load(html.data);

  const contentList = $("#container .basic1 li");
  const titles: string[] = [];

  contentList.each((idx: string, elem: string) => {
    titles.push($(elem).find("dl dt a").text());
  });

  titles.forEach((item) => console.log(item));
};
