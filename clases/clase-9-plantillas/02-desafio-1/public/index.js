const template = Handlebars.compile(`
    <ul>
        <li>{{nombre}}</li>
        <li>{{apellido}}</li>
        <li>{{edad}}</li>
        <li>{{email}}</li>
        <li>{{telefono}}</li>
    </ul>
`);

const html = template({
    nombre: 'Tobías',
    apellido: 'Argaín',
    edad: 22,
    email: 'tobiasaargain@gmail.com',
    telefono: 44640063
})

document.querySelector('#data').innerHTML = html;