// initialise variables
let keyPressed = "";
let audio = new Audio();

// initialise DOM links
const numDisplay = document.getElementById('numDisplay');
const boomClick = document.getElementById("boomClick");
const clapClick = document.getElementById("clapClick");
const hihatClick = document.getElementById("hihatClick");
const kickClick = document.getElementById("kickClick");
const openhatClick = document.getElementById("openhatClick");
const rideClick = document.getElementById("rideClick");
const snareClick = document.getElementById("snareClick");
const tinkClick = document.getElementById("tinkClick");
const tomClick = document.getElementById("tomClick");

// keyboard listener
document.addEventListener('keydown', (event) => {
  keyPressed = `${event.key}`; triggerAudio(event);
});

// button id listeners
boomClick.addEventListener("click", (event) => {
  keyPressed = "1"; triggerAudio(event);});
clapClick.addEventListener("click", (event) => {
  keyPressed = "2"; triggerAudio(event);});
hihatClick.addEventListener("click", (event) => {
  keyPressed = "3"; triggerAudio(event);});
kickClick.addEventListener("click", (event) => {
  keyPressed = "4"; triggerAudio(event);});
openhatClick.addEventListener("click", (event) => {
  keyPressed = "5"; triggerAudio(event);});
rideClick.addEventListener("click", (event) => {
  keyPressed = "6"; triggerAudio(event);});
snareClick.addEventListener("click", (event) => {
  keyPressed = "7"; triggerAudio(event);});
tinkClick.addEventListener("click", (event) => {
  keyPressed = "8"; triggerAudio(event);});
tomClick.addEventListener("click", (event) => {
  keyPressed = "9"; triggerAudio(event);});

// audio trigger function
function triggerAudio(event) {
    switch (keyPressed) {
    case "1": numDisplay.textContent = `BOOM!`;
              audio = new Audio('sounds/boom.wav');
              audio.play(); break;
    case "2": numDisplay.textContent = `CLAP!`;
              audio = new Audio('sounds/clap.wav');
              audio.play(); break;
    case "3": numDisplay.textContent = `HIHAT!`;
              audio = new Audio('sounds/hihat.wav');
              audio.play(); break;
    case "4": numDisplay.textContent = `KICK!`;
              audio = new Audio('sounds/kick.wav');
              audio.play(); break;
    case "5": numDisplay.textContent = `OPENHAT!`;
              audio = new Audio('sounds/openhat.wav');
              audio.play(); break;
    case "6": numDisplay.textContent = `RIDE!`;
              audio = new Audio('sounds/ride.wav');
              audio.play(); break;
    case "7": numDisplay.textContent = `SNARE!`;
              audio = new Audio('sounds/snare.wav');
              audio.play(); break;
    case "8": numDisplay.textContent = `TINK!`;
              audio = new Audio('sounds/tink.wav');
              audio.play(); break;
    case "9": numDisplay.textContent = `TOM!`;
              audio = new Audio('sounds/tom.wav');
              audio.play(); break;
    default: numDisplay.textContent = `${keyPressed} is not used`;
  } 
}




