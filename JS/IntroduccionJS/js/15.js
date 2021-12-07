//mas metodos para arreglos
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisor 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Telefono", precio: 500 }
];

//foreach
meses.forEach(function(mes) {
    console.log(mes);
})

//includes
//includes se utiliza para areglos planos ejemplo meses
let resultado = meses.includes("Marzo");
console.log(resultado);

//Some ideal para buscar en arreglos de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === "Telefono";
});

//Reduce toma todos los precios y entrega todos los resultados
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

//filter devolver valores bajo condicion
resultado = carrito.filter(function(producto) {
    return producto.precio > 400;
})

console.log(resultado);