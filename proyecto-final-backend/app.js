const express = require('express');
const productosRouter = require('./src/routes/productos');
const carritoRouter = require('./src/routes/carrito');

const app = express();

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`));


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/carrito', carritoRouter);
app.use('/api/productos', productosRouter);
