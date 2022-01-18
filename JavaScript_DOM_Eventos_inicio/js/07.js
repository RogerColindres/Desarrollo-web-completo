//validar formulario
const datos = {
        nombre: "",
        email: "",
        mensaje: ""
    }
    /*los nombres de las propiedades de un objeto deben coincidir con
    los id de los input del formulario que se desea capturar*/
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


function capturaTexto(e) { //capturamos el texto de los inputs del formulario
    //e = evento
    datos[e.target.id] = e.target.value;
    console.log(datos);

}

nombre.addEventListener('input', capturaTexto);
email.addEventListener('input', capturaTexto);
mensaje.addEventListener('input', capturaTexto);

formulario.addEventListener('submit', function(evento) {
    //validar formulario
    evento.preventDefault();
    //destructurin a el objetos datos
    //creando variables a partir del objeto datos pormedio de destructuring
    const { nombre, email, mensaje } = datos
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta('Todos los campos son oblogatorios', true);
        return; //corta la ejeccion del codigo
    }
    mostrarAlerta('Formulario enviado correctamente');

    //enviar formulario
});

//mostrar error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P'); //creamos un elemento html desde js
    error.textContent = mensaje; //asisnamos el texto a esa etiqueta (contenido)
    error.classList.add('error'); //agregamos una clase a ese elemento html
    formulario.appendChild(error); //lo llamamos dentro del bloque formulario
    //la aleta dura 2.5 segundos
    setTimeout(() => {
        error.remove();
    }, 2500);
}

//mostrar mensaje de envio correcto en pantalla
function envioCorrecto(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);
    setTimeout(() => {
        correcto.remove();
    }, 2500);
}

//refactorizando las dos funciones de alerta de envio de formulario
//se dejan de ejemplo las dos funciones anteriores
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P'); //creamos un elemento html desde js
    alerta.textContent = mensaje; //asisnamos el texto a esa etiqueta (contenido)
    if (error) { //error de envio
        alerta.classList.add('error');

    } else { //envio correcto
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2500);
}