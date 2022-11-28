/***Objetos***/

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

//formas de acceder a las propiedades de un objeto
//propiedades [llave : valor]
console.log(producto.nombreProducto);
console.log(producto["nombreProducto"]);

/***Agregar y eliminar propiedades de un obejto***/

//agregar propiedades
producto.imagen = 'imagen.jpg';

//eliminar propiedades
//delete producto.precio;

console.log(producto);

/***Destructuring de objetos***/
//crear una variable a partir de una propiedad de un objeto

//forma anterior 
const precioProducto = producto.precio;
console.log(precioProducto);
const nombreProducto1 = producto.nombreProducto;
console.log(nombreProducto1);

//destructuring sacando de una estructura
const { precio } = producto;
console.log(precio);
const { nombreProducto, disponible } = producto;
console.log(nombreProducto);
console.log(disponible);


