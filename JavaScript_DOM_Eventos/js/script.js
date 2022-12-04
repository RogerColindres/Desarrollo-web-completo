/***Selecionar Contenido***/
//document.querySelector()
//retorna 0 o 1 elemento generalmente el primero que encuentra
//Si se equivoca en el nombre del selector se devuelve null
const heading = document.querySelector('.header__texto h2')
// heading.textContent = 'Nuevo Blog de Café'
// heading.classList.add('nueva__clase')
// console.log(heading)

//document.querySelectorAll()
//retorna todos los elementos que coincidan con el selector que el enviemos
const enlaces = document.querySelectorAll('.navegacion a')
// enlaces[0].textContent = 'Nuevo Enlace'
// enlaces[0].href = 'https://google.com'
// enlaces[0].classList.add('nueva__clase')
// enlaces[0].classList.remove('navegacion__enlace')
// console.log(enlaces[0])


//document.getElementById()
const heading2 = document.getElementById('heading')
// console.log(heading2)

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')
//Agregandohref
nuevoEnlace.href = 'https://google.com'
//agregando texto
nuevoEnlace.textContent = 'Google'
//agregando class
nuevoEnlace.classList.add('navegacion__enlace')

//agragarlo al documento
const navegacion = document.querySelector('.navegacion')
// console.log(navegacion);
// navegacion.appendChild(nuevoEnlace)
//insertado en la posicion 1
navegacion.insertBefore(nuevoEnlace, navegacion.children[0])

// console.log(nuevoEnlace);

/***eventos***/

// console.log(1)
//load espera a la descargar de todos los archivos de la pagina web se carguen
window.addEventListener('load', function () {
    // console.log(2)
})

//onload hace lo mismo que load en addEventListener
window.onload = function () {
    // console.log(3)
}
//DOMContentLoaded espera unicamente a que se descargue en HTML
document.addEventListener('DOMContentLoaded', function () {
    // console.log(4)
})

// console.log(5)

/***Selecionar elementos y asociarlos a un evento***/

//evento click
// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function (evento) {
//     console.log(evento)
//     evento.preventDefault();
//     console.log('enviando formulario')
// })
//el evento click se asocia con el boton o cualquier otro elemento

/***eventos con el teclado input, textArea ....***/

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)


function leerTexto(evento) {

    datos[evento.target.id] = evento.target.value
    // console.log(datos)
}

//Evento submit
//e === evento
//validando formulario
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    //validar formulario
    const { nombre, email, mensaje } = datos
    // console.log(nombre)
    // console.log(email)
    // console.log(mensaje)
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true)
        return; //corta la ejecucion del codigo
    }
    //enviar formulario
    mostrarAlerta('Formulario enviado correctamente')
})

//En que casos se usa submit y en que caso click
//en los formularios se usa un submit y se asocia al formulario
//el evento click se asocia con el boton o cualquier otro elemento

//funcion de mostrar error
// function mostrarError(mensaje) {
//     const error = document.createElement('P')
//     error.textContent = mensaje
//     error.classList.add('error')
//     formulario.appendChild(error)

//     desparecer despues de 5 segundos 
//     setTimeout(function () {
//         error.remove()
//     }, 5000)
// }

//funcion para envio correcto de formulario
// function envioCorrecto(mensaje) {
//     const alerta = document.createElement('P')
//     alerta.textContent = mensaje
//     alerta.classList.add('correcto')
//     formulario.appendChild(alerta)

//     setTimeout(function () {
//         alerta.remove()
//     }, 5000)
// }

//refacturing
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje
    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta)
    setTimeout(function () {
        alerta.remove()
    }, 5000)
}

