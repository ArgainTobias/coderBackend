const express = require('express');
const mascotasRouter = require('./routes/mascotas');
const personasRouter = require('./routes/personas');

const app = express();

const server = app.listen(8080, ()=>{console.log('Server up!')});

app.get('/', (req, res)=>{res.send('Hola mundo')})

app.use(express.json());
app.use('/mascotas', mascotasRouter);
app.use('/personas', personasRouter);
app.use('/static', express.static('public'));
