//foreache and MAP
//Solamente se pueden ejecutar en arreglos
const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisor 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Telefono", precio: 500 }
];

//foreach
//iterar sobre un arreglo o mostrar resultados en consola
carrito.forEach(function(producto) {
    console.log(producto.nombre);
});

carrito.forEach(producto => { console.log(producto.nombre) });

//map
//crear un nuevo arreglo especifico a partir de cualquier estructura
carrito.map(producto => { console.log(producto.nombre) });