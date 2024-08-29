const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Función para mover el botón "no" a una posición aleatoria
function moveButton() {
    const btnWidth = noBtn.clientWidth;
    const btnHeight = noBtn.clientHeight;

    // Limites calculados para que el botón no se salga de la pantalla
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute'; // Asegura que el botón esté en posición absoluta
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Para escritorio: se mueve cuando el mouse pasa por encima
noBtn.addEventListener('mouseover', moveButton);

// Para dispositivos móviles: se mueve cuando se toca
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    window.location.href = 'mensaje.html';
});
