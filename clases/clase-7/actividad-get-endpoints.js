import express from 'express';
const app = express();
const frase = 'Hola mundo cómo están';

const server = app.listen(8080, () => console.log('Server Up'));

app.get('/api/frase', (req, res) => {
    res.send({frase});
})

app.get('/api/letras/:num', (req, res) => {
    if(req.params.num > frase.length || req.params.num <= 0) return res.status(400).send({error: 'Out of bound'});
    else if(isNaN(req.params.num)) return res.status(400).send({error: 'The parameter is not a number'});
    else return res.send({letra: frase[req.params.num-1]});
})

app.get('/api/palabras/:num', (req, res) => {
    const arrayPalabras = frase.split(' '); // => ['Hola', 'mundo', 'como', 'estan']
    if(req.params.num > arrayPalabras.length || req.params.num <= 0) return res.status(400).send({error: 'The parameter is out of bound'});
    else if(isNaN(req.params.num)) return res.status(400).send({error: 'The parameter is not a number'});
    else return res.send({palabra: arrayPalabras[req.params.num-1]});  
})