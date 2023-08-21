import filterFiles = require("./ex_6_1");

function callback(err: Error | null, data: string[]) {
    if (err) {
        console.log(err);
    } else {
        data.forEach((file) => {
            console.log(file);
        });
    }
}

filterFiles(process.argv[2], process.argv[3], callback);
