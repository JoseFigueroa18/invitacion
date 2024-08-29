const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
    const btnWidth = noBtn.clientWidth;
    const btnHeight = noBtn.clientHeight;

    // Limites calculados para que el botón no se salga de la pantalla
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'mensaje.html';
});
