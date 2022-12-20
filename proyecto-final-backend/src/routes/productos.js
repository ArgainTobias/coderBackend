const express = require("express");
const router = express.Router();

let administrador = true;

const productos = [
  {
    nombre: "Auricular redragon",
    precio: 7000,
    id: 1,
    descripcion: "",
    codigo: "",
    foto: "",
    stock: 4,
    timestamp: Date.now()
  },
  {
    nombre: "Teclado redragon",
    precio: 3000,
    id: 2,
    descripcion: "",
    codigo: "",
    foto: "",
    stock: 4,
    timestamp: Date.now()
  },
  {
    nombre: "Mouse Genius",
    precio: 1000,
    id: 3,
    descripcion: "",
    codigo: "",
    foto: "",
    stock: 4,
    timestamp: Date.now()
  },
];

const middlewareArgain = (req, res, next) => {
    const {nombre, precio, stock, descripcion, codigo, foto} = req.body;
    if (!isNaN(nombre) || !isNaN(descripcion) || !isNaN(foto) || isNaN(precio) || isNaN(stock) || !codigo) return res.status(400).send({ error: "Los datos ingresados son inválidos" });
    next();
}

router.get("/:id?", (req, res) => {
  const { id } = req.params;
  if (id) {
    let producto = productos.find((prod) => prod.id === parseInt(id));
    producto
      ? res.send(producto)
      : res.send({ err: "No se ha encontrado ningun producto con ese id" });
  } else {
    res.send(productos);
  }
});

router.post("/", middlewareArgain, (req, res) => {
    if(administrador){
        let producto = req.body;
        let esta = productos.some((prod) => prod.nombre === producto.nombre);
        if (!esta) {
          producto.id = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
          producto.timestamp = Date.now();
          producto.precio = parseInt(producto.precio);
          producto.stock = parseInt(producto.stock);
          productos.push(producto);
          res.send(productos);
        } else res.send({ message: "Ese producto ya se encuentra disponible" });
    }else{
        res
        .status(400)
        .send({error:"ruta: /api/productos metodo: POST no autorizado"});
    }
});

router.put("/:id", middlewareArgain, (req, res) => {
    if(administrador){
        let producto = productos.find((p) => p.id === parseInt(req.params.id));
        if (producto) {
          let nuevoProducto = req.body;
          nuevoProducto.precio = parseInt(nuevoProducto.precio);
          nuevoProducto.id = parseInt(nuevoProducto.id);
          nuevoProducto.stock = parseInt(nuevoProducto.stock);
          let indice = productos.indexOf(producto);
          productos.splice(indice, 1, nuevoProducto);
          res.send(productos);
        } else
          res
            .status(400)
            .send({ message: "No se ha encontrado un producto con ese id" });
    }else{
        res
        .status(400)
        .send({error:"ruta: /api/productos metodo: PUT no autorizado"});
    }
});

router.delete("/:id", (req, res) => {
    if(administrador){
        let producto = productos.find((p) => p.id === parseInt(req.params.id));
        if (producto) {
          let indice = productos.indexOf(producto);
          productos.splice(indice, 1);
          res.send({ message: "El producto ha sido eliminado con éxito", productos });
        } else
          res
            .status(400)
            .send({ message: "No se ha encontrado un producto con ese id" });
    }else{
        res
        .status(400)
        .send({error:"ruta: /api/productos metodo: DELETE no autorizado"});
    }
});

module.exports = router;
