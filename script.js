document.addEventListener('DOMContentLoaded', () => {
    const btnRed = document.getElementById('btn-red');
    const btnBlue = document.getElementById('btn-blue');
    const buttonsContainer = document.getElementById('buttons');
    const resultArea = document.getElementById('result-area');
    const resultMessage = document.getElementById('result-message');
    const btnRestart = document.getElementById('btn-restart');

    const handlePlay = () => {
        // Ocultar los botones de juego
        buttonsContainer.classList.add('hidden');
        
        // Determinar si gana o pierde de forma aleatoria (50% de probabilidad)
        const isWin = Math.random() >= 0.5;
        
        if (isWin) {
            resultMessage.textContent = '¡Has ganado! 🎉';
            resultMessage.style.color = '#4ade80'; // Verde para victoria
        } else {
            resultMessage.textContent = 'Has perdido 😢';
            resultMessage.style.color = '#f87171'; // Rojo para derrota
        }
        
        // Mostrar el área de resultado
        resultArea.classList.remove('hidden');
    };

    const handleRestart = () => {
        // Ocultar el área de resultado
        resultArea.classList.add('hidden');
        
        // Mostrar los botones de juego
        buttonsContainer.classList.remove('hidden');
    };

    // Asignar eventos a los botones
    btnRed.addEventListener('click', handlePlay);
    btnBlue.addEventListener('click', handlePlay);
    btnRestart.addEventListener('click', handleRestart);
});
