var express = require("express");
var router = express.Router();

require("dotenv").config();

var crawlingData = require("../module/index");

var warrior = require("../classData/class/warrior/index");

const url = process.env.CRAW_URL;

// 클래스 구분하여 모듈 호출
const divideClass = (data) => {
  switch (data["Class"]) {
    case "버서커":
      const berserker = warrior.getBerserker(data);
      console.log("버서커");
      return berserker;
    case "디스트로이어":
      const destroyer = warrior.getDestryoter(data);
      return destroyer;
    case "워로드":
      const warlord = warrior.getWarlord(data);
      return warlord;
    case "블레이드":
      const test = warrior.getBerserker(data);
      console.log(test);
      return;
    default:
      break;
  }
  return;
};

const getData = async (url, id) => {
  try {
    const data = await crawlingData.getCrawlingData(url, id);
    divideClass(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

router.get("/", async (req, res, next) => {
  try {
    console.log("Responsing to Client...");
    const userData = await getData(url, req.query.id);
    res.send(userData);
    console.log("Response Success!");
  } catch (err) {
    console.log(err);
    res.send("Response Error!");
  }
});

module.exports = router;
