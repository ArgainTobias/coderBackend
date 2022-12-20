import express from 'express';
const app = express();

const servidor = app.listen(8080, () => console.log('Server Up'));

app.get('/api/sumar/:num1/:num2', (req, res) => {
    res.send({
        num1: parseInt(req.params.num1),
        num2: parseInt(req.params.num2),
        suma: parseInt(req.params.num1) + parseInt(req.params.num2)
    })
})

app.get('/api/sumar', (req, res) => {
    res.send({
        num1: parseInt(req.query.num1),
        num2: parseInt(req.query.num2),
        suma: parseInt(req.query.num1) + parseInt(req.query.num2)
    })
})

app.get('/api/operacion/:num1:operacion:num2', (req, res) => {
    if(req.params.operacion === '+'){
        res.send({
            num1: parseInt(req.params.num1),
            num2: parseInt(req.params.num2),
            suma: parseInt(req.params.num1) + parseInt(req.params.num2)
        })
    }else if(req.params.operacion === '-'){
        res.send({
            num1: parseInt(req.params.num1),
            num2: parseInt(req.params.num2),
            suma: parseInt(req.params.num1) - parseInt(req.params.num2)
        })
    }
})