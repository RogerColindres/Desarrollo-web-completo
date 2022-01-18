//Async / Await
//dos o mas consultas async await
function descargarClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout(function() {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos...');

        setTimeout(function() {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app() {
    try {
        // const resultado = await descargarClientes();
        // const pedidos = await descargarPedidos();
        // console.log(resultado);
        // console.log(pedidos);
        const resultado = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();