const options = require('./options/mysql.config');
const knex = require('knex');

const database = knex(options);

database.from('cars').where('name', 'Citroen').update({price:28000})
    .then(() => console.log('table updated!'))
    .catch(err => console.log(err))
    .finally(()=>database.destroy()); 