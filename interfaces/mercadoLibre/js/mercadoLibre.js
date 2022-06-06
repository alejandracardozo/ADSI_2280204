
class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Atrapa sueños","grande","","Dirigen los buenos sueños y desvían los malos sueños de la persona.","50000","","San Agustin ","img/atrapasueños.jpg");
let car2= new automovil("llaveros","atrapa sueños","","Hechos a mano","10000","","San Agustin","img/imagen5.jpg");
let car3= new automovil("llaveros","cuarso","","porque repelen las malas energias y atraen las buenas vibraciones","10000","","San Agustin","img/llaveros.jpg");

function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contimg.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contimg.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contimg.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contimg.appendChild(yearcar);

    // let kilometrajecar=document.createElement("label");
    // let textkilometraje=document.createTextNode(car.kilometraje+"km");
    // kilometrajecar.appendChild(textkilometraje);
    // kilometrajecar.setAttribute("class","kilometraje");
    // contenedorPrincipal.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contimg.appendChild(city);
}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="atrapa sueños"){
            Busqueda(car1);           
        }
        else if(Busq=="llaveros"){
            Busqueda(car2);
             Busqueda(car3);
        }
    
        
        else if(Busq=="llaveros"){
           
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}