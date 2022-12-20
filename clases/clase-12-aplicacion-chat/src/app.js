const express = require("express");
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 8080; // el puerto que nos van a asignar cuando lo deployee ya va a estar guardado en esa variable de entorno
const server = app.listen(PORT, () => console.log(`server up on port ${PORT}`));
const io = new Server(server);

let log = [];

app.use(express.static("./src/public"));

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    log.push(data);
    io.emit("log", log);
  });
  socket.on("registered", (data) => {
    socket.broadcast.emit("newUser", data);
    socket.emit("log", log);
  });
});
