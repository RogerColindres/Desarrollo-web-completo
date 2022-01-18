//query selector
const heading = document.querySelector('.header__texto h2'); //retorna 0 ó 1 elemento
heading.textContent = 'Nuevo Heading';
console.log(heading);
//Null en consola puede ser un aviso de un error de escritura en el selector

//querySelectorSll
//retorna cero o todos lo elementos que concuenden con el selector
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo Texto';
enlaces[0].classList.add('nueva-clase');

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);