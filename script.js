function comprar() {
    alert("¡Producto agregado al carrito!");
}
        const colores = ["red", "blue", "yellow", "purple", "white"];
        
        document.body.addEventListener("click", function() {
            let color = colores[Math.floor(Math.random() * colores.length)];
            document.body.style.backgroundColor = color;
        });
document.getElementById('botonAlert').addEventListener('click', ()=>{
            alert('Alerta de Nosotros')
        })
