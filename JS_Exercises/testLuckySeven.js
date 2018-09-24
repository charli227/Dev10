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

// Name - playLuckySevens()
// Input -
// Output -
function playLuckySevens() {
  var startingBet = 50;
  var gameMoney = startingBet;
  var rolls = 0;
  var max = 0;
  var rollsAtMax = 0;

  do {
    if (rollDice() == 7) {
      gameMoney += 4;
    } else {
      gameMoney--;
    }
    rolls++;
    if (gameMoney > max) {
      max = gameMoney;
      rollsAtMax = rolls;
    } console.log(gameMoney);
  } while (gameMoney > 0);
  console.log(startingBet);
  console.log(rolls);
  console.log(max);
  console.log(rollsAtMax);
}
