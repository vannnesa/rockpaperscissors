const CHOICES = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    numberChoice = Math.floor(Math.random() * 3);
    return numberChoice;
}

function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors?").toLowerCase();
    numberChoice = CHOICES.indexOf(input);
    return numberChoice;
}

function playGame() {
    let humanScore, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tied.");
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
    }

    function logWin(humanWon) {
        if (humanWon > 0) {
            console.log("You win!");
            humanScore += 1;
        }
        else {
            console.log("You lose.");
            computerScore += 1;
        }
    }

    for (let i=0; i < 5; i++) {
        input = getHumanChoice();
        if (input < 0) {
            console.log("Enter either rock, paper, or scissors.");
            continue;
        }
        playRound(input, getComputerChoice());
    }
}

playGame();