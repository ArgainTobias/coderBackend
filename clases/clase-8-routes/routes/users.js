const express = require('express');
const router = express.Router();

// '/' => '/users/'
router.get('/', (req, res) => {
    res.send('Hello Users!!!');
})

router.get('/:id', (req, res) => {
    let parametro = req.params.id;
    res.send(parametro);
})

module.exports = router;