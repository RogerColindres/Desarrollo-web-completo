//"use strict"; //ejecutar javascript en modo estricto

//metodos para objetos
const producto = {
    nombreProdcuto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//no agregar no modificar el objeto
Object.freeze(producto);

//no agregar, pero si modificar
Object.seal(producto);
//producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);