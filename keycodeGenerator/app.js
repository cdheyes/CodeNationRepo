const codeDisplay = document.getElementById('codeDisplay');
const keyDisplay = document.getElementById('keyDisplay');
const whichDisplay = document.getElementById('whichDisplay');

document.addEventListener('keydown', (event) => {
    codeDisplay.textContent = ` ${event.code}`;
    keyDisplay.textContent = ` ${event.key}`;
    whichDisplay.textContent = ` ${event.which}`;
});
