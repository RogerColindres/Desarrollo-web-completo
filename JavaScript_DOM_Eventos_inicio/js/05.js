//reaccionar a un evento click en js
//seleccionar elementos y asociales un evento
// window.onscroll = function(evento) {
//     console.log(evento);
// }


const btnEnviar = document.querySelector('.boton--primario') //seleccion de elemento
btnEnviar.addEventListener('click', function(evento) { //asociasion del un evento
    console.log(evento);
    evento.preventDefault(); //previene accion por defecto
    //para validar un formulario
    console.log('Enviando Formulario');
})