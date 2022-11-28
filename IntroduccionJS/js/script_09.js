/***Arreglos Arrays***/

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const meses = new Array("enero", "febrero", "marzo", "abril");
console.log(meses);

//un arreglo tambien puede contener otros arreglos y objetos 

//acceder a los valores de un arreglo
console.log(numeros[0]);

//conocer el numero de elementos que forman un arreglo
console.log(numeros.length);

//metodos para un arreglo o array methods

//forma de agregar elementos a un arreglo
numeros[6] = 6; //no es una forma comun ni correcta

//push para agregar elementos al final del arreglo
numeros.push(7);

//unshift agrega elementos al inicio del arreglo
numeros.unshift(-1, 0);

//pop elimina el ultimo elemento de un arreglo
numeros.pop();

//shift elimina el primer elemento de un arreglo
numeros.shift();

//splice elimina un elemento del arreglo por el indice
numeros.splice(3, 1);

console.table(numeros);

//rest operator o spread operator en arreglos
//tratar de mantener el objeto original siempre

const nuevoArreglo = [...meses, "mayo"];

//arreglo de objetos

const carrito = [
    { nombre: "monitor 20 pulgadas", precio: 500 },
    { nombre: "Televisor 50 pulgadas", precio: 500 },
    { nombre: "tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 }
];

//foreach 
meses.forEach(function (mes) {
    if (mes == "marzo") {
        console.log(`${mes} si existe`)
    }
});

//includes determina si un elemento incluye un determinado elemento
let resultado = meses.includes('marzo');
console.log(resultado);

//Some buscar dentro de un arreglo de objetos
resultado = carrito.some(function (producto) {
    return producto.nombre === 'tablet'
})

console.log(resultado);

//Calculando el total de carrito con foreach
let total = 0;
carrito.forEach(function (prod) {
    total += prod.precio
})
console.log(total);

//reduce funcion reductora
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio;
}, 0)
console.log(resultado);

//filter crear un nuevo arreglo filtrado por una condision
resultado = carrito.filter(function (producto) {
    return producto.precio < 500;
})

console.log(resultado);




