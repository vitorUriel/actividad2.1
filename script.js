// Esta función únicamente se ejecuta si estamos en la página foter.html
if (window.location.pathname.includes('foter.html')) {
    document.body.addEventListener('click', () => {
        // Generar un color aleatorio claro usando HSL
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 60%, 80%)`;
        document.body.style.backgroundColor = randomColor;
        console.log(`Color de fondo cambiado a: ${randomColor}`);
    });
}
