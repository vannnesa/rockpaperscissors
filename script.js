const choices = ['rock', 'paper', 'scissors']
let humanScore, computerScore = 0;

function getComputerChoice() {
    cnum = Math.floor(Math.random() * 3);
    return cnum;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    cnum = choices.indexOf(choice);
    return cnum;
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
                    case 1: win(0); break;
                    case 2: win(1);
                }
                break;
            case 1:
                switch(computerChoice) {
                    case 0: win(1); break;
                    case 2: win(0);
                }
                break;
            case 2:
                switch(computerChoice) {
                    case 0: win(0); break;
                    case 1: win(1);
                }
        }
    }

    function win(x) {
        if (x > 0) {
            console.log("You win!");
            humanScore += 1;
        }
        else {
            console.log("You lose.");
            computerScore += 1;
        }
    }

    for (let i=0; i < 5; i++) {
        h = getHumanChoice();
        if (h < 0) {
            console.log("Enter either rock, paper, or scissors.");
            continue;
        }
        playRound(h, getComputerChoice());
    }
}

playGame();