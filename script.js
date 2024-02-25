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

updateScoreBoard(playerWin, computerWin);

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorButton.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
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
  
  const resultH3 = document.querySelector("#resultH3");
  const resultP = document.querySelector("#resultP");

  if (playerSelection === computerSelection) {
    resultH3.textContent = "Tie";
    resultP.textContent = "Both chose the same";
  } 

  else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    resultH3.textContent = "You WIN";
    resultP.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    playerWin++;
  } 
 
  else {
    resultH3.textContent = "You LOSE";
    resultP.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    computerWin++;
  }

  updateScoreBoard(playerWin, computerWin);

  if (playerWin === 5 || computerWin === 5) {
   updateResultDialog(playerWin, computerWin); 
  }
}

function updateResultDialog(playerWin, computerWin) {
  const dialog = document.querySelector("#finalResult");
  const finalResultP = document.querySelector("#finalResultP");
  const restartButton = document.querySelector("#restart");

  if (playerWin === 5) {
    finalResultP.textContent = "You won the game";
  }
  else if (computerWin === 5) {
    finalResultP.textContent = "You lost the game";
  }
  
  dialog.showModal();

  restartButton.addEventListener("click", () => {
    location.reload();
  });
}
