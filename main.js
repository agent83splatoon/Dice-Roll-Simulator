// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  // Roll 5 Dice

  let droll = 1;
  

  while (droll <= 5) {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let total = dice1 + dice2;
    console.log(droll);
    droll += 1;
    let pEl = document.createElement("p");
    pEl.innerHTML = `${dice1},${dice2} (sum: ${total})`;
  

    outputEl.appendChild(pEl);
  }

  {
  }
}
function rollNTimes() {
  // Display Menu Title
  let number = prompt("How many times do you want to roll the dice?");
  outputEl.innerHTML = `<h3>ROLL ${number} TIMES</h3>`;
  let droll = 1;
 
  while (droll <= number) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let total = dice1 + dice2
    
    console.log (droll);
    droll += 1;
    let pEl = document.createElement("p");
    pEl.innerHTML = `${dice1},${dice2} (sum: ${total})`;

    outputEl.appendChild(pEl);
  } if (number <= 0) {
    alert("Invalid number. Please try a number above 0.")
  }
} 

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";
 
  let droll = 0;
 
  while (true) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let total = dice1 + dice2
  
    console.log (droll);
    droll += 1;
    let pEl = document.createElement("p");
    pEl.innerHTML = `${dice1},${dice2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  
    if (total === 2) {
      break;
    }
  }
  
  let pEl = document.createElement("p");
  pEl.innerHTML = `Snake eyes! It took ${droll} rolls until snake eyes.`;
  outputEl.appendChild(pEl);
  
}
