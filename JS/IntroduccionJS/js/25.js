//Objeto lonstructor y Objeto literal
//POO
//objeto literal 
const producto = {
    nombre: "Tablet",
    precio: 500
}

//objeto constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

}

//prototypes
//funcion asociada a un tipo de objeto
//nos permite crear funciones que se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
}

const producto2 = new Producto('Monitor de 40"', 800);



console.log(producto2);
console.log(producto2.formatearProducto());