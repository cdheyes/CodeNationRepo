// initialise variables
const bust = 20;
let total = 0;
let dice = 0;

// initialise DOM links
const numDisplay = document.getElementById('numDisplay');
const totalDisplay = document.getElementById('totalDisplay');
const rollClick = document.getElementById("rollClick");

// button listener dice roller
rollClick.addEventListener("click", (event) => {
  dice = generateDiceNumber();
  total += dice;
  if (total <= bust) {
    numDisplay.innerHTML = `Rolled a ${dice}.`;
    totalDisplay.innerHTML = `Total is ${total}.`;
  }
  else {
    numDisplay.innerHTML = `Rolled a ${dice}.`;
    totalDisplay.innerHTML = `You have BUST!!!`;
    total = 0;
  };
});


function generateDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
};


// dice score function
// function diceScore(dice) {
//     switch (dice) {
//     case "1": numDisplay.textContent = `Rolled a ${dice}. Total is ${total}`;
//               // audio = new Audio('sounds/boom.wav');
//               // audio.play(); 
//               break;
//     case "2": numDisplay.textContent = `2`;
//               break;
//     case "3": numDisplay.textContent = `3`;
//               break;
//     case "4": numDisplay.textContent = `4`;
//               break;
//     case "5": numDisplay.textContent = `5`;
//               break;
//     case "6": numDisplay.textContent = `6`;
//               break;
//     default: numDisplay.textContent = `${keyPressed} is not used`;
//   } 
// }




