"use strict"

function guardarInfo() {
    let numeroDocumento = document.getElementById("numeroDocumento").ariaValueMax;
    if(numeroDocumento == "") {
        alert("Por favor, ingrese el nombre del usuario");
        return false;
    }
    if(document.getElementById("nombreUsuario").value == "") {
        alert("Por favor, ingrese el nombre del usuario");
        return false;
    }
    alert("Informacion guardada con exito :)");
    limpiarformulario();
    return false
}
function limpiarformulario() {
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("nombreUsuario").value = "";
}