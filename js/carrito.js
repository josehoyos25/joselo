let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");
let numSumar = document.getElementById("numSumar");
let cantProductos = document.getElementById("cantProductos");
// Obtener una referencia al botón "Eliminar"
let eliminar = document.getElementById("eliminar");
//simulador proveniente de una BD
let valorUnitarioProducto = 35900;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitarioProducto);
document.getElementById("valorUnitarioProducto").innerHTML = valorUnitarioProductoStr; 

//Restar
numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt > 0) {
        auxInt--;
    document.getElementById("numView").innerHTML = auxInt.toString(); 
    if (auxInt == 1) {
        document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
    }else if (auxInt == 0 || auxInt > 1) {
        document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
    }
}
    let auxSubtotal = auxInt * valorUnitarioProducto;
    let auxSubtotalStr = new Intl.NumberFormat('de-DE').format(auxSubtotal);
    document.getElementById("valorSubtotal").innerHTML = auxSubtotalStr;
})

//Sumar 
numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString(); 
    let auxInt = parseInt(aux);
    if (auxInt < 10) {
        auxInt++
    document.getElementById("numView").innerHTML = auxInt.toString();
    document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
} else if (auxInt == 0 || auxInt > 1) {
    document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
}
    let auxSubtotal = auxInt * valorUnitarioProducto;
    let auxSubtotalStr = new Intl.NumberFormat('de-DE').format(auxSubtotal);
    document.getElementById("valorSubtotal").innerHTML = auxSubtotalStr;
})

//Eliminar
eliminar.addEventListener("click", function () {
    //valores a cero
    document.getElementById("numView").innerHTML = "0";
    document.getElementById("cantProductos").innerHTML = "0 productos";
    document.getElementById("valorSubtotal").innerHTML = "0";
});