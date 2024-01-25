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
    console.warn("Hey hey, wrong input.");
    return 0;
  } 
  else {
    return playerSelection;
  }
}

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection) {
  
    if (playerSelection === computerSelection) {
      console.log("Its a tie");
      return 0;
    } 

    else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log(`You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`);
      return 1;
    } 
    
    else {
      console.log(`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`);
      return 2;
    }

  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5;) {
    let playerSelection = getPlayerSelection(); 
    let computerChoice = getComputerChoice();
    let playResult = playRound(playerSelection, computerChoice);

    if (playerSelection) { // only increment the counter if the user entered input correctly
      i++;
    }

    if (playResult === 1) {
      playerScore++;
    }
    else if (playResult === 2) {
      computerScore++;
    }
  }

  console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`);

  if (playerScore === computerScore) {
    console.log("It's a tie");
  }
  else if (playerScore < computerScore) {
    console.log("You lose, I'm sorry you loser");
  }
  else if (playerScore > computerScore) {
    console.log("You won, Heck yeah!");
  }
}

game();
