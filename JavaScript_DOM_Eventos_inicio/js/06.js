//eventos con el teclado
//input y textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const areaInput = document.querySelector('#mensaje');

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
areaInput.addEventListener('input', leerTexto);

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

//eventos en teclado
//cuando usar evento submit y click

//evento de click
const btnEnviar = document.querySelector('.boton--primario') //seleccion de elemento
btnEnviar.addEventListener('click', function(evento) { //asociasion del un evento
    console.log(evento);
    //evento.preventDefault(); //prevenir accion or defecto
    console.log('click');
});
//evento de submit
//por buenas practicas para un formulario se utiliza un submit
//para validar formulario se utiliza submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); //prevenir accion por defecto
    console.log('enviando formulario...');
    console.log('submit');
});

//organizacion del cuerpo de codigo JS
//variables
//eventlistener