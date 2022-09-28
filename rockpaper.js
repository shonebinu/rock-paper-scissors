function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    const array = ['rock', 'paper', 'scissor'];
    return array[randomNum];
}

function getPlayerSelection() {
    let inputNum = prompt("Rock, Paper or Scissor?");
    return inputNum.toLowerCase();
}

let computerChoice = getComputerChoice();
let playerSelection = getPlayerSelection();

function playRound(computerChoice, playerSelection) {
    if (computerChoice === playerSelection) {
        return "It's a tie. You both chose " + computerChoice;

    } else if (computerChoice==='rock' && playerSelection==='paper') {
        return "You won. " + playerSelection + " beats the " + computerChoice + '.';
    } else if (computerChoice==='rock' && playerSelection==='scissor') {
        return "You lose. " + computerChoice + " beats the " + playerSelection + '.';

    } else if (computerChoice==='paper' && playerSelection==='scissor') {
        return "You won. " + playerSelection + " beats the " + computerChoice + '.';
    } else if (computerChoice==='paper' && playerSelection==='rock') {
        return "You lose. " + computerChoice + " beats the " + playerSelection + '.';

    } else if (computerChoice==='scissor' && playerSelection==='rock') {
        return "You won. " + playerSelection + " beats the " + computerChoice + '.';
    } else if (computerChoice==='scissor' && playerSelection==='paper') {
        return "You lose. " + computerChoice + " beats the " + playerSelection + '.';

}
}

console.log(playRound(computerChoice, playerSelection));