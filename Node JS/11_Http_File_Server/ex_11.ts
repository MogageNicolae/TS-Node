import {createServer} from "http";
import {createReadStream} from "fs";

function callback(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    createReadStream(process.argv[3]).pipe(response);
}

createServer(callback).listen(process.argv[2]);