document.getElementById('generar').addEventListener('click', function() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    const cuadrado = document.getElementById('cuadrado');

    cuadrado.innerHTML = '';

    cuadrado.style.gridTemplateRows = `repeat(${filas}, 1fr)`;
    cuadrado.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
    
    for (let i = 0; i < filas * columnas; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');

        celda.addEventListener('mouseover', function() {
            celda.style.backgroundColor = generarColorRandom();
        });

        celda.addEventListener('mouseout', function() {
            setTimeout(function() {
                celda.style.backgroundColor = '';  
            }, 500);  
        });

        cuadrado.appendChild(celda);
    }
});

function generarColorRandom() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
