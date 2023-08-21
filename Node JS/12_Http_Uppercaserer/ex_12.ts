import {createServer} from "http";

function callback(request, response) {
    if (request.method !== 'POST') return response.end('send me a POST\n');
    let str: string = '';
    request.on('data',(chunk: object): void => {
        str += chunk.toString().toUpperCase();
    });
    request.on('end', (): void => {
        response.writeHead(200, {'content-type': 'text/plain'});
        response.write(str);
        response.end();
    });

    // request.pipe(map(function (chunk) {
    //     return chunk.toString().toUpperCase()
    // })).pipe(response)
}

createServer(callback).listen(process.argv[2]);