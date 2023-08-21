"use strict";
var fs_1 = require("fs");
module.exports = function filterFiles(dirName, ext, callback) {
    (0, fs_1.readdir)(dirName, function (err, data) {
        if (err) {
            callback(err, []);
        }
        else {
            callback(null, data.filter(function (file) { return file.endsWith("." + ext); }));
        }
    });
};
