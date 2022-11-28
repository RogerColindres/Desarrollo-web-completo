//"use strict" //ejecutar javascript en modo estricto
/***Object Methods y use strict***/

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// no permite cambios en un objeto
Object.freeze(producto);
Object.seal(producto);
//object freeze no permite agregar ni eliminar, tampoco modificar un valor
//seal no permite eliminar ni agragar pero si permite modificar

producto.imagen = 'imagen.jpg';


console.log(Object.isFrozen(producto));

console.log(producto);