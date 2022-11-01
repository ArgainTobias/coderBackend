const fs = require('fs');
const archivo = './productos.json';

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    async save(prod){
        if(fs.existsSync(this.nombreArchivo)){
            let data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            let productos = JSON.parse(data);
            if(productos.length > 0){
                let id = productos[productos.length-1].id+1;
                prod.id = id;
                productos.push(prod);
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, 2));
                return prod.id;
            }else{
                prod.id = 1;
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([prod], null, 2));
                return prod.id;
            }
        }else{
            prod.id = 1;
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([prod], null, 2));
            return prod.id;
        }        
    }

    getById(prodId){
        if(fs.existsSync(this.nombreArchivo)){
            let data = fs.readFileSync(this.nombreArchivo, 'utf-8');
            let producto = JSON.parse(data).find((prod) => prod.id === prodId) || null;
            return producto
        }
    }

    getAll(){
        if(fs.existsSync(this.nombreArchivo)){
            let data = fs.readFileSync(this.nombreArchivo, 'utf-8');
            let productos = JSON.parse(data);
            return productos
        }
    }

    async deleteById(prodId){
        if(fs.existsSync(this.nombreArchivo)){
            let data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            let productos = JSON.parse(data);
            let productoAEliminar = productos.find((prod) => prod.id === prodId);
            let indice = productos.indexOf(productoAEliminar);
            productos.splice(indice, 1);
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, 2));
        }
    }

    async deleteAll(){
        if(fs.existsSync(this.nombreArchivo)){
            let data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            let productos = JSON.parse(data);
            productos.splice(0);
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, 2));
        }
    }
}

const archivito = new Contenedor(archivo);
// archivito.save({
//     title:"Auriculares",
//     price:8000
// });
// console.log(archivito.getById(2));
// console.log(archivito.getAll());
// archivito.deleteById(2);
// archivito.deleteAll();