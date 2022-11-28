/***Strings o Cadenas de texto***/
const producto = "Monitor de 20 \" pulgadas";
console.log(producto);

//usando un constructor
const producto2 = String('Monitor de 30 pulgadas');
//console.log(producto2);

//usando new
const producto3 = new String('monitos de 50 pulgadas');
//console.log(producto3);

/***Metodos Para Cadenas de Texto***/
//lenngth: conocer la extension de un string
console.log(producto.length);

//indexOF una palabra existe dentro de un string
console.log(producto.indexOf('pulgadas'));

//includes: busca la palabra y retorna true o false
console.log(producto.includes('pulgadas'));
