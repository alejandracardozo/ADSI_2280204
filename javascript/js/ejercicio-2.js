"use strict"

console.log("contando caracteres");
console.log("   ");

var texto = " Este es un texto con mas de 50 caracteres Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan." ;


console.log("el texto que usted ingreso es: " + texto);
console.log("   ");
console.log("numero de caracteres: "+texto.length);
console.log("   ");
 if (texto.length>50){
     console.log("advertencia: ha excedido el numero de caracteres");
 }

 console.log(" ")

 console.log("busqueda de coincidencia");
 console.log("   ");
var libros = ["romance","terror","comedia","accion","drama"];
var Nombrecelular="Apple";
console.log("El libro buscado es: "+ Nombrecelular);
if(celulares.includes(Nombrecelular)){
    console.log("El libro se encontro");
}else {
    console.log("El libro no se encontro ");
}


console.log("   ");
console.log("listado de aprendices")
console.log("   ");
var Aprendices=["luisa ramirez","felipe mendez","yolanda bermeo","Yoan estiven", "sebastian rendon", "estaban acosta", "hamir ortiz","santiago ordoñez","manuel macias", "yeimi peña" ];
for(i=1;i<Aprendices.length;i++){
    console.log(i+" "+ Aprendices[i] )
}
