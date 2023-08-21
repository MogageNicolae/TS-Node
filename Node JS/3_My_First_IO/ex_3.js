"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
console.log((0, fs_1.readFileSync)(process.argv[2]).toString().split('\n').length - 1);
