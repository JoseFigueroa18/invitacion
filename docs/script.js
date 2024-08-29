// script.js
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');

function moveButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Obtener los límites del contenedor
    const containerRect = container.getBoundingClientRect();

    // Limites calculados para que el botón no se salga del contenedor
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;

    // Posicionamiento aleatorio dentro de los límites
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Aplicar la posición dentro del contenedor
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
