//eventos en JS
console.log(1)

window.addEventListener('load', function() {
    //load espera a que js y los archivos que dependen del html sten listos
    console.log(2)
});
//onload y load son lo mismo
window.onload = function() {
    console.log(3);
};
//DOMContentLoaded solo espera el html, no espera html e imagenes
document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
});

console.log(5)

function imprimir() {
    console.log(2);
}

window.onscroll = function() {
    console.log('Scrolling');
}