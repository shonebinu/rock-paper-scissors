"use strict"

const Hands = {
  1: "rock",
  2: "paper",
  3: "scissor"
};

let playerWin = 0, computerWin = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const restartButton = document.querySelector("#restart");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorButton.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});

restartButton.addEventListener("click", () => {
  playerWin = computerWin = 0;
  updateScoreBoard(playerWin, computerWin);
});

function getComputerChoice() {
  let randomValue = Math.floor((Math.random() * 3) + 1); // get a random number between 1 and 3
  return Hands[randomValue];
}

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function updateScoreBoard(userScore, computerScore) {
  const scoreBoard = document.querySelector("#scoreboard");
  scoreBoard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerWin === 5 || computerWin === 5) 
    return;
  
  const resultDiv = document.querySelector("#result");
  const finalResultDiv = document.querySelector("#finalResult");

  if (playerSelection === computerSelection) {
    resultDiv.textContent = "Its a tie";
  } 

  else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    resultDiv.textContent = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    playerWin++;
  } 
 
  else {
    resultDiv.textContent = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    computerWin++;
  }

  updateScoreBoard(playerWin, computerWin);

  if (playerWin === 5) {
    finalResultDiv.textContent = "You won!";
  }
  else if (computerWin === 5) {
    finalResultDiv.textContent = "You lose!";
  }
}
