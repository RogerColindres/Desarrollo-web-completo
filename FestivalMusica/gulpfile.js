//gulp es una herramienta para automatizar tareas
//cada tarea seria una funcion de javascript

//extraemos toda la funcionalidad de gulp es una variable (hacemos algo similar a import/export)
const { src, dest, watch, series, parallel } = require("gulp");
//dependencias css
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');//le se aegura que funcione en el navegador que se le diga
const cssnano = require('cssnano');//comprime el codigo css
const postcss = require('gulp-postcss');//hace transformaciones con autofixer y nano
const sourcemaps = require('gulp-sourcemaps');

//dependencias imagen
const avif = require('gulp-avif');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

//dependencias para javascript
const terser = require('gulp-terser-js');

//Tarea para compilar SASS con GULP
function css(callback) {
    src('src/scss/**/*.scss')//identificar el archivo de SASS
        .pipe(sourcemaps.init())//referencia de la hoja de estilo
        .pipe(plumber())//para mostrar errores en consola
        .pipe(sass())//Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))//minificamos el css
        .pipe(sourcemaps.write('.'))//se guarda en la misma hoja de estilos .map
        .pipe(dest("build/css"));//Guardarla o almacenarla

    callback();//callback le avisa a gulp cuando llegamos al final de la tarea
}

//aligerar imagenes con gulp (reducir el peso)
//necesitamos gulp-imagemin 7.1.0 y gulp-cache
function imagenesMin(done) {
    const opciones = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}


//tarea para convertir imagenes a webp
function versionWebp(done) {
    //la funcion webp recibe una serie de opciones que las delcaramos como un objeto
    //ajustando la calidad y pasandolo a la funcion webp
    const opciones = {
        quality: 50
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();
}
//tarea para convertir imagenes a avif
function versionAvif(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));

    done();

}

//comprimir codigo de JS con Gulp
function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript)
    done();
}


//ejecucion de tareas de manera individual
exports.css = css;
exports.js = javascript;
exports.versionWebp = versionWebp;
exports.imagenesMin = imagenesMin;
// exports.dev = dev;

//gulp permite ejecutar mas de una tarea a la vez haciendo de dos metodos
//series() las tareas se ejecutan una tras otra de manera secuencial
//parallel() las tareas se ejecutan al mismo tiempo
//ejecucion n catidad de tareas al mimso tiempo
exports.dev = parallel(imagenesMin, versionWebp, versionAvif, javascript, dev);

//NPX se instala de manera automatica con nodejs y nos permite ejecutar paquetes sin necesidad de instalarlos globalmente.
//para llamar con NPX se usa npx gulp nombre de la tarea

//para mandar a llamar haciendo uso de npm tenemos que pasarle en package.json en la parte de scripts lo que vamos a ejecutar

//para instalar una API de gulp de una version especifica hacemos de la @
//ejemplo nombre-api-gulp@version