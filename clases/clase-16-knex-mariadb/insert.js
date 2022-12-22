const options = require("./options/mysql.config");
const knex = require("knex");

const database = knex(options);

let cars = [
  { name: "Volvo", price: 15000 },
  { name: "Audio", price: 35000 },
  { name: "Citroen", price: 25000 },
  { name: "Hummer", price: 38000 },
];

database("cars")
  .insert(cars)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => database.destroy());
