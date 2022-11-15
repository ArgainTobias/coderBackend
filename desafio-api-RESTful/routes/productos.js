const express = require("express");
const router = express.Router();

const productos = [
  { nombre: "Monitor", precio: 30000, id: 1 },
  { nombre: "Teclado", precio: 7000, id: 2 },
  { nombre: "Mouse", precio: 3500, id: 3 },
];

router.get("/", (req, res) => {
  res.send(productos);
});

router.get("/:id", (req, res) => {
  let producto = productos.find((p) => p.id === parseInt(req.params.id));
  if (producto) res.send(producto);
  else
    res
      .status(400)
      .send({ message: "no se ha encontrado un producto con ese id" });
});

router.post("/", (req, res) => {
  let producto = req.body;
  producto.id = productos[productos.length - 1].id + 1;
  productos.push(producto);
  res.send({ productos });
});

router.put("/:id", (req, res) => {
  let producto = productos.find((p) => p.id === parseInt(req.params.id));
  if (producto) {
    let nuevoProducto = req.body;
    let indice = productos.indexOf(producto);
    productos.splice(indice, 1, nuevoProducto);
    res.send(productos);
  } else
    res
      .status(400)
      .send({ message: "no se ha encontrado un producto con ese id" });
});

router.delete("/:id", (req, res) => {
  let producto = productos.find((p) => p.id === parseInt(req.params.id));
  if (producto){
    let indice = productos.indexOf(producto);
    productos.splice(indice, 1);
    res.send(productos);
  }
  else
    res
      .status(400)
      .send({ message: "no se ha encontrado un producto con ese id" });
});

module.exports = router;
