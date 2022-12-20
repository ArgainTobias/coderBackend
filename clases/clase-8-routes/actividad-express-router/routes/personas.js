const express = require("express");
const router = express.Router();

const personas = [
  { nombre: "Tobias", apellido: "Argain", edad: 21 },
  { nombre: "Azul", apellido: "Perez", edad: 21 },
  { nombre: "Simon", apellido: "Argain", edad: 29 },
];

router.get("/", (req, res) => {
  res.send(personas);
});

router.post("/", (req, res) => {
  const { nombre, apellido, edad } = req.body;

  if (!isNaN(nombre) || !isNaN(apellido) || isNaN(edad)) {
    res.send({ error: "Los datos ingresados son inválidos" });
  } else {
    personas.push({ nombre, apellido, edad });
    res.send(personas);
  }
});

module.exports = router;
