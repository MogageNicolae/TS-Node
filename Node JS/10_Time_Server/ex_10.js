"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = require("net");
function listener(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    var hours = date.getHours().toString().padStart(2, "0");
    var minutes = date.getMinutes().toString().padStart(2, "0");
    var data = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";
    // socket.write(data);
    socket.end(data);
}
var server = (0, net_1.createServer)(listener);
server.listen(process.argv[2]);
