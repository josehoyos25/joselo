
//Ejecutar en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//Declaramos variables
var side_menu = document.getElementById("menu_side");
var betn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//evento para mostrar y ocultar manú
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}
//si el ancho de la pagina es menor a 760px, ocultara el menu al recargar la pagina
if(windows.innerwidth < 760){
    body.classList.and("body_move");
    side_menu.classList.add("menu_side_move");
}
//haciendo el menu responsive(adaptable)
window.addEventListener("resise", function (){
    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side.move");
}
    if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu_side.move");
}


})
