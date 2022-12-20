const formularioObtener = document.querySelector('#formProductsObtener');
const formularioAgregar = document.querySelector('#formProductsAgregar');
const formularioActualizar = document.querySelector('#formProductsActualizar');
const formularioEliminar = document.querySelector('#formProductsEliminar');

const handleSubmitObtener = (e, route) => {
    e.preventDefault();
    fetch(route)
    .then((res) => res.json())
    .then((producto)=>{        
        producto.id ? alert(`${producto.nombre} - $${producto.precio}`) : alert(producto.message);
    })
    .catch(err => console.log(err))
}

const handleSubmitAgregar = (e, form, route) => {
    e.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    fetch(route, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((productos)=>{
        let esArray = Array.isArray(productos) 
        if(esArray){
            let producto = productos.find((prod) => prod.nombre === obj.nombre && prod.precio === parseInt(obj.precio));
            alert(`${producto.nombre} - $${producto.precio} id: ${producto.id}`)
        } else alert(productos.message);
    })
    .catch(err => console.log(err))
}

const handleSubmitActualizar = (e, form, route) => {
    e.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    fetch(route, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
            "Content-type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((productos)=>{
        console.log(productos)
        let esArray = Array.isArray(productos) 
        if(esArray){
            let producto = productos.find((prod) => prod.nombre === obj.nombre && prod.precio === parseInt(obj.precio));
            alert(`${producto.nombre} - $${producto.precio} id: ${producto.id}`)
        } else alert(productos.message);
    })
    .catch(err => console.log(err))
}

const handleSubmitEliminar = (e, form, route) => {
    e.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    fetch(route, {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: {
            "Content-type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((productos)=>{        
        Array.isArray(productos) ? alert(productos[0].message) : alert(productos.message);
    })
    .catch(err => console.log(err))
}

formularioObtener.addEventListener('submit', (e) => {handleSubmitObtener(e, `/api/productos/${e.target.id.value}`)});
formularioAgregar.addEventListener('submit', (e)=> {handleSubmitAgregar(e, e.target, '/api/productos')});
formularioActualizar.addEventListener('submit', (e)=> {handleSubmitActualizar(e, e.target, `/api/productos/${e.target.id.value}`)});
formularioEliminar.addEventListener('submit', (e)=> {handleSubmitEliminar(e, e.target, `/api/productos/${e.target.id.value}`)});
