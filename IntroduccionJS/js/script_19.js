/***POO en JS***/
/***Clases***/
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    }

    getPrecio() {
        return `El precio del producto ${this.nombre} es: ${this.precio}`
    }

}

const producto1 = new Producto('monitor', 400);
const producto2 = new Producto('laptop', 800);
console.log(producto1);
console.log(producto2);


console.log(producto1.formatearProducto());
console.log(producto2.getPrecio());

/***Herencia en JS***/

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }
}
const libro1 = new Libro('JS', 120, '102030');
console.log(libro1.formatearProducto());

