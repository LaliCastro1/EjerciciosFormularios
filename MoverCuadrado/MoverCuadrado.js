const jugador = document.getElementById('jugador');

const contenedor = document.getElementById('contenedor');

let posicionX = 0;
let posicionY = 0;

const limiteDerecha = contenedor.clientWidth - jugador.clientWidth;
const limiteInferior = contenedor.clientHeight - jugador.clientHeight;

const velocidad = 10; 

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'w': 
            if (posicionY > 0) {
                posicionY -= velocidad;
            }
            break;
        case 's': 
            if (posicionY < limiteInferior) {
                posicionY += velocidad;
            }
            break;
        case 'a': 
            if (posicionX > 0) {
                posicionX -= velocidad;
            }
            break;
        case 'd': 
            if (posicionX < limiteDerecha) {
                posicionX += velocidad;
            }
            break;
        default:
            break;
    }
    
    jugador.style.top = `${posicionY}px`;
    jugador.style.left = `${posicionX}px`;
});
