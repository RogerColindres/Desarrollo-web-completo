//diferencia entre metodo y funcion
let numero1 = 20;
let numero2 = "20";

console.log(parseInt(numero2)); //parseInt es una funcion

console.log(numero1.toString()); //los metodos van seguidos de un objeto

//Parametros y argumentos

//parametros por defecto
function sumar(numero1 = 0, numero2 = 0) { //parametros
    console.log(numero1 + numero2)
}

sumar(5, 5); //argumentos