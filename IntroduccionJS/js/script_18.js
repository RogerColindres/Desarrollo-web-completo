/***Prototypes en JS***/
//objeto literal
const producto = {
    nombre: 'tv',
    precio: 500
}
console.log(producto)

//objeto constructor o clases metodo anterior
//Funcion constructura
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor', 500);
console.log(producto2);


//Prototype nos ayuda a crear funciones que solo se utilizan en un objeto especifico
//creamos un metodo para el objeto Producto fuera del constructor
Producto.prototype.formatearProducto = function () {
    return `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
}

console.log(producto2.formatearProducto());