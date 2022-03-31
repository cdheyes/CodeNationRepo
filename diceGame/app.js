// initialise variables
const bust = 20;
let total = 0;
let dice = 0;
let diceString = "";

// initialise DOM links
const numDisplay = document.getElementById('numDisplay');
const totalDisplay = document.getElementById('totalDisplay');
const rollClick = document.getElementById("rollClick");
const diceImage = document.getElementById("diceImage");

// button listener dice roller
rollClick.addEventListener("click", (event) => {
  
  // Dice roll and show
  dice = Math.floor(Math.random() * 6) + 1;
  total += dice;
  diceSwitchFace();
  
  // Game logic
  if (dice == 1) {
    numDisplay.innerHTML = `It's a 1!`;
    totalDisplay.innerHTML = `YOU LOSE!`;
    rollClick.innerHTML = "RESTART";
    restartGame();
  }
  else if (total >= bust) {
    numDisplay.innerHTML = `Rolled a ${dice}`;
    totalDisplay.innerHTML = `Winner!`;
    rollClick.innerHTML = "RESTART";
    restartGame();
  }
  else {
    numDisplay.innerHTML = `Rolled a ${dice}`;
    totalDisplay.innerHTML = `${total}`;
  }
});

// switch the dice image
function diceSwitchFace() {
    diceString = dice.toString();
    switch (diceString) {
    case "1": diceImage.src = `images/diceFace_1.png`;
              break;
    case "2": diceImage.src = `images/diceFace_2.png`;
              break;
    case "3": diceImage.src = `images/diceFace_3.png`;
              break;
    case "4": diceImage.src = `images/diceFace_4.png`;
              break;
    case "5": diceImage.src = `images/diceFace_5.png`;
              break;
    case "6": diceImage.src = `images/diceFace_6.png`;
              break;
    default: numDisplay.innerHTML = `this is not used`;
  } 
}

function restartGame() {
rollClick.addEventListener("click", (event) => {
  location.reload();
  });
};
// 
