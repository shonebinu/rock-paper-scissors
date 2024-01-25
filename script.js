"use strict"

const Hands = {
  1: "rock",
  2: "paper",
  3: "scissors"
};

function getComputerChoice() {
  let randomValue = Math.floor((Math.random() * 3) + 1);
  return Hands[randomValue];
}

function getPlayerSelection() {
  const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  if (!Object.values(Hands).includes(playerSelection)) {
    console.warn("Hey hey, wrong input, reload the page and enter the correct input.");
    return 0;
  } else {
    return playerSelection;
  }
}

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) {
    return 0;
  } 
  
  if (playerSelection === computerSelection) {
    console.log("Its a tie");
    playRound(getPlayerSelection(), getComputerChoice());
  } 

  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`);
  } 
  
  else {
    console.log(`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`);
  }
}

playRound(getPlayerSelection(), getComputerChoice());
