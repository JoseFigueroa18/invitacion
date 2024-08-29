// script.js
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');

function moveButton() {
    const btnWidth = noBtn.clientWidth;
    const btnHeight = noBtn.clientHeight;

    // Limites calculados para que el botón no se salga del contenedor
    const maxX = container.clientWidth - btnWidth;
    const maxY = container.clientHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

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
