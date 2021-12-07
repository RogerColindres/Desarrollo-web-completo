//arreglos
const numeros = [10, 20, 30, 40, 50];
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
const arreglo = Array("Hola", 10, true, "Objetos", "Arreglos");

// console.table(numeros);
// console.table(meses);
// console.table(arreglo);

//acceder a los valores de un arreglo
// console.log(numeros[0]);

//conocer la extension de un arreglo
// console.log(numeros.length);

//iterar un arreglo 
// numeros.forEach(function(numero) {
//     console.log(numero);
// })

//agregar elementos al final de un arreglo push
// numeros.push(60);

//agregar elemento al inicio unshift 
// numeros.unshift(-10);

//eliminar ultimos elementos de un arreglo POP
// numeros.pop();

//elimina del inicio del areglo shift
// numeros.shift();

//splice elimina un elemento basado en su indice
// numeros.splice(2, 1);

//rest operator o spread operator 
const nuevoArreglo = [...meses, "Mayo"];

console.table(nuevoArreglo);