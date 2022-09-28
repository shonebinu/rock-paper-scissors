function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    const array = ['rock', 'paper', 'scissor'];
    return array[randomNum];
}

function getPlayerSelection() {
    let inputNum = prompt("Rock, Paper or Scissor?");
    return inputNum.toLowerCase();
}

function playRound(computerChoice, playerSelection) {
    if (computerChoice === playerSelection) {
        return "It's a tie. You both chose " + computerChoice + '.';

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


function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let oneResult = playRound(getComputerChoice(), getPlayerSelection());
        console.log(oneResult)
        if (oneResult.includes('won')) {
            playerScore ++;
        } else if (oneResult.includes('lose')) {
            computerScore ++;
        }
        
    }

    if (computerScore>playerScore) {
        return 'You lose. Computer scored ' + computerScore + ', while you only got ' + playerScore + '.';
    } else {
        return 'You win. You scored ' + playerScore + ', while Computer only got ' + computerScore + '.';
    }
}


console.log(game());