let myLife = 5;
let rivalLife = 5;
let round = 0;
let message = "Let's beat him..."
const selections = document.querySelectorAll('.selections');

const roundp = document.querySelector('#round');
roundp.textContent = `Round: ${round}`;

const liveyou = document.querySelector('#liveyou')
liveyou.textContent = `You: ${myLife}`;

const liverival = document.querySelector('#liverival');
liverival.textContent = `Rival ${rivalLife}`;

const messa = document.querySelector('#instaresult');
messa.textContent = message;


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
        message = "You both took the same weapon :/"
        return [0,0];

    } else if (player === 'rock' && computer === 'paper') {
        message = 'Oh no, he took paper.'
        return [1,0];
    } else if (player === 'rock' && computer === 'scissor') {
        message = "Hurray, he took scissor's!"
        return [0,1];

    } else if (player === 'paper' && computer === 'rock') {
        message = "Hurray, he took rock!"
        return [0,1];
    } else if (player === 'paper' && computer === 'scissor') {
        message = "Aww, he took scissor."
        return [1,0];

    } else if (player === 'scissor' && computer === 'rock') {
        message = "Aww, he took rock."
        return [1,0];
    } else if (player === 'scissor' && computer === 'paper') {
        message = "Yoohaa, he took paper."
        return [0,1];
    }
};

scoring = (array) => {
    myLife = myLife - array[0];
    rivalLife = rivalLife - array[1];
}

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let playerSelection = selection.id;
        scoring(play(playerSelection, computerSelection()));
        round++;
        roundp.textContent = `Round: ${round}`;
        liveyou.textContent = `You: ${myLife}`;
        liverival.textContent = `Rival ${rivalLife}`;
        messa.textContent = message;
    });
});

