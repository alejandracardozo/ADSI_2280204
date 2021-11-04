function mostrarMenu() {
    var navMostrar= document.getElementById("menu-principal");
    navMostrar.classList.toggle("mostrarNav")
}
function ocultarMenu() {
    var navMostrar= document.getElementById("menu-principal");
    navMostrar.classList.toggle("mostrarNav")
}

 $(document).ready(main);
var contador =0;

function main() {
    $(".hamburger-menu").click(function() {
        if(contador ==0) {
            $("nav").animate({
                left: "0"
            });
            contador=1;
        }
        else {
            $("nav").animate({
                left: "-100%"

            });
            contador=0;
        }
    });
}
