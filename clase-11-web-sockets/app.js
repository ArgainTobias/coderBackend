const express = require("express");
const { Server } = require("socket.io");
const app = express();

const server = app.listen(8080, () => console.log("server up"));

app.use(express.static("./public"));

const io = new Server(server); //creo el servidor de web sockets

let log = [];

/*
METODOS:
    socket.emit(): envíamelo SOLO a mí
    io.emit(): envíaselo a todos, incluyendome
    socket.broadcast.emit(): envíaselo a todos MENOS a mí

*/
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
  socket.broadcast.emit('alert');
  socket.emit('history', log); // para que cuando alguien se conecte ya reciba el historial de mensajes enviados previamente
  socket.on("message", (data) => {
    log.push({userId: socket.id, message: data});
    io.emit('history', log);
  });
}); // en cuanto alguien se conecta al servidor, ejecuta la funcion (programacion orientada a eventos)
