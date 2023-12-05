document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('input[type="number"]');
    const button = document.querySelector('button');
    const starsContainer = document.querySelector('.estrellas p');

    button.addEventListener('click', function () {
        const calificacion = parseFloat(input.value);

        if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 5) {
            mostrarEstrellas(calificacion);
        } else {
            alert('Por favor, ingrese una calificación válida de 0 a 5.');
        }
    });

    function mostrarEstrellas(calificacion) {
        const estrellas = starsContainer.querySelectorAll('i');

        estrellas.forEach((estrella, index) => {
            const valorEstrella = index + 1;

            if (calificacion === 5) {
                estrella.classList.remove('fa-regular');
                estrella.classList.remove('fa-star-half-stroke');
                estrella.classList.add('fa-solid', 'animate-star');
            } else if (valorEstrella <= calificacion) {
                estrella.classList.remove('fa-regular');
                estrella.classList.remove('fa-star-half-stroke');
                estrella.classList.add('fa-solid', 'animate-star');
            } else {
                estrella.classList.remove('fa-solid');
                estrella.classList.remove('animate-star');
                estrella.classList.add('fa-regular');
            }
        });
    }
});
