import {Contenedor} from './contenedor.js';
const archivo = './productos.json';
const archivito = new Contenedor(archivo);
// const express = require('express');
import express from 'express'
const app = express();

const server = app.listen(8080, () => console.log("Server Up!"));


app.get("/", (request, response) => {
    response.send("Hola mundo");
});

app.get("/productos", (request, response) => {
    response.send(archivito.getAll());
});

app.get("/productoRandom", (request, response) => {
    let numeroRandom = Math.round(Math.random()*2+1);
    let productoRandom = archivito.getById(numeroRandom);
    response.send(productoRandom);
});