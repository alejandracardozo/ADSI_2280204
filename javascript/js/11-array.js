"use strict"

/*forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] = 1;aprendiz1[0] = 1;
aprendiz1[1] = "yeimi katerine";
aprendiz1[2] = "peña ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "B. villa del prado";
aprendiz1[5] = 156;

/* forma 2 */
var aprendiz2 = new Array(2, "luisa fernana", "ramirez montoya", 19, "B.simon bolivar", 157);
var aprendiz3 = [3, "jesus nicolas", "ayerbe guarnizo", 17, "B. las palmitas", 177];
/* mostrar el nombre completo del aprendiz N. 2 */
console.log("nombre completo del aprendiz N. 2:" + aprendiz2[1] + "" + aprendiz2[2]);

/* añadiendo elementos al array */
aprendiz3[6] = "03132007173524";
console.log(aprendiz3[6]);
 
/*contando elementos */
var cantidadelementos = aprendiz1.length;

console.log("aprendiz 1 tiene " + cantidadelementos + "elementos");

/* contando carcteres */
var cantidacaracteres = aprendiz2[1].length;
console.log("cantidad de caracteres:" + cantidacaracteres);