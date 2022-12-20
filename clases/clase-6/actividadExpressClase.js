const express = require('express');
const app = express();
const date = new Date();
let visitas = 0;

const server = app.listen(8080, () => console.log('Server Up'));

app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Bienvenidos al servidos express</h1>');
})

app.get('/visitas', (request, response) => {
    visitas++;
    response.send(`La cantidad de visitas es ${visitas}`);
})

app.get('/fyh', (request, response) => {
    let fechaYHora = date;
    response.send({
        fyh: fechaYHora,
    });
})
