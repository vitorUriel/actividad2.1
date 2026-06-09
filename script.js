        const colores = ["red", "blue", "yellow", "purple", "white"];
        
        document.body.addEventListener("click", function() {
            let color = colores[Math.floor(Math.random() * colores.length)];
            document.body.style.backgroundColor = color;
        });
