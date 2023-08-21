"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function callback(err, data) {
    if (err != null) {
        return;
    }
    console.log(data.toString().split('\n').length - 1);
}
(0, fs_1.readFile)(process.argv[2], callback);
