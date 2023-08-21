"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
function callback(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    (0, fs_1.createReadStream)(process.argv[3]).pipe(response);
}
(0, http_1.createServer)(callback).listen(process.argv[2]);
