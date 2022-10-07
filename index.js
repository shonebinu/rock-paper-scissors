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
liverival.textContent = `Enemy: ${rivalLife}`;

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

const body = document.querySelector('body');

playerLose = () => {
    body.innerHTML = "<div id='last'><iframe style = 'padding: 10px;' src='https://giphy.com/embed/4QFAH0qZ0LQnIwVYKT' width='480' height='345' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/cbc-schitts-creek-4QFAH0qZ0LQnIwVYKT'>via GIPHY</a></p><h2>It seems like you've lost this game. But don't worry, we can play again!</h2><button onclick='location.reload()'>Play again!</button></div>";
}

playerWin = () => {
    body.innerHTML = "<div id='last'><iframe src='https://giphy.com/embed/ZcUGu59vhBGgbBhh0n' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/barstoolsports-gambling-barstool-beadvised-ZcUGu59vhBGgbBhh0n'>via GIPHY</a></p><h2>Hurray, you won the game. Wanna try again?</h2><button onclick='location.reload()'>Play again!</button></div>";
}

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let playerSelection = selection.id;
        scoring(play(playerSelection, computerSelection()));
        round++;
        if (round === 10) {
            body.innerHTML = "<div id = 'last'><h2>You only have 10 rounds in total. Better luck next time.</h2></div>";
            setTimeout( () => location.reload(), 5000);
        }
        roundp.textContent = `Round: ${round}`;
        liveyou.textContent = `You: ${myLife}`;
        liverival.textContent = `Enemy: ${rivalLife}`;
        messa.textContent = message;

        if (myLife ===  0) playerLose();
        else if (rivalLife === 0) playerWin();
    });
});
