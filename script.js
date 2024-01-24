let userChoice;
let computerChoice;
let winner;
let userWinsCounter = 0;
let computerWinsCounter = 0;
let score ='';
let gameOver = false;
    

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    userChoice = "rock";
    startGame();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    userChoice = "paper";
    startGame();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    userChoice = "scissors";
    startGame();
});





function checkGameOver () {
    if (userWinsCounter < 3 && computerWinsCounter < 3) {
        gameOver = false;
        return;
    }

    else {
        gameOver = true;
        return;
    }
}



function startGame() {
    console.log("user: ", userChoice);
    console.log("cpu: ", getComputerChoice());

    whoWon();

    if (winner === "draw") {
        console.log("It's a DRAW!");
    }
    
    else if (winner === "cpu") {
        computerWinsCounter++;
        console.log("cpu scores!");
    }
    
    else if (winner === "user") {
        userWinsCounter++;
        console.log("you scored!");
    }
    
    else {
        console.log("HOW THE F* DID YOU BREAK MY PROGRAM??");
    }
    
    score = `SCORE: USER (${userWinsCounter}) x (${computerWinsCounter}) CPU`;

    console.log(score);
    //checkGameOver(); - paused for now

   if (gameOver === true)
   {
        if (userWinsCounter > computerWinsCounter){
            console.log("THE MACHINE IS DEFEATED! REJOICE! - YOU WON");
        }
        else if (computerWinsCounter > userWinsCounter){
            console.log("WHAT A SAD FATE YOU ENCOUNTERED! - YOU LOST");
        }
        computerWinsCounter = 0;
        userWinsCounter = 0;
   }
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
            winner = "user";
            return winner;
            break;
        case (userChoice === "rock" && computerChoice === "paper") :
            winner = "cpu";
            return winner;
            break;
        case (userChoice === "paper" && computerChoice === "scissors") :
            winner = "cpu";
            return winner;
            break;
        case (userChoice === "paper" && computerChoice === "rock") :
            winner = "user";
            return winner;
            break;
        case (userChoice === "scissors" && computerChoice === "rock") :
            winner = "cpu";
            return winner;
            break;
        case (userChoice === "scissors" && computerChoice === "paper") :
            winner = "user";
            return winner;
            break;
    }
}