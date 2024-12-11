const corazones = document.querySelectorAll('.icono-heart i');

// Añadir evento de clic a cada corazón
corazones.forEach(corazon => {
    corazon.addEventListener('click', () => {
        corazon.classList.toggle('active'); // Activa o desactiva la clase 'active'
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".contenedor-carrusel");
    const tarjetas = document.querySelectorAll(".tarjeta");
    const btnAnterior = document.querySelector(".carrusel-anterior");
    const btnSiguiente = document.querySelector(".carrusel-siguiente");

    let indice = 0;
    const tarjetasVisibles = 5; // Número de tarjetas visibles por pantalla
    const totalTarjetas = tarjetas.length;

    function actualizarCarrusel() {
        const anchoTarjeta = tarjetas[0].offsetWidth;
        carrusel.style.transform = `translateX(-${indice * anchoTarjeta}px)`;
    }

    btnSiguiente.addEventListener("click", () => {
        if (indice < totalTarjetas - tarjetasVisibles) {
            indice += tarjetasVisibles;
            actualizarCarrusel();
        } else {
            indice = 0; 
            actualizarCarrusel();
        }
    });

    btnAnterior.addEventListener("click", () => {
        if (indice > 0) {
            indice -= tarjetasVisibles;
            actualizarCarrusel();
        } else {
            indice = Math.max(0, totalTarjetas - tarjetasVisibles);
            actualizarCarrusel();
        }
    });

    
    window.addEventListener("resize", actualizarCarrusel);

    
    actualizarCarrusel();
});