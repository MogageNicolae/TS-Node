import {createServer, Socket} from "net";

function listener (socket: Socket) {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let hours = date.getHours().toString().padStart(2, "0")
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let data = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";
    // socket.write(data);
    socket.end(data);
}

let server = createServer(listener);
server.listen(process.argv[2]);