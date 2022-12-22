const options = require('./options/mysql.config');
const knex = require('knex');

const database = knex(options);

//GET ALL (select * from)
database.from('cars').select('*')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    .finally(()=>database.destroy());


//FILTER (select * from where)
database.from('cars').select('*').where('price', '>', 30000)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    .finally(()=>database.destroy());



//GET by ID (select * from where id=)
database.from('cars').select('*').where('id', 2)
    .then(res=>console.log(JSON.parse(JSON.stringify(res)))) //para poder mostrarlo en la web y manipularlo con js
    .catch(err=>console.log(err))
    .finally(()=>database.destroy());

//ORDER
database.from('cars').select('price').orderBy('price') //por defecto es nombre ascendente
    .then(res=>console.log(JSON.parse(JSON.stringify(res)))) 
    .catch(err=>console.log(err))
    .finally(()=>database.destroy());