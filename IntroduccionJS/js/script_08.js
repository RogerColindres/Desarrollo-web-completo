/***unir objetos con el spread operator***/
//se puede utilizar en eotros elementos como arreglos 
// no permite cambios en un objeto

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    tamaño: "1m"
}

const nuevoProducto = {
    ...producto,
    ...medidas
}
console.log(producto);
console.log(nuevoProducto);