const options = require('./options/mysql.config');
const knex = require('knex');

const database = knex(options);

database.schema.createTable('cars', table => {
    table.increments('id');
    table.string('name', 20);
    table.integer('price');
}) //createTable es una PROMESA
    .then(() => console.log('table created!'))
    .catch(err => console.log(err))
    .finally(()=>database.destroy()); //destruye la sesion NO la base de datos (para que no quede ejecutandose y me devuelva el control de la consola)