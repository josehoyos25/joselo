let calificacion1 = document.getElementById("calificacion1");
let calificacion2 = document.getElementById("calificacion2");
let calificacion3 = document.getElementById("calificacion3");
let calificacion4 = document.getElementById("calificacion4");
let calificacion5 = document.getElementById("calificacion5");
let btnGraficar = document.getElementById("btnGraficar");

btnGraficar.addEventListener("click", function() {
    let sumaCalificacion = (
        Number(calificacion1.value) +
        Number(calificacion2.value) +
        Number(calificacion3.value) +
        Number(calificacion4.value) +
        Number(calificacion5.value)
    );

    // Verificar si la suma es mayor a cero para evitar división por cero
    if (sumaCalificacion > 0) {
        let promedio1Estrella = (Number(calificacion1.value) / sumaCalificacion) * 100;
        let promedio2Estrella = (Number(calificacion2.value) / sumaCalificacion) * 100;
        let promedio3Estrella = (Number(calificacion3.value) / sumaCalificacion) * 100;
        let promedio4Estrella = (Number(calificacion4.value) / sumaCalificacion) * 100;
        let promedio5Estrella = (Number(calificacion5.value) / sumaCalificacion) * 100;

        // Mostrar resultados
        console.log("Porcentaje 1 Estrella: " + promedio1Estrella.toFixed(2) + "%");
        console.log("Porcentaje 2 Estrellas: " + promedio2Estrella.toFixed(2) + "%");
        console.log("Porcentaje 3 Estrellas: " + promedio3Estrella.toFixed(2) + "%");
        console.log("Porcentaje 4 Estrellas: " + promedio4Estrella.toFixed(2) + "%");
        console.log("Porcentaje 5 Estrellas: " + promedio5Estrella.toFixed(2) + "%");
    } else {
        console.log("La suma de calificaciones es cero. No se puede calcular el porcentaje.");
    }
});
