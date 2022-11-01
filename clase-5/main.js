// let obj = {};
// let i = 0;
// for(i; i<=10000;i++){
//     let numero = Math.floor(Math.random()*20+1);
//     if(obj[numero]){
//         obj[numero]++
//     }else{
//         obj[numero]=1
//     }
// }

// console.log(obj);

//**************************************

const productos = [
    {id:1, nombre:"Escuadra", precio:323.45},
    {id:2, nombre:"Calculador", precio:234.56},
    {id:3, nombre:"Globo Terraqueo", precio:45.67},
    {id:4, nombre:"Paleta Pintura", precio:456.78},
    {id:5, nombre:"Reloj", precio:67.89},
    {id:6, nombre:"Agenda", precio:78.90}
];

const nombres = productos.map((prod)=>prod.nombre).join(', ');
const precioTotal = productos.reduce((acc, p) => acc + p.precio, 0);
const precioPromedio = precioTotal / productos.length;
const menorPrecio = productos.map((prod) => prod.precio).sort((a, b)=>a - b)[0];
const mayorPrecio = productos.map((prod) => prod.precio).sort((a, b)=>b - a)[0];

console.log(nombres);
console.log(Math.floor(precioTotal));
console.log(Math.floor(precioPromedio));
console.log(menorPrecio);
console.log(mayorPrecio);
