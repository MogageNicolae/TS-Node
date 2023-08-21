import {readFile} from "fs";

function callback(err, data) {
    if (err != null) {
        return;
    }
    console.log(data.toString().split('\n').length - 1);
}

readFile(process.argv[2], callback);