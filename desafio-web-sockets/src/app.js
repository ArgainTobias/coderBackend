const express = require("express");
const { Server } = require("socket.io");
const handlebars = require("express-handlebars");

const productos = [];

const app = express();
const PORT = process.env.PORT || 8080; // el puerto que nos van a asignar cuando lo deployee ya va a estar guardado en esa variable de entorno
const server = app.listen(PORT, () => console.log(`server up on port ${PORT}`));
const io = new Server(server);

app.engine("handlebars", handlebars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let hay = productos.length > 0;
  res.render("form", { productos, hay });
});

app.post("/", (req, res) => {
  const { nombre, precio, img } = req.body;
  if (nombre.trim() !== "" && precio.trim() !== "" && img.trim() !== "") {
    productos.push(req.body);
  }
  res.redirect("/");
});

let log = [];

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