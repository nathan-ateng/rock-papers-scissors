"use strict";

let totalScores = { computerScore: 0, playerScore: 0 };
// create "getcomputerChoice function"
// Does: randomly selects between rock, papers and scissors and returns what computer selects
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

// create "getResult" function
// Does: gets the result and returns scores based on who won, drew or lost
function getResult(playerChoice, computerChoice) {
  // create variable to store the scores
  let score = 0;

  // For all situations where human wins, set score to 1

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  // return score
  return score;
}

// create showResult function
// Does: updates the dom
function showResult(score, playerChoice, computerChoice) {
  // select result div to display in the dom
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  // update the dom to show choice of player and computer
  handsDiv.innerText = `${playerChoice} Vs ${computerChoice}`;
  playerScoreDiv.innerText = `Your score is: ${totalScores["playerScore"]}`;
  if (score == -1) {
    resultDiv.innerText = "You Lost";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie";
  } else {
    resultDiv.innerText = "You win!";
  }
}
// creat playGame function
//Does: allws usser to play game
function onclickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScores["playerScore"] += score;
  showResult(score, playerChoice, computerChoice);
}
function playGame() {
  // use query selector to select all buttons
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onclickRPS(rpsButton.value);
  });
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScores);
}

// create ebdGame  function
//Does: ends game and clears all text on the dom
function endGame(totalScore) {
  totalScores["playerScore"] = 0;
  totalScores["computerScore"] = 0;
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
}
playGame();
