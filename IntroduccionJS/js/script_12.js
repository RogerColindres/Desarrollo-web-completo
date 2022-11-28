/***funciones flecha o arrow funtions***/
const sumar = (a, b) => console.log(a + b)
sumar(7, 8);

const aprendiendo = (tec) => console.log(`Aprendiendo ${tec}`)
aprendiendo('javascript');

const meses = new Array("enero", "febrero", "marzo", "abril");

const carrito = [
    { nombre: "monitor 20 pulgadas", precio: 500 },
    { nombre: "Televisor 50 pulgadas", precio: 500 },
    { nombre: "tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 }
];

meses.forEach((mes) => {
    if (mes == 'marzo') {
        console.log(`${mes} si existe`)
    }
})


let resultado;

resultado = carrito.some((producto) => {
    return producto.nombre === 'tablet'
});

resultado = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0)

resultado = carrito.filter((producto) => {
    return producto.precio < 500
})

resultado = carrito.filter(producto => {
    return producto.nombre !== 'tablet'
})


console.log(resultado);