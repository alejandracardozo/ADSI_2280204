/* exceso de caracteres */
console.log("===ejercicio1===")

var textoingresado="añadiendosistemañadiendosistemañadiendosistemañadiendosistemañadiendosistema";
console.log( "el numero de caracteres es :" + textoingresado.length);

if (textoingresado.length>50){console.log("a excedido el numero de caracteres permitidos");
}

else if (textoingresado.length<50){console.log("esta permimitido menos de 50 caracteres permitidos");} 

else {console.log("acurrido un error");}

console.log("===ejercicio2===")


var Nombres=["Luisa","Felipe","Alejandra"];
var NombreBuscar="Alejandra";
if (Nombres.includes(NombreBuscar)){console.log("el nombre " + NombreBuscar + " fue encontardo")}
else {console.log("el nombre " + NombreBuscar + " no fue encontardo")}
console.log("===ejercicio3===")
var aprediz=["Luisa","Yolanda","Alejandra","Felipe"];
for (var i = 0; i<aprediz.length;i ++){
    console.log(i + aprediz[i])
}