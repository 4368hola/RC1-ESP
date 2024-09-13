document.addEventListener('DOMContentLoaded', () => {
    const lightbulb = document.getElementById('lightbulb');
    const turnOnButton = document.getElementById('turnOn');
    const turnOffButton = document.getElementById('turnOff');

    turnOnButton.addEventListener('click', () => {
        lightbulb.classList.add('on');
        lightbulb.style.opacity = '1';
    });

    turnOffButton.addEventListener('click', () => {
        lightbulb.classList.remove('on');
        lightbulb.style.opacity = '0.2';
    });
});
