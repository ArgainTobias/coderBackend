const express = require("express");
const handlebars = require('express-handlebars');
const app = express();
const server = app.listen(8080, () => {
  console.log("Server Up");
});

app.engine('handlebars', handlebars.engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

let users = [
    {
        fname:"Tobias", lname:"Argain", age:21
    },{
        fname:"Simon", lname:"Argain", age:29
    },{
        fname:"Azul", lname:"Perez", age:21
    }
]

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/user', (req, res) => {
    res.render('users',{
        name:"Tobi"
    })
})

app.get('/users', (req, res) => {
    res.render('users',{users})
})
