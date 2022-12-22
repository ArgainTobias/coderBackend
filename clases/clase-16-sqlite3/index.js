const options = require("./options/sqlite3.config");
const knex = require("knex");

const database = knex(options);

let cars = [
  { name: "Volvo", price: 15000 },
  { name: "Audio", price: 35000 },
  { name: "Citroen", price: 25000 },
  { name: "Hummer", price: 38000 },
];

database.schema
  .createTable("cars", (table) => {
    table.increments("id");
    table.string("name", 20);
    table.integer("price");
  }) //createTable es una PROMESA
  .then(() => console.log("table created!"))
  .catch((err) => console.log(err));

database("cars")
  .insert(cars)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//GET ALL (select * from)
database
  .from("cars")
  .select("*")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

database
  .from("cars")
  .where("name", "Citroen")
  .update({ price: 28000 })
  .then(() => console.log("table updated!"))
  .catch((err) => console.log(err));

database
  .from("cars")
  .where("price", "<", 25000)
  .del()
  .then(() => console.log("Row(s) deleted!"))
  .catch((err) => console.log(err))
  .finally(() => database.destroy());
