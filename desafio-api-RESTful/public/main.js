const formularioObtener = document.querySelector('#formProductsObtener');
const formularioAgregar = document.querySelector('#formProductsAgregar');
const formularioActualizar = document.querySelector('#formProductsActualizar');
const formularioEliminar = document.querySelector('#formProductsEliminar');

const handleSubmit = (e, form, route) => {
    e.preventDefault();
    const id = e.target.id.value;
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    fetch(route)
    .then((res) => res.json())
    .then((productos)=>{
        let producto = productos.find(prod => prod.id === parseInt(id));
        alert(`${producto.nombre} - $${producto.precio}`);
    })
    .catch(err => console.log(err))
}

formularioObtener.addEventListener('submit', (e) => {handleSubmit(e, e.target, '/api/productos')});