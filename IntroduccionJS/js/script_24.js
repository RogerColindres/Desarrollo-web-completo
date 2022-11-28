/***Fetch API***/
//Permite enviar informacion al servidor o ubtener informacion del servidor como lo hace AJAX
//Actualiza el sitio web en tiempo real
//Podemos obtener un archivo local a una respuesta de un servidor (Texto o JSON)
//Al igual que todas las API's modernas je JS utiliza Promises o tambien Async/Await
/***JSON***/
//Lenguaje de transorte de datos, que JS puede consumir y mostrar en el sitio web

//Ejemplo de fetch API

async function obtenerEmpleados() {

    const url = 'empleados.json'
    // fetch(url)
    //     .then(function (resultado) {
    //         return resultado.json()
    //     })
    //     .then(function (datos) {

    //         const { empleados } = datos;

    //         empleados.forEach(empelado => {
    //             console.log(empelado)
    //         });

    //     })
    const resultado = await fetch(url);
    const datos = await resultado.json();
    console.log(datos);
}


obtenerEmpleados();