/***Metodos de Propiedad***/
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion con id: ${id}`)
    },
    pausar: function () {
        console.log('Pausando.....')
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la lista: ${nombre}`)
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la cancion con ID: ${id}`)
}

console.log(reproductor)
reproductor.reproducir(5);
reproductor.pausar();
reproductor.borrarCancion(5);
reproductor.crearPlaylist('Favoritos');

