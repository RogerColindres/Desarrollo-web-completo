/***Promesas (promises) JS***/
//las promesas reciben dos parametros en la funcion callback
const ususarioAutenticado = new Promise(function (resolve, reject) {
    const auth = false;
    if (auth) {
        //resolve se ejecuta cuando la promesa se cumple
        resolve('Usuario Autenticado');
    } else {
        //reject se ejecuta cuando la promesa no se cumple
        reject('No pudo iniciar sesion');
    }
});

//para ver el estado de la variable
//console.log(ususarioAutenticado);

ususarioAutenticado
    .then(function (resultado) { console.log(resultado) })
    .catch(function (error) { console.log(error) })

//en las promesas existen 3 resultados para PromiseState
//Pending: no se ha cumplido pero tampoco rechazado, en espera
//fulfilled: se cumplio la promesa
//rejected: no se cumplio la promesa
