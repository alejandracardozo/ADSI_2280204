"use strict"

/* generar un consecutivo del 1 al 20*/
for(var i = 1; i <= 20; i++) {
    console.log(i)
}

/* generar en plantillas:
aprendiz 1:
aprendiz 2:
aprendiz 3:...hasta el 20
*/
for (i = 1; i <= 20; i++) {
    console.log("aprendiz N." + i);
}
var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "yeimi katerine";
aprendiz1[2] = "peña ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "B. villa del prado";
aprendiz1[5] = 156;

var aprendiz2 = new Array(2, "luisa fernana", "ramirez montoya", 19, "B.simon bolivar", 157);

var aprendiz3 = [3, "jesus nicolas", "ayerbe guarnizo", 17, "B. las palmitas", 177];
for (i = 0; i <= aprendiz1.length; i++) {
    console.log(aprendiz1[i]);
}