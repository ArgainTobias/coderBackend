const express = require("express");
const router = express.Router();

const carritos = [
  {
    id: 1,
    timestamp: Date.now(),
    productos: [
      {
        nombre: "Auricular redragon",
        precio: 7000,
        id: 1,
        descripcion: "",
        foto: "",
        timestamp: Date.now(),
        cantidad: 1,
      },
    ],
  },
];

const middlewareArgain = (req, res, next) => {
  const {nombre, precio, stock, descripcion, codigo, foto} = req.body;
  if (!isNaN(nombre) || !isNaN(descripcion) || !isNaN(foto) || isNaN(precio) || isNaN(stock) || !codigo) return res.status(400).send({ error: "Los datos ingresados son inválidos" });
  next();
}

router.post("/", (req, res) => {
  let carrito = req.body;
  carrito.id = carritos.length > 0 ? carritos[carritos.length - 1].id + 1 : 1;
  carrito.productos = [];
  carritos.push(carrito);
  res.send(carritos);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if(!isNaN(id)){
    let carritoAEliminar = carritos.find(
      (carrito) => carrito.id === parseInt(id)
    );
    if (carritoAEliminar) {
      carritoAEliminar.productos.length = 0;
      let indice = carritos.indexOf(carritoAEliminar);
      carritos.splice(indice, 1);
      res.send({
        message: "El carrito ha sido eliminado correctamente",
        carritos,
      });
    } else {
      res.send({ error: "No se ha encontrado un carrito con ese id" });
    }
  }else{
    res.send({error:"El id ingresado debe ser numérico"})
  }
});

router.get("/:id/productos", (req, res) => {
  const { id } = req.params;
  if(!isNaN(id)){
    let carritoAMostrar = carritos.find((carrito) => carrito.id === parseInt(id));
    if(carritoAMostrar){
      res.send(carritoAMostrar.productos);
    }else{
      res.status(400).send({error:"No se ha encontrado un carrito con ese id"})
    }
  }else{
    res.send({error:"El id ingresado debe ser numérico"});
  }
});

router.post("/:id/productos", middlewareArgain, (req, res) => {
  const { id } = req.params;
  const producto = req.body;
  let carritoAMostrar = carritos.find((carrito) => carrito.id === parseInt(id));
  let {productos} = carritoAMostrar
  let productoAAgregar = productos.find(prod => prod.id === producto.id);
  if(productoAAgregar){
    let indiceProd = productos.indexOf(productoAAgregar);
    productos[indiceProd].cantidad++
  }else{
    carritoAMostrar.productos.push(producto);
  }
  res.send(carritoAMostrar.productos);
});

router.delete("/:id/productos/:id_prod", (req, res) => {
  const { id, id_prod } = req.params;
  let carritoAEliminar = carritos.find(
    (carrito) => carrito.id === parseInt(id)
  );
  let { productos } = carritoAEliminar;
  let productoAEliminar = productos.find(
    (prod) => prod.id === parseInt(id_prod)
  );
  let indiceProd = productos.indexOf(productoAEliminar);
  productos.splice(indiceProd, 1);
  res.send({
    message: "El producto ha sido eliminado correctamente",
    carrito: carritoAEliminar,
  });
});

module.exports = router;
