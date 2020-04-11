

function rollDice() {
  var diceRollPlayerOne = Math.floor((Math.random() * 6) + 1);
  var diceRollPlayerTwo = Math.floor((Math.random() * 6) + 1);
  var playerOneImage = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + diceRollPlayerOne + ".png");
  var playerTwoImage = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + diceRollPlayerTwo + ".png");

  if (diceRollPlayerOne > diceRollPlayerTwo) {

    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";

  } else if (diceRollPlayerOne < diceRollPlayerTwo) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector(".container h1").innerHTML = "Tie!";
  }
}
