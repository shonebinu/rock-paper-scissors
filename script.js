"use strict"

const Hands = {
  1: "rock",
  2: "paper",
  3: "scissor"
};

function getComputerChoice() {
  let randomValue = Math.floor((Math.random() * 3) + 1); // get a random number between 1 and 3
  return Hands[randomValue];
}

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection) {
  
    if (playerSelection === computerSelection) {
      console.log("Its a tie");
    } 

    else if (
      (playerSelection === "rock" && computerSelection === "scissor") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissor" && computerSelection === "paper")
    ) {
      console.log(`You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`);
    } 
    
    else {
      console.log(`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`);
    }

  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());  
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());  
});

scissorButton.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());  
});
