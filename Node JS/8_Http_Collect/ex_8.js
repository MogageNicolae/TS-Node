"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var callback = function (response) {
    var str = '';
    response.on('data', function (chunk) {
        str += chunk;
    });
    response.on('end', function () {
        console.log(str.length + '\n' + str);
    });
};
(0, http_1.get)(process.argv[2], callback);
