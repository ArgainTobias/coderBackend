class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas);
  }

  getFullName() {
    `${this.nombre}` + ` ${this.apellido}`;
  }

  addMascota = (mascota) => {
    this.mascotas.push(mascota);
  };

  countMascotas = () => this.mascotas.length;

  addBook = (nombre, autor) => {
    this.libros.push({ nombre, autor });
  };
  getBooksNames() {
    this.libros.map((libro) => libro.nombre);
}
}
