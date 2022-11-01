
const main = () => {
    const usuario = new Usuario('Tobías', 'Argaín', [], []);
    usuario.addBook('ESDLA', 'J.R.R Tolkien');
    usuario.addBook('El secreto de sus ojos', 'Eduardo Sacheri');
    usuario.addMascota('PERRO');
    usuario.addMascota('HAMSTER ');
    usuario.addMascota('GATO');
    console.log(usuario);
    console.log(usuario.getBooksNames());
    console.log(usuario.countMascotas());
    console.log(usuario.getFullName());
}

main();