// "use strict";

// // create "getcomputerChoice function"
// // Does: randomly selects between rock, papers and scissors and returns what computer selects
// function getComputerChoice() {
//   const rpsChoice = ["Rock", "Paper", "Scissors"];
//   const randomNumber = Math.floor(Math.random() * 3);
//   return rpsChoice[randomNumber];
// }

// // create "getResult" function
// // Does: gets the result and returns scores based on who won, drew or lost
// function getResult(playerChoice, computerChoice) {
//   // create variable to store the scores
//   let score = 0;

//   // For all situations where human wins, set score to 1

//   if (playerChoice == computerChoice) {
//     score = 0;
//   } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
//     score = 1;
//   } else if (playerChoice == "Paper" && computerChoice == "Rock") {
//     score = 1;
//   } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
//     score = 1;
//   } else {
//     score = -1;
//   }
//   // return score
//   return score;
// }

// // creat playGame function
// //Does: allws usser to play game
// function onclickRPS(playerChoice) {
//   console.log(playerChoice);
// }
// function playGame() {
//   // use query selector to select all buttons
//   const rpsButtons = document.querySelectorAll(".rpsButton");
//   rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);
//   rpsButtons.forEach((rpsButton) => {
//     rpsButton.onclick = () => onclickRPS(rpsButton.value);
//   });
// }

// playGame();

// console.log("me");

console.log("hello");
