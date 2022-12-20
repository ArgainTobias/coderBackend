import express from "express";
const app = express();
let frase = "Frase inicial";

const servidor = app.listen(8080, () => console.log("Server Up"));

//middleware!
app.use(express.json()); // => preparo mi servidor para recibir JSON

app.get("/api/frase", (req, res) => res.send({ frase }));

app.get("/api/palabras/:pos", (req, res) => {
    const arrayPalabras = frase.split(' ');
    res.send({ buscada: arrayPalabras[req.params.pos-1]});
});

app.post('/api/palabras', (req, res) => {
    const {palabra} = req.body;
    frase = frase.concat(` ${palabra}`);
    const arrayPalabras = frase.split(' ');
    res.send({agregada: palabra, pos: arrayPalabras.indexOf(palabra)});
})

app.put('/api/palabras/:pos', (req, res) => {
    const {palabra} = req.body;
    const {pos} = req.params;
    const arrayPalabras = frase.split(' ');
    const anterior = arrayPalabras[pos-1];
    arrayPalabras[pos-1] = palabra;
    frase = arrayPalabras.join(' ');
    res.send({actualizada: palabra, anterior});
})

app.delete('/api/palabras/:pos', (req, res) => {
    const {pos} = req.params;
    const arrayPalabras = frase.split(' ');
    arrayPalabras.splice(pos-1, 1);
    frase = arrayPalabras.join(' ')
    res.send({frase})
})