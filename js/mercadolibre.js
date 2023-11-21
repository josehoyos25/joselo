//cuando se trabaja con objetos, se construye la clase 
let inputBusqueda = document.getElementById("inputBusqueda")
class Automovil {
    constructor(marca, modelo, precio, year, kilometros, ubicacion, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.year = year;
        this.kilometros = kilometros;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }
}
let auto1 = new Automovil("Toyota", "TXL", 150000000, "2021 ·", " 25.400 km ·", " Pitalito-Huila", "img/Toyota_Prado.jpg");
let auto2 = new Automovil("Mazda-2", " Sedan", 80700000, "2019 ·", " 12.000 km ·", " Pitalito-Huila", "img/mazda.jfif");
let auto3 = new Automovil("Chevrolet", " Silverado Trail Boss Z71", 267990000, "2023 ·", " 0 km ·", " Pitalito-Huila", "img/silverado.png");
let auto4 = new Automovil("Renault", " Duster Iconic ", 91000000, "2024 ·", " 0 Km ·", " Pitalito-Huila", "img/duster.jpg");
let auto5 = new Automovil("Renoult", " Kwid Outsider", 59220000, "2024 ·", " 0 km ·", " Pitalito-Huila", "img/outsider.webp");


/* for (contador = 1; contador <= 2; contador++){ */
        /* Funcion para cargar el vehículo */
    CargarVehiculo(auto1);
    CargarVehiculo(auto2);
    CargarVehiculo(auto3);
    CargarVehiculo(auto4); 
    CargarVehiculo(auto5);

    window.addEventListener("keydown", function(event) {
        let busqueda = inputBusqueda.value;
        if (event.key == "Enter") {
            mainContent.innerHTML = "";  // Corrige aquí el nombre de la propiedad
            let inputUser = busqueda.toLowerCase();
            if (inputUser == "mazda") {
                CargarVehiculo(auto2);
            } else if (inputUser == "renault") {
                CargarVehiculo(auto4);
                CargarVehiculo(auto5);
            } else if (inputUser == "chevrolet") {
                CargarVehiculo(auto3);
            } else if (inputUser == "toyota") {
                CargarVehiculo(auto1);
            }
        }
    });

function CargarVehiculo(auto) {
    let boxProductos = document.getElementById("boxProductos");

    /* Caja del producto */
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-productos");

    /* Caja para la imagen */
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-auto")

    /* Caja para información */
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let textNodeMarca = document.createTextNode(auto.marca + "" + auto.modelo);
    marca.appendChild(textNodeMarca);
    marca.setAttribute("class", "marca");

    /* Precio */
    let  precio= document.createElement("label");
    boxInfo.appendChild(precio);
    let precioStr = Intl.NumberFormat('de-DE').format(auto.precio);
    let textNodePrecio = document.createTextNode("$" + precioStr);
    precio.appendChild(textNodePrecio);
    precio.setAttribute("class", "precio")

    /* año */
    let  año = document.createElement("label");
    boxInfo.appendChild(año);
    let añoStr = auto.year;
    let textNodeAño = document.createTextNode(añoStr);
    año.appendChild(textNodeAño);
    año.setAttribute("class", "año")

    /* kilometros */
    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let kilometrosStr = auto.kilometros;
    let textNodeKilometros = document.createTextNode(kilometrosStr);
    kilometros.appendChild(textNodeKilometros);
    kilometros.setAttribute("class", "kilometros")

    /* Ubicación */
    let ubicacion = document.createElement("label");
    boxInfo.appendChild(ubicacion);
    let ubicacionStr = auto.ubicacion;
    let textNodeUbicacion = document.createTextNode(ubicacionStr);
    ubicacion.appendChild(textNodeUbicacion);
    ubicacion.setAttribute("class", "ubicacion")

    /* Icono corazón */
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon"); 
    iconoCorazon.setAttribute("class", "icono-corazon fa-regular fa-heart");

    /* Linea divisora */
    let lineaDiv = document.createElement("hr");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");
}
    /* Filtros */
    cargarFiltro();
    
    function cargarFiltro() {
        let boxFiltro = document.createElement("div");
        mainContent.appendChild(boxFiltro);
        boxFiltro.setAttribute("class", "box-filtro");
    }

    
    /* Toggle */
    let boxToggle = document.getElementById("boxToggle");
    let buttonToggle = document.getElementById("buttonToggle");

    boxToggle.addEventListener("click", () =>{
        if (boxToggle.classList.contains("box-toggle-off")) {
        boxToggle.classList.add("box-toggle-on");
        boxToggle.classList.remove("box-toggle-off");
        buttonToggle.classList.add("button-toggle-on");
        buttonToggle.classList.remove("button-toggle-off");
        }
        else{
            boxToggle.classList.remove("box-toggle-on");
            boxToggle.classList.add("box-toggle-off");
            buttonToggle.classList.remove("button-toggle-on");
            buttonToggle.classList.add("button-toggle-off");
        }
    });