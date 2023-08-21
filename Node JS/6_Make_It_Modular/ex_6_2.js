"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filterFiles = require("./ex_6_1");
function callback(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        data.forEach(function (file) {
            console.log(file);
        });
    }
}
filterFiles(process.argv[2], process.argv[3], callback);
