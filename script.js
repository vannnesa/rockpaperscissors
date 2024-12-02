const CHOICES = ['rock', 'paper', 'scissors']
let buttonList, results, humanScoreDisplay, computerScoreDisplay;
let humanScore = computerScore = 0;

function initialize() {
    buttonList = document.getElementById("options");
    results = document.getElementById("results");
    humanScoreDisplay = document.getElementById("humanscore");
    computerScoreDisplay = document.getElementById("computerscore");
    humanScore, computerScore = 0;
    buttonList.addEventListener("click", playRound);
}

function getComputerChoice() {
    numberChoice = Math.floor(Math.random() * 3);
    return numberChoice;
}

function playRound(event) {
    let computerChoice = getComputerChoice();
    let target = event.target;
    let humanChoice = CHOICES.indexOf(target.id);
    if (humanChoice === computerChoice) {
        results.textContent = "Tied.";
    }
    switch(humanChoice) {
        case 0: 
            switch(computerChoice) {
                case 1: logWin(0); break;
                case 2: logWin(1);
            }
            break;
        case 1:
            switch(computerChoice) {
                case 0: logWin(1); break;
                case 2: logWin(0);
            }
            break;
        case 2:
            switch(computerChoice) {
                case 0: logWin(0); break;
                case 1: logWin(1);
            }
    }
    updateScore();
}

function logWin(humanWon) {
    if (humanWon > 0) {
        results.textContent = "You win!";
        humanScore += 1;
    }
    else {
        results.textContent = "You lose.";
        computerScore += 1;
    }
}

function updateScore() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            alert("You win the game!");
        }
        else {
            alert("You lost the game.")
        }
        humanScore = computerScore = 0;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
    }
}

window.addEventListener("load", initialize);