import {get} from "http";

let callback = (response): void => {
    let str: string = '';

    response.on('data', (chunk: string): void => {
        str += chunk;
    });

    response.on('end', (): void => {
        console.log(str.length + '\n' + str);
    });
}

get(process.argv[2], callback);