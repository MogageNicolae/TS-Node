"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function callback(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        var ext_1 = process.argv[3];
        data.forEach(function (file) {
            if (file.endsWith("." + ext_1)) {
                console.log(file);
            }
        });
    }
}
(0, fs_1.readdir)(process.argv[2], callback);
