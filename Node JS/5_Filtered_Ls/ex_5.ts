import {readdir} from "fs";

function callback(err, data) {
    if (err) {
        console.log(err);
    } else {
        let ext = process.argv[3];
        data.forEach((file) => {
            if (file.endsWith("." + ext)) {
                console.log(file);
            }
        });
    }
}

readdir(process.argv[2], callback);