/***ForLoop While y Do While***/
//forloop

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} es par`)
//     } else {
//         console.log(`${i} es impar`)
//     }
// }

const carrito = [
    { nombre: "monitor 20 pulgadas", precio: 500 },
    { nombre: "Televisor 50 pulgadas", precio: 500 },
    { nombre: "tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 }
];

// for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre + " " + carrito[i].precio)
// }

//while
// let i = 0
// while (i < carrito.length) {
//     console.log(carrito[i].nombre)
//     i++;
// }

// //do While

// i = 0
// do {
//     console.log(carrito[i].nombre)
//     i++
// } while (i < carrito.length);

/***Foreach y map***/
//inicamente se puede ejecutar en arreglos

//Foreach para visualizar elementos de un arreglo, iterar y mostrar
carrito.forEach((producto) => {
    console.log(producto.nombre)
})

//map para crear un nuevo arreglo
carrito.map((producto) => {
    console.log(producto.precio)
})
