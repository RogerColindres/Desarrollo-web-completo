//estructuras de control
//IF ELSE
const puntaje = 1000;
if (puntaje === 1000) {
    console.log("Si el puntaje es 1000")
} else {
    console.log("El puntaje es distinto de 1000")
}

//SWITCH
const metodoPago = "Tarjeta";

switch (metodoPago) {
    case "Tarjeta":
        console.log("Metodo de pago tarjeta");
        break;

    default:
        console.log("Aun no has pagado");
        break;
}