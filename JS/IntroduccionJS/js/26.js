//Clases
class Producto {
    //constructor 
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formtearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
    }

    preciosProducto() {
        return `El precio del producto ${this.nombre} es: ${this.precio}`
    }
}
//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearLibro() {
        return `${super.formtearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const producto = new Producto('Monitor de 40"', 800);
const producto2 = new Producto('Laptop', 300);
const libro1 = new Libro("JS la revolucion", 120, "12121414121512");

console.log(producto);
console.log(producto2);
console.log(libro1);
console.log(producto.preciosProducto());
console.log(libro1.formatearLibro());