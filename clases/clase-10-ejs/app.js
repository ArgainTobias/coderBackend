const express = require("express");
const app = express();

const server = app.listen(8080, () => {
  console.log("Server Up");
});

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let fakeData = [
  { fname: "Tobias", lname: "Argain", age: 21 },
  { fname: "Simon", lname: "Argain" },
  { fname: "Azul", lname: "Perez", age: 21 },
];

let users = [];

app.get("/", (req, res) => {
  res.render("home", {
    alumnos: fakeData,
  });
});

app.get("/actividad", (req, res) => {
  res.render("users", {
    users,
  });
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.redirect("/actividad");
});
