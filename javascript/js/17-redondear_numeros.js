"use strict"

/*redondear de forma automatica con el metodo round.*/
console.log("redondear de forma automatica");
var number1 = 4.4; /*redondea hacia abajo*/
var number2 = 4.6; /*redondea hacia arriba*/
var number3 = 4.5; /*redondea hacia arriba*/
var number1Round = Math.round(number1);
var number2Round = Math.round(number2);
var number3Round = Math.round(number3);

console.log("variable 1: " + number1Round + "\n" +
            "variable 2: " + number2Round + "\n" +
            "variable 3: " + number3Round + "\n");

/*redondear hasta el piso con el metodo floor */
console.log("redondear con el metodo floor");
var number4 = 4.9;
var number4floor = Math.floor(number4);
console.log("variable 4: " + number4floor);

/*redondear hacia el techo con el metodo ceil*/
console.log("redondear con el metodo ceil");
var number5 = 4.1;
var number5ceil = Math.ceil(number5);
console.log("variable 5: " + number5ceil);