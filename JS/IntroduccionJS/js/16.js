//Funciones
//declaracion de funcion 
//puedo llamar la funcion antes de declararla
console.log(sumar(2, 3));

function sumar(a, b) {
    return a + b
}



//expresion de la funcion


const sumar1 = function(a, b) {
    return a + b
}

console.log(sumar1(1, 1));



//IIFE
//previene que se puedan leer variables de otros archivos
(function() {
    console.log("Esto es una funcion")
})();

//javascript se ejecuta en dos etapas