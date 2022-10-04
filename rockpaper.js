/*
const buttons = document.querySelectorAll("button");

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
        return 'tie';

    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissor') {
        return 'win';

    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissor') {
        return 'lose';

    } else if (player === 'scissor' && computer === 'rock') {
        return 'lose';
    } else if (player === 'scissor' && computer === 'paper') {
        return 'win';
    }
};


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        selection = button.id;
        play(selection, computerSelection());
    });
});
*/