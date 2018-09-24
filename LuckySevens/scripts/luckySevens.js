// Creator: Charli Blank
// Date Created: 22 September, 2018
// Date Last Revised: 23 September, 2018

// Name - clearErrors()
// Purpose - reset form fields to natural state
// Input - none
// Output - none
function clearErrors() {
  for (var loopCounter = 0; loopCounter < document.forms["bet"].elements.length; loopCounter++){
    if (document.forms["bet"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
      document.forms["bet"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}

// Name - resetForm()
// Purpose - clear all fields in the <form>
// Input - none
// Output - none
function resetForm() {
  clearErrors();
  document.forms["bet"]["startingBet"].value = "";
  document.getElementById("showResult").style.display = "none";
  document.getElementById("playButton").innerText = "Play";
  document.forms["bet"]["startingBet"].focus();
}

// Name - rollDie()
// Input - none
// Output - random number between 1 and 6
function rollDice() {
  var die1 = 0;
  var die2 = 0;
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  return die1 + die2;
}

// Name - validateInput()
// Purpose - verify user input is as expected
// Input - none
// Output - none
function validateInput() {
  clearErrors();
  var start = document.forms["bet"]["startingBet"].value;
  if (start == "" || isNaN(start)) {
    alert("Starting bet must be a number.");
    document.forms["bet"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["bet"]["startingBet"].focus();
    return true;
  }
}

// Name - playLuckySevens()
// Input - none
// Output - false
function playLuckySevens() {

// if statement suppressed table only when input is invalid
  if (validateInput()){
  return true;
}

  var startingBet = 0;
  var gameMoney = 0;
  var rolls = 0;
  var max = gameMoney;
  var rollsAtMax = 0;

  startingBet = document.forms["bet"]["startingBet"].value;
  gameMoney = Number(startingBet);

  while (gameMoney > 0) {
    if (rollDice() == 7) {
      gameMoney += 4;
    } else {
      gameMoney--;
    }
    rolls++;
    if (gameMoney > max) {
      max = gameMoney;
      rollsAtMax = rolls;
    }
    // Use to verify accuracy of game parameters - console.log(gameMoney);
  }
  document.getElementById("showResult").style.display = "block";
  document.getElementById("startBet").innerText = startingBet;
  document.getElementById("totalRolls").innerText = rolls;
  document.getElementById("maxAmount").innerText = max;
  document.getElementById("rollAtMax").innerText = rollsAtMax;

  // Return false so form does NOT submit and results will display
  return false;
}
