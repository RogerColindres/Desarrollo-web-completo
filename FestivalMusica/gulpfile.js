//gulp es una herramienta para automatizar tareas
//cada tarea seria una funcion de javascript

//extraemos toda la funcionalidad de gulp es una variable (hacemos algo similar a import/export)
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber')

//Tarea para compilar SASS con GULP
function css(callback) {
    src('src/scss/**/*.scss')//identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass())//Compilarlo
        .pipe(dest("build/css"));//Guardarla o almacenarla

    callback();//callback le avisa a gulp cuando llegamos al final de la tarea
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    done();
}


exports.css = css;
exports.dev = dev;
//NPX se instala de manera automatica con nodejs y nos permite ejecutar paquetes sin necesidad de instalarlos globalmente.
//para llamar con NPX se usa npx gulp nombre de la tarea

//para mandar a llamar haciendo uso de npm tenemos que pasarle en package.json en la parte de scripts lo que vamos a ejecutar