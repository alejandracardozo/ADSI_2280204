"use strict"

const imgAna = document.getElementById("imgAna");
const formAna = document.getElementById("formAna");
const cerrarForm = document.getElementById("cerrarForm");

imgAna.addEventListener("click", function(){
    formAna.classList.remove("form-ana-hidden");
    formAna.classList.add("form-ana-visible");
    imgAna.classList.remove("img-ana-visible");
    imgAna.classList.add("img-ana-invisible")
});

cerrarForm.addEventListener("click", function(){
    formAna.classList.add("form-ana-hidden");
    formAna.classList.remove("form-ana-visible");
    imgAna.classList.add("img-ana-visible");
    imgAna.classList.remove("img-ana-invisible");
});


const lupa = document.getElementById("idLupa");
const menu1 = document.getElementById("idHeader");
const menu2 = document.getElementById("header2");
const cerrarMenu2 =document.getElementById("idCerrar")

lupa.addEventListener("click", function(){
    menu1.classList.remove("encabezado");
    menu1.classList.add("headerInvisible");
    menu2.classList.add("header2visible");
    menu2.classList.remove("header2invisible");
})
cerrarMenu2.addEventListener("click", function(){
    menu2.classList.remove("header2visible");
    menu2.classList.add("header2invisible");
    menu1.classList.add("encabezado");
    menu1.classList.remove("headerInvisible");
})