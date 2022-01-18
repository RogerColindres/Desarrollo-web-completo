//generar HTML con JS
//generar un nuevo enlace con js
const nuevoEnlace = document.createElement('A');
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregarlo al documento html
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);