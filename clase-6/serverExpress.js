const express = require('express');
const app = express();

const server = app.listen(8080, () => console.log('Server Up!'));

app.get('/', (request, response) => {
    //Lo que se debe hacer cuando llega una solicitud GET a la ruta '/'
    response.send('Hola mundo!');
})

app.get('/alumnos', (request, response) => {
    //Lo que se debe hacer cuando llega una solicitud GET a la ruta '/'
    response.send('Hola Alumnos!');
})

app.get('/user', (request, response) => {
    //Lo que se debe hacer cuando llega una solicitud GET a la ruta '/'
    response.send({
        nombre:"Tobías",
        apellido:"Argaín",
        edad:22,
        mail:"tobiasaargain@gmail.com"
    });
})