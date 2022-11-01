const http = require('http');
const date = new Date();

const server = http.createServer((request, response) => {
    // console.log(request);
    const horaActual = date.getHours();
    let mensaje;
    if(6<=horaActual && horaActual<=12){
        mensaje = 'Buenos días';
    }else if(13<=horaActual && horaActual <= 19){
        mensaje = 'Buenas tardes';
    }else{
        mensaje = 'Buenas noches';
    }
    console.log('alguien me hizo una petición');
    response.end(mensaje);
})

const connectedServer = server.listen(8080, () => {
    console.log('Server Up!');
})