import {createServer} from "http";
import {parse} from "url";

function callback(request, response) {
    if (request.method !== 'GET') return response.end('send me a GET\n');
    const requestUrl: any = parse(request.url, true);
    if (requestUrl.pathname === '/api/parsetime') {
        const date = new Date(requestUrl.query.iso);
        response.writeHead(200, {'content-type': 'application/json'});
        response.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }));
        response.end();
    }
    if (requestUrl.pathname === '/api/unixtime') {
        const date = new Date(requestUrl.query.iso);
        response.writeHead(200, {'content-type': 'application/json'});
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


createServer(callback).listen(process.argv[2]);