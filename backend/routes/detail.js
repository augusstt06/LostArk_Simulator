var express = require("express");
var router = express.Router();

require("dotenv").config();

var crawlingData = require("../module/index");
var calculate = require("../module/calculate/index");
var berserker = require("../classData/class/warrior/berserker");
const url = process.env.CRAW_URL;

const getData = async (url, id) => {
  try {
    const data = await crawlingData.getCrawlingData(url, id);
    const test = berserker.getBerserker(data);
    await test;
    console.log(test);
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
