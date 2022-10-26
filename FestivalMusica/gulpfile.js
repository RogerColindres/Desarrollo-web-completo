const { src, dest, watch } = require('gulp');
//importamos la funcionalidad de sass
const sass = require('gulp-sass')(require('sass'));
//creando y llamando tareas con gulp
//se comunican con la api de gulp y realiza ciertas acciones
const plumber = require('gulp-plumber');
//evitando que el workflow se detenga ante cualquier error
//no detenemos la ejecuancion del workflow
//instalamos gulp-plumber con npm i --save-dev gulp-plumber
/***vamos a decirle que escuche los cambios en los demas archivos***/
function css(callback) {

    src('src/scss/**/*.scss') //1. identificar el archivo sass a compilar
        .pipe(plumber()) //evitamos que se detenga el workflow ante cualquier error
        .pipe(sass()) //2. compilar el archico sass y crear la hoja de css
        .pipe(dest('build/css')) //3. almacenamos o guardamos el sass compilado(css)

    callback();
}

//funcion para escuchar constantemente los cambios o compilar automaticamente
function dev(callback) {
    watch('src/scss/**/*.scss', css);
    callback();
}
//haciendo disponible una tarea
exports.css = css;
exports.dev = dev;