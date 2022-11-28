/***Numeros y Operadores***/
const numero = 100;
const numero2 = 200;

// console.log(numero);
// console.log(numero2);

// console.log(numero + numero2);
// console.log(numero - numero2);
// console.log(numero * numero2);
// console.log(numero / numero2);
// console.log(numero % numero2);

/***Obejto Math***/
let resultado;

//math PI
resultado = Math.PI;

//math round redondeo hacia arriba
resultado = Math.round(2.5);

//math ceil siempre redondea hacia arriba
resultado = Math.ceil(2.5);

//math floor siempre redondea hacia abajo
resultado = Math.floor(2.5);

// math sqrt raiz cuadrada
resultado = Math.sqrt(4);

//math abs valor absoluto
resultado = Math.abs(-100);

//math min el valor minismo de un listado
resultado = Math.min(2, 6, 1);

//math max el valor maxismo de un listado
resultado = Math.max(2, 6, 1);

//math random devuelve un valor random
resultado = Math.random();
resultado = Math.floor(Math.random() * 100);

// console.log(resultado);

/***orden de las operaciones***/
//Primero lo que esta dentro de parentesis 
//segundo multiplicacion y division de izquierda a derecha
//tercero sumas y restas de izquierda a derecha

resultado = (100 + 200 + 300) * 0.2;
console.log(resultado);

/***Incrementos***/
let puntaje = 10;
puntaje++;
console.log(++puntaje);
//tomar en cuenta el orden del incremento o decremento al momento de imprimir
