let myLife = 5;
let rivalLife = 5;
let round = 0;
let message = "Let's beat him!"

function computerSelection() {
    selection = Math.floor(Math.random() * (3));
    switch (selection) {
        case 0:
           return 'rock';
           break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break; 
    };
};

play = (player, computer) => {
    if (player === computer) {
        return [1,1];

    } else if (player === 'rock' && computer === 'paper') {
        return [0,1];
    } else if (player === 'rock' && computer === 'scissor') {
        return [1,0];

    } else if (player === 'paper' && computer === 'rock') {
        return [1,0];
    } else if (player === 'paper' && computer === 'scissor') {
        return [0,1];

    } else if (player === 'scissor' && computer === 'rock') {
        return [0,1];
    } else if (player === 'scissor' && computer === 'paper') {
        return [1,0];
    }
};

const selections = document.querySelectorAll('.selections');

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let playerSelection = selection.id;
        play(playerSelection, computerSelection());
    });
});


const roundp = document.querySelector('#round');
roundp.textContent = `Round: ${round}`;

const liveyou = document.querySelector('#liveyou')
liveyou.textContent = `You: ${myLife}`;

const liverival = document.querySelector('#liverival');
liverival.textContent = `Rival ${rivalLife}`

const messa = document.querySelector('#instaresult');
messa.textContent = message;