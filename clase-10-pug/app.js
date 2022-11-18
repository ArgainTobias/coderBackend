const express = require("express");
const app = express();

const server = app.listen(8080, () => {
  console.log("Server Up");
});

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "Clase 10 de backend",
  });
});

app.get("/datos", (req, res) => {
  res.render("progress",{
    min: req.query.min,
    max: req.query.max,
    value: req.query.value,
    titulo:'<i>Medidor con Pug</i>'
  });
});
