"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
function callback(request, response) {
    if (request.method !== 'GET')
        return response.end('send me a GET\n');
    if (request.url === '/api/parsetime') {
        var date = new Date(request.url.query.iso);
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }));
        response.end();
    }
    if (request.url.pathname === '/api/unixtime') {
        var date = new Date(request.url.query.iso);
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify({
            unixtime: date.getTime(),
        }));
        response.end();
    }
}
// http.createServer(function (req, res) {
//     const parsedUrl = new URL(req.url, 'http://example.com')
//     const time = new Date(parsedUrl.searchParams.get('iso'))
//     let result
//
//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }
//
//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
(0, http_1.createServer)(callback).listen(process.argv[2]);
