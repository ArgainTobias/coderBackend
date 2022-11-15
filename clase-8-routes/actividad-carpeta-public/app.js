const express = require('express');
const mascotasRouter = require('./routes/mascotas');
const personasRouter = require('./routes/personas');

const app = express();

const server = app.listen(8080, ()=>{console.log('Server up!')});

app.use(express.json());
app.use('/mascotas', mascotasRouter);
app.use('/personas', personasRouter);
app.use('/', express.static('public'));