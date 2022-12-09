//reaccionamos desde el incio o desde que se descarga al navegador 
//por completo la aplicacion web
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scroolNav();
}

function navegacionFija() {
    const barra = document.querySelector('header');
    const sobrefestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');
    // console.log(sobrefestival);
    window.addEventListener('scroll', function () {
        // console.log(sobrefestival.getBoundingClientRect());
        if (sobrefestival.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scroolNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}

//creamos la funcion crearGaleria para:
//selecionar el elemento donde se insertara el HTML generado por JS en esta funcion
//creamos el elemento imagen para insertar las imagenes por medio de un ciclo for
//esperamos un evento de tipo click en cada imagen y cada vez que se presente el evento llamamos a la funcion mostrarImagen
//Por ultimo insertamos el HTML en el objeto crea usando appendChild
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagenes galeria">
        `;

        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

//Mostrando la imagen de manera modal
function mostrarImagen(imagenId) {
    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${imagenId}.avif" type="image/avif">
        <source srcset="build/img/grande/${imagenId}.webp" type="imagen/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${imagenId}.jpg" alt="imagenes galeria">
        `;

    //creando overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //cerrando desde el overlay, osea dando click sobre la imagen
    overlay.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //boton para cerrar el modal (ventana modal)
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    cerrarImagen.addEventListener('click', function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();

    });
    overlay.appendChild(cerrarImagen);

    //añadiendo overlay al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}