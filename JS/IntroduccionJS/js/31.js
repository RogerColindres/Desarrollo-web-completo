//Fetch API
//Reemplazo de AJAX
//JSON
//estado 200 se realizao una conexion correcta con el servidor
//estado 404 no se conecto con el servidor o no encuentra el recurso

function obtenerEmpleados() {
    const archivo = 'empleados.json';
    fetch(archivo)
        .then(resultado => {
            return resultado.json();
        })
        .then(datos => {
            // console.log(datos.empleados);

            const { empleados } = datos;
            // console.log(empleados);
            empleados.forEach(empleado => {
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)

            })
        })
}

obtenerEmpleados();