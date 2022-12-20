const express = require('express');
const multer = require('multer');
const app = express();

const rutaProductos = require('./routes/productos');

const server = app.listen(8080, ()=>{console.log('Server up')});

app.use(express.json())
app.use('/api/productos', rutaProductos);
app.use(express.static('public'))