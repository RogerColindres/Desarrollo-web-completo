/***funciones***/
//declaracion de funcion

function sumar() {
    console.log(10 + 10)
}

sumar();

//espresion de la funcion
const sumar2 = function () {
    console.log(20 + 20)
}

sumar2();

//IIFE funciones que se llaman a ellas mismas
(function () {
    console.log('esto es una funcion')
})();

//hoisting: js se ejecuta en dos vueltas
//primero se registran todas las funciones y luego el llamado a la misma
//la primer etapa se conoce como la etapa de creacion o registro
//la segunda etapa se conoce como ejecución de codigo

/***Diferencia entre metodos y funciones***/
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2));//parseInt() es una funcion
console.log(numero1.toString()); //.toString es un metodo
//los que tienen un punto (.) seguido de una funcion son metodos
//los que tienen el nombre de la funcion seguido de parentesis es una funcion

/***Funciones con parametros y argumentos***/
function multiplicar(a, b) {//parametros dentro de la declaracion de la funcion
    console.log(a * b)
}

multiplicar(2, 2);//argumentos en el llamado a una funcion

//parametros por default o defecto 
function sumar3(a = 0, b = 0) {
    console.log(a + b)
}

sumar3(10);

/***funciones que retornan un valor***/
function mul(n1, n2) {
    return n1 * n2;
}

let resultado = mul(10, 2);
console.log(resultado);

let total = 0;
function agregarCarrito(precio) {
    return total += precio
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(100);
total = agregarCarrito(200);
total = agregarCarrito(300);


console.log(total);
const totalPagar = calcularImpuesto(total);
console.log(totalPagar);