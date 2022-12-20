const express = require("express");
const router = express.Router();

const mascotas = [
  { nombre: "Gordo", raza: "Caniche Mini Toy", edad: 8 },
  { nombre: "Teo", raza: "Caniche Toy", edad: 12 },
  { nombre: "Sushi", raza: "Britanico Bicolor", edad: 2 },
];

router.get("/", (req, res) => {
  res.send(mascotas);
});

router.post("/", (req, res) => {
  const { nombre, raza, edad } = req.body;

  if (!isNaN(nombre) || !isNaN(raza) || isNaN(edad)) {
    res.send({ error: "Los datos ingresados son inválidos" });
  } else {
    mascotas.push({ nombre, raza, edad });
    res.send(mascotas);
  }
});

module.exports = router;
