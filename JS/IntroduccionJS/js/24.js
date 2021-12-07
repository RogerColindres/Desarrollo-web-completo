//this en js
const reservacion = {
    nombre: "Roger",
    apellido: "Colindres",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`)
    }

}

reservacion.informacion();