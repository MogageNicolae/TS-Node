import {get} from "http";

let callback = (response): void => {
    let str: string = '';

    response.on('data', (chunk: string): void => {
        str += chunk;
    });

    response.on('end', (): void => {
        console.log(str);
    });
}

get(process.argv[2], callback);
get(process.argv[3], callback);
get(process.argv[4], callback);
//
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0
//
// function printResults () {
//     for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }
//
// function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }
//
//             results[index] = data.toString()
//             count++
//
//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }
//
// for (let i = 0; i < 3; i++) {
//     httpGet(i)
// }
