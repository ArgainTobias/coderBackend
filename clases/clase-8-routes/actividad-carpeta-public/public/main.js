const usuarios = document.querySelector('#usersForm');
const mascotas = document.querySelector('#petsForm');

const handleSubmit = (e, form, route) => {
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
    .then((res)=>console.log(res))
    .catch(err => console.log(err))
}

usuarios.addEventListener('submit', (e) => handleSubmit(e, e.target, '/personas'));
mascotas.addEventListener('submit', (e) => handleSubmit(e, e.target, '/mascotas'));