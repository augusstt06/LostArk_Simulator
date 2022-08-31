"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("HEllo");
});
app.listen(port, function () {
    console.log("Connect Express with Typescript on ".concat(port));
});
//# sourceMappingURL=app.js.map