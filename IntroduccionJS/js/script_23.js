/***Async / Await***/
//base para muchos frameworks de JS

function descargarClientes() {
    return new Promise(function (resolve) {
        console.log("Descargando clientes")

        setTimeout(function () {
            resolve('Los clientes fueron descargados')
        }, 5000)

    })

}

function descargarPedidos() {
    return new Promise(function (resolve) {
        console.log("Descargando Pedidos")

        setTimeout(function () {
            resolve('Los pedidos fueron descargados')
        }, 5000)

    })

}

async function app() {
    try {
        /***Para un unico llamado***/
        // const clientes = await descargarClientes();
        // console.log(clientes)
        // const pedidos = await descargarPedidos();
        // console.log(pedidos)
        /***Para mas de una consulta Async Await***/
        const resultado = await Promise.all([descargarClientes(), descargarPedidos()])
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

app();

/***Como trabajar con dos consultas AsyncAwait***/