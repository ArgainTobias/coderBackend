const express = require('express');
const petsRouter = require('./routes/pets');
const usersRouter = require('./routes/users');

const app = express();

const server = app.listen(8080, ()=>{console.log('Server up!')});

app.use(express.static('public'));
app.use('/pets', petsRouter);
app.use('/users', usersRouter);