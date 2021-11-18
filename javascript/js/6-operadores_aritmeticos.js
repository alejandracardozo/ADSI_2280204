"use strict"

/*hallar el total (suma)*/ 
console.log("===suma===")
var producto1 = 2560;
var producto2 = 3520;
var producto3 = 4680;
var totalSuma = producto1 + producto2 + producto3;
console.log("la suma de los productos es: $" + totalSuma);

/*hollar el descuento (resta)*/
console.log("===resta===")
var producto4 =15600;
var descuento = 3000; 
var totalcondescuento = producto4 - descuento;
console.log("el valor total con el descuento incluido es: $" +totalcondescuento);

/*hallar el total (multiplicacion)*/
console.log("===multiplicacion===")
var producto5 = 2420;
var cantidadproducto = 5;
var totalmultiplicacion = producto5 *cantidadproducto;
console.log("el valor total de los productos es: $" + totalmultiplicacion);

/* hallar el promedio de calificaciones */
console.log("===division===")
var calificacion1 = 9.5;
var calificacion2 = 8.2; 
var calificacion3 = 7.9;
var totalcalificacione = 3;
var promediofinal = (calificacion1 + calificacion2 + calificacion3) / totalcalificacione;
promediofinal = promediofinal.toFixed(2);
console.log("el promedio final de calificaciones es: " +promediofinal);

/*hallar el residuo*/
console.log("===residuo===")
var ahorros = 25011;
var cantidadaportantes = 102;
var montoindividual = 0;
var sobrante = 0;
/*cuanto dinero corresponde a cada uno y cuanto sobra*/
var montoindividual = parseInt(ahorros / cantidadaportantes);
console.log("el monto individual es de: " + montoindividual);
/*el signo de residuo*/
sobrante = (ahorros % cantidadaportantes);
console.log("el monto sobrante es de: " + sobrante);
console.log("el monto sobrante es de: " + (ahorros - (montoindividual * cantidadaportantes)));