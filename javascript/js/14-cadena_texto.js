"use strict"

/* covertir todo a mayuscula */
console.log("===1===");
var ciudad = "Pitalito";
var ciudadMayuscula = ciudad.toUpperCase();
console.log("ciudad: " + ciudadMayuscula);

console.log("===2===");
/* covertir todo a minusculas */
var frase = "Es una Frase En Minusculas";
var fraseMinusculas = frase.toLowerCase();
console.log(fraseMinusculas);
console.log("===3===");
/* covertir todo a minusculas exceptuando la primer letra */
var frase2 = "estE es Otro Ejemplo De Una Frase";
var frase2Minuscula = frase2.toLowerCase();
var primerLetra = frase2.charAt(0);
var primerLetraMayuscula = primerLetra.toUpperCase();
console.log(primerLetraMayuscula + frase2Minuscula);
var cantCaracteresFrase = frase2.length;
var fraseCompleta = primerLetraMayuscula + frase2Minuscula.slice(1, cantCaracteresFrase);
console.log(fraseCompleta);
console.log("===12===");
/* metodo replace */
/* reemplazar texto */
var frase3 = "Gente de"
var canLetrasFrase3 = frase3.length;
var frase4 = "se esta volvinedo millonaria con este truco.";
var cantLetrasFrase4 = frase4.length;
var localizacion = "Acevedo";
var cantLetrasLocalizacion = localizacion.length;
var frase3Completa = frase3 + " " + localizacion + " " + frase4;
console.log(frase3Completa); "use strict"

/* covertir todo a mayuscula */
console.log("===1===");
var ciudad = "Pitalito";
var ciudadMayuscula = ciudad.toUpperCase();
console.log("ciudad: " + ciudadMayuscula);

console.log("===2===");
/* covertir todo a minusculas */
var frase = "Es una Frase En Minusculas";
var fraseMinusculas = frase.toLowerCase();
console.log(fraseMinusculas);
console.log("===3===");
/* covertir todo a minusculas exceptuando la primer letra */
var frase2 = "estE es Otro Ejemplo De Una Frase";
var frase2Minuscula = frase2.toLowerCase();
var primerLetra = frase2.charAt(0);
var primerLetraMayuscula = primerLetra.toUpperCase();
console.log(primerLetraMayuscula + frase2Minuscula);
var cantCaracteresFrase = frase2.length;
var fraseCompleta = primerLetraMayuscula + frase2Minuscula.slice(1, cantCaracteresFrase);
console.log(fraseCompleta);
console.log("===12===");
/* metodo replace */
/* reemplazar texto */
var frase3 = "Gente de"
var canLetrasFrase3 = frase3.length;
var frase4 = "se esta volvinedo millonaria con este truco.";
var cantLetrasFrase4 = frase4.length;
var localizacion = "Acevedo";
var cantLetrasLocalizacion = localizacion.length;
var frase3Completa = frase3 + " " + localizacion + " " + frase4;
console.log(frase3Completa); 