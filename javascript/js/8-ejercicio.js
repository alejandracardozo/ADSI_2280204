
"use strict"

console.log(" PRODUCTO MAS COSTOSO Y PRODUCTO MENOS COSTOSO");
var pollo = 8000;
var carne = 10000;
var arroz = 3000;
var papa= 2000;

if (pasta > carne && pollo > arroz && pollo > papa) {
    console.log("El producto más costoso es el pollo con precio de : " + pollo);
}
else if (carne > pollo && carne > arroz && carne > papa) {
    console.log("El producto más costoso es la carne con precio de: " + carne);
}
else if (arroz > pollo && arroz > carne && arroz > papa) {
    console.log("El producto más costoso es el arroz con precio de: " + arroz);
}
else if (papa > pollo && papa > carne && pollo > arroz) {
    console.log("El producto más costoso es la papa con precio de: " + papa);
}
if (pollo < carne && pollo < arroz && pollo < papa) {
    console.log("El producto menos costoso es el pollo con precio de: " + pollo);
}
else if (carne < pollo && carne < arroz && carne < papa) {
    console.log("El producto menos costoso es la carne con precio de: " + carne);
}  
else if (arroz < pollo && arroz < carne && arroz < papa) {
    console.log("El producto menos costoso es el arroz con precio de: " + arroz);
}    
else if (papa < pollo && papa < carne && pollo < arroz) {
    console.log("El producto menos costoso es la papa con precio de: " + papa);
}  
console.log("USUARIO Y CONTRASEÑA");

var usuario_Bd = "alejandra";
var contraseña_Bd = "0807";
var usuario_input = "alejandra";
var contraseña_input = "0807";

if (usuario_Bd === usuario_input && contraseña_Bd === contraseña_input ) {
    console.log("Bienvenida alejandra:)");
}
else if(usuario_Bd === usuario_input && contraseña_Bd !== contraseña_input){
    console.log(" contraseña incorrecta.");
}
else if (usuario_Bd !== usuario_input && contraseña_Bd === contraseña_input){
    console.log("usuario incorrecto.");
}
else {
    console.log("acceso denegado usuario y contraseña incorrectos.");
}


console.log(" DESCUENTOS");

var compra1 = 100000;
var compra1 = 200000;
var compra3 = 300000;
var compraTotal = 600000;
var descuento1 = compra1*0.04;
var descuento2 = compra1*0.06;
var descuento3 = compra1*0.09;


console.log("valor total sin descuento: $"+ compra1);

if(compraTotal>100000 && compraTotal<200000){
    console.log("descuento $:"+ descuento1);
    console.log("valor total con descuento: $" + (compra1-descuento1));
 
}
else if( compraTotal>200000 && compraTotal<300000){
    console.log(" descuento: " + descuento2);
    console.log("valor total con descuento: $" + (compra1-descuento2));
}
else if( compraTotal>300000){
    console.log(" descuento $:" + descuento3);
    console.log("valor total con descuento: $" + (compra1-descuento3));

}


