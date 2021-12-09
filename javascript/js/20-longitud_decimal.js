"use strict"

/*metodo toFixed para recortar decimales */
var promedio = 2.56648226;
promedio = promedio.toFixed(2);
console.log(promedio);

/*forzando el redondeado */
/*metodo slice para redonder */
var promedio2 = 2.56648226;
var promedio2str = promedio2.toString();
var promedio2conv = promedio2str.slice(0, 4);
var promedio2conv = parseFloat(promedio2conv);
console.log(promedio2conv);