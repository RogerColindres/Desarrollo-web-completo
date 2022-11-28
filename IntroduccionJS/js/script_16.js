/***This***/
const reservacion = {
    nombre: "Roger",
    apellido: "Colindres",
    total: 5000,
    pagado: false,

    informacion: function () {
        console.log(`El cliente: ${this.nombre} debe pagar: ${this.total}`)
    }
}

reservacion.informacion();

// En un método de objeto, thisse refiere al objeto .
// Solo, thisse refiere al objeto global .
// En una función, thisse refiere al objeto global .
// En una función, en modo estricto, thises undefined.
// En un evento, thisse refiere al elemento que recibió el evento.
// Métodos como call(), apply()y bind()pueden hacer referencia thisa cualquier objeto .