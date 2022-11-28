/***POO en JS***/

//objeto literal
const producto = {
    nombre: 'tv',
    precio: 500
}
console.log(producto)

//objeto constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor', 500);
console.log(producto2);