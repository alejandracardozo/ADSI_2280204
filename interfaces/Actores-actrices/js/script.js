"use scrict"

let idMulan = document.getElementById("idMulan");
let idPocahontas = document.getElementById("idPocahontas");

idMulan.addEventListener("click", function(){
   idMulan.classList.remove("Mulan");
   idMulan.classList.add("Mulam-hidden");
   idPocahontas.classList.add("Pocahontas");
   idPocahontas.classList.remove("Pocahontas-hidden");
});

idPocahontas.addEventListener("click",function(){ 
   idPocahontas.classList.add("Pocahontas-hidden");
   idPocahontas.classList.remove("Pocahontas");
   idMulan.classList.remove("Mulam-hidden");
   idMulan.classList.add("Mulan");
});
