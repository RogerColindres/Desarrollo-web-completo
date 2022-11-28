/***Estructuras de control***/
const puntaje = 1000

if (puntaje == 1000) {
    console.log(true)
} else {
    console.log(false)
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar')
} else {
    console.log('El usuario no puede pagar')
}

const rol = 'administrador'

if (rol == 'administrador') {
    console.log('acceso a todo el sistema')
} else if (rol == 'editor') {
    console.log('Pueden ingresar a los modulos de edicion')
} else {
    console.log('no tienes acceso')
}