let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0; 

const selection = document.querySelector("#selection");

selection.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            humanChoice = "rock";
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            humanChoice = "paper";
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            humanChoice = "scissors";
            playRound("scissors", getComputerChoice());
            break;    
    }
});

const results = document.querySelector("#results");

function displayResults(text) {
    let content = document.createElement("div")
    content.textContent = text;
    results.appendChild(content);
}

const score = document.querySelector("#score");

function displayScore() {
    
    let content = document.createElement("div")
    content.textContent = "Your score is " + humanScore + " and computer score is " + computerScore + ".";
    score.appendChild(content);
    if (humanScore > 4) alert("Game Over - You Win!");
    if (computerScore > 4) alert("Game Over - You Lose!");
}

function getComputerChoice() {
    computerChoice = Math.random()
    
    if (computerChoice <= 0.333){
        computerChoice = "rock"
    } else if (computerChoice >= 0.666) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    displayResults("Human choice is " + humanChoice + ".");
    displayResults("Computer choice is " + computerChoice + ".");

    if (humanChoice === computerChoice) {
        displayResults("This round is a tie!");
        displayScore();        
    } else if ((humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "paper" && computerChoice == "rock") ||
            (humanChoice === "scissors" && computerChoice == "paper")) {
        displayResults("You win this round!")
        humanScore++;
        displayResults("Your score is " + humanScore + " and computer score is " + computerScore + ".");
        displayScore();
    } else if ((computerChoice === "rock" && humanChoice == "scissors") ||
            (computerChoice === "paper" && humanChoice == "rock") ||
            (computerChoice === "scissors" && humanChoice == "paper")) {
        displayResults("You lose this round!");
        computerScore++;
        displayResults("Your score is " + humanScore + " and computer score is " + computerScore + ".");
        displayScore();
    } else {
        displayResults("Choice not recognised! Please type a valid choice of: rock, paper or scissors.");
        displayScore();
    }
}