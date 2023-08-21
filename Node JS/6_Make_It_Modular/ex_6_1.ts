import {readdir} from "fs";

export = function filterFiles(dirName: string, ext:string, callback: (err: Error | null, data: string[]) => void) {
    readdir(dirName, (err, data) => {
        if (err) {
            callback(err, []);
        } else {
            callback(null, data.filter((file) => file.endsWith("." + ext)));
        }
    });
}