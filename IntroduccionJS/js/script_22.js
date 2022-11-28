/***Notification API con Promesas***/

const boton = document.querySelector('#boton');
boton.addEventListener('click', function () {
    Notification.requestPermission()
        .then(function (resultado) {
            console.log(`El resultado es: ${resultado}`)
        })
})
if (Notification.permission == 'granted') {
    new Notification('Esto es una nueva notificacion', {
        icon: 'img/wallhaven-g8563d.jpg',
        body: 'Los mejores tutoriales'
    })
}

