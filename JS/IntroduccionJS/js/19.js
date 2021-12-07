//metodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function() {
        console.log("Pausando");
    }
}

console.log(reproductor);

reproductor.reproducir(3840);
reproductor.pausar();