/***Estructuras de control***/
/***switch***/
const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'efectivo':
        console.log('Estas pagando con efectivo')
        break;
    case 'tarjeta':
        console.log('Estas pagando con tarjeta')
        break;
    default:
        console.log('Aun no has pagado')
        break;
}
