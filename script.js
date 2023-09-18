"use strict";

// get computerChoice function
// Does: randomly selects between rock, papers and scissors and returns what computer selects
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}
//console.log(getComputerChoice());
