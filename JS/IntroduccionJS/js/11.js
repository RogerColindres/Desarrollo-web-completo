//destructuring de objetos
//crear variables a partir de objetos 
const producto = {
    nombreProdcuto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//mala practica de crear variables a partir de obejtos
const precioProducto = producto.precio;
console.log(precioProducto);

//Destructuring
//el nombre de la variable a crear es el nombre de la
//propiedad del objeto
const { precio, nombreProdcuto } = producto;
console.log(precio);
console.log(nombreProdcuto);