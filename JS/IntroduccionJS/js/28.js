//promesas
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false; //es una variable
    if (auth) {
        resolve("Usuario Autenticado"); //se cumple la pormesa
    } else {
        reject("No se inicio Sesion"); //no se cumple la promesa
    }

});

usuarioAutenticado
    .then(function(resultado) { //para obtener el valor de resolve
        console.log(resultado);
    }).catch(function(error) { //para obtener el valor de reject
        console.log(error);
    })

//las promesas tienen tres valores posibles
//pending: pendiente, no se a cumplido ni rechazado
//fullfilled: se cumplio la promesa
//rejected: se rechazo la promesa