var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  console.log("제발");
  res.send("TEST CONNECT");
});

module.exports = router;
