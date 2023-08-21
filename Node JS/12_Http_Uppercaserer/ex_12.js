"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
function callback(request, response) {
    if (request.method !== 'POST')
        return response.end('send me a POST\n');
    var str = '';
    request.on('data', function (chunk) {
        str += chunk.toString().toUpperCase();
    });
    request.on('end', function () {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.write(str);
        response.end();
    });
}
(0, http_1.createServer)(callback).listen(process.argv[2]);
