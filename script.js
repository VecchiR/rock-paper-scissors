let userChoice;
let computerChoice;
let winner;


function startGame() {
    console.log("user: ", userChoice);
    console.log("cpu: ", getComputerChoice());
    
}

function getComputerChoice() {
    let randNum = (Math.floor(Math.random() * 100)) + 1;
    switch (randNum>0) {
        case (randNum >= 1 && randNum <= 30) :
            computerChoice = "rock";
            return computerChoice;
            break;
        case (randNum >= 31 && randNum <= 60) :
            computerChoice = "paper";
            return computerChoice;
            break;
        case (randNum >= 61) :
            computerChoice = "scissors";
            return computerChoice;
            break;
    }
}

function whoWon() {
    switch (true) {
        case (userChoice === computerChoice) :
            winner = "draw";
            return winner;
            break;
        case (userChoice === "rock" && computerChoice === "scissors") :
            winner = "draw";
            return winner;
            break;
        case (userChoice === "rock" && computerChoice === "paper") :
            winner = "draw";
            return winner;
            break;
        case (userChoice === "paper" && computerChoice === "scissors") :
            winner = "draw";
            return winner;
            break;
        case (userChoice === "paper" && computerChoice === "rock") :
            winner = "draw";
            return winner;
            break;
        case (userChoice === "scissors" && computerChoice === "rock") :
            winner = "draw";
            return winner;
            break;
        case (userChoice === "scissors" && computerChoice === "paper") :
            winner = "draw";
            return winner;
            break;
    }
}