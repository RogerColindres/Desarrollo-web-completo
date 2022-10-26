/*****comandos para instalar SASS*****/
1. creando el package.json para manejar las dependencias de sass
con npm init.
2. instalamos sass con npm install sass (npm i sass), se instalan 
las dependencias de desarrollo con npm install sass --save-dev.
3. para compilar sass debemos modificar la parte de scripts de package.json
debemos especificar que es sass, luego llamamos sass del binario,
luego le damos la carpeta donde se encuentra la hoja de estilos de sass,
por ultimo la carpeta donde vamos a guardar la hoja de estilo compilada,
eje.:
scripts // de package.json
"sass" : "sass src/scss:build/css"
4. para compilar el script sass ejecutamos npm run sass.
5. para mantener ejecutando y visualizar los cambios realizados en la hoja
de estilo de sass usamos whatch para visualizar en tiempo real los cambios
visualizados en la hoja de estilo sass.
debemos agregar en package.json la siguiente linea 
"sass" : "sass --watch src/scss:build/css".
6. volvemos a ejecutar el script.
/*****instalando gulp y creando gulpfile*****/
1. debemos tenes instaladas dos dependencias de gulp, la version global
y la version local.
global: para ejecuatar tareas especificas de gulp, para instalarla usamos
npm install --global gulp-cli
local: para ejecutar tareas especificas del proyecto, para instalar ejecutamos
npm install --save-dev gulp
2. para usar gulp debemos crear un archivo especifico que es gulpfile.js
/*****Compilando sass en gulp*****/
1. para usar el binario de sass con gulp (compilar sass con gulp) debemos
instalar otra dependencia, en este caso gulp-sass, para instalarla usamos
npm install --save-dev gulp-sass.
2. para compilar la hoja de estilo con gulp usamos gulp seguido del
nombre de la tarea.