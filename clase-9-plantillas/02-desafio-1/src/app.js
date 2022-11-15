const express = require('express');
const app = express();

const server = app.listen(8080, () => {console.log('Server up')});

app.use(express.static('../public'));