let valorUnitario = 10000;

valorIndividual();
calcularSubtotal();
numeroProductosInfo();

function numeroProductosInfo() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    document.getElementById("info-cantidad").innerHTML = numeroActual;
    if(numeroActual >= 2 || numeroActual == 0) {
        document.getElementById("info-cantidad").innerHTML = numeroActual.toString() + " productos";
    }
    else {
        document.getElementById("info-cantidad").innerHTML = numeroActual.toString() + " producto";
    }
    
}
// calcula la cantidad y el tope del  producto 
function calcularSubtotal() {
    let cantidadElementos = document.getElementById("cantidadProductos").innerHTML;
    let subtotal = valorUnitario * Number(cantidadElementos);
    let subtotalFormat = new Intl.NumberFormat('es-ES').format(subtotal);
    document.getElementById("valorSubtotal").innerHTML = subtotalFormat;
}
function cargarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    if (numeroActual < 50) {
        let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) + Number(1);
    }
    calcularSubtotal();
    numeroProductosInfo();

}
// calcula en numerp de productos que desea, suma y resta 

function restarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    if (numeroActual > 0) {
        let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) - Number(1);
    }
    calcularSubtotal();
    numeroProductosInfo();
}
function valorIndividual() {
    let valorUnitarioFormat = new Intl.NumberFormat('es-ES').format(valorUnitario);
    document.getElementById("valor-unitario").innerHTML = valorUnitarioFormat;
}