const express = require("express");
const router = express.Router();

const personas = [
  { nombre: "Tobias", apellido: "Argain", edad: 21 },
  { nombre: "Azul", apellido: "Perez", edad: 21 },
  { nombre: "Simon", apellido: "Argain", edad: 29 },
];

const middlewareCoder = (req, res, next) => {
  const { nombre, apellido } = req.body;
  if (!isNaN(nombre) || !isNaN(apellido)) return res.status(400).send({ error: "Los datos ingresados son inválidos" });
  next()
};

router.get("/", (req, res) => {
  res.send(personas);
});

router.post("/",middlewareCoder, (req, res) => {
  const { nombre, apellido, edad } = req.body;
  personas.push({ nombre, apellido, edad });
  res.send(personas);
});

module.exports = router;
