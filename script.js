//Function that determines the computer's move.
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove = "";
    if (randomNumber === 1) {
        return computerMove = "grass";
    } else if (randomNumber === 2) {
        return computerMove = "water";
    } else {
        return computerMove = "fire";
    }
}

//Function that determines who wins the round.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (true) {
        case (playerSelection === computerSelection):
            return "It's a tie! Try again.";
            break;
        case playerSelection === "grass":
            if (computerSelection === "water") {
                return "You win! Grass is super effective against water.";
            } else {
                return "You lose! Grass is ineffective against fire.";
            }
            break;
        case playerSelection === "water":
            if (computerSelection === "grass") {
                return "You lose! Water is ineffective against grass.";
            } else {
                return "You win! Water is super effective against fire.";
            }
            break;
        case playerSelection === "fire":
            if (computerSelection === "grass") {
                return "You win! Fire is super effective against grass.";
            } else {
                return "You lose! Fire is ineffective against water.";
            }
    }

}

const grass = document.querySelector('#grass');
const water = document.querySelector('#water');
const fire = document.querySelector('#fire');

const buttons = document.querySelectorAll('button');

const para = document.querySelector('#results')
const displayPS = document.querySelector('#player-score')
const displayCS = document.querySelector('#computer-score')
let playerScore = 0;
let compScore = 0;

grass.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let result = playRound('grass', computerSelection);
    changeDisplay(result);
    finalResult.innerText = "";
    if (playerScore === 5 || compScore === 5) {
        finalResult.innerText = finalScore(playerScore, compScore);
        gameOver();
    }
});

water.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let result = playRound('water', computerSelection);
    changeDisplay(result);
    finalResult.innerText = ""
    if (playerScore === 5 || compScore === 5) {
        finalResult.innerText = finalScore(playerScore, compScore);
        gameOver();
    }
});

fire.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let result = playRound('fire', computerSelection);
    changeDisplay(result);
    finalResult.innerText = ""
    if (playerScore === 5 || compScore === 5) {
        finalResult.innerText = finalScore(playerScore, compScore);
        gameOver();
    }
});

const finalResult = document.querySelector('#final-result');
const textArea = document.querySelector('#text');


function finalScore(score1, score2) {
    if (score1 === score2) {
        return "It's a tie. Please try again!";
    } else if (score1 === 5) {
        return "You won the game! Good job.";
    } else if (score2 === 5) {
        return "You lost. Try again next time!";
    }
}

function gameOver() {
    for (const button of buttons) {
        button.setAttribute('disabled', '');
    }
    let newGameBtn = document.createElement('button');
    newGameBtn.innerText = 'New Game';
    textArea.appendChild(newGameBtn);
    newGameBtn.classList.add('newGameBtn');
    newGameBtn.addEventListener('click', () => {
        para.innerText = '';
        playerScore = 0;
        compScore = 0;
        displayPS.innerText = playerScore;
        displayCS.innerText = compScore;
        finalResult.innerText = "Let's play again!";
        for (const button of buttons) {
            button.removeAttribute('disabled', '');
        }
        textArea.removeChild(newGameBtn);
    })
}

function changeDisplay(param) {
    if (param.search("win") == 4) {
        para.classList.add('green');
        para.classList.remove('red');
        playerScore++;
    } else if (param.search("lose") == 4) {
        para.classList.add('red');
        para.classList.remove('green');
        compScore++;
    } else {
        para.classList.remove('green');
        para.classList.remove('red');
    }
    para.innerText = param;
    displayPS.innerText = playerScore;
    displayCS.innerText = compScore;
}