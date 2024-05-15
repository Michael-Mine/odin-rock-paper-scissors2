let humanChoice;
let computerChoice;

const selection = document.querySelector("#selection");

selection.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            humanChoice = "rock";
            playRound("rock", computerSelection);
            break;
        case "paper":
            humanChoice = "paper";
            playRound("paper", computerSelection);
            break;
        case "scissors":
            humanChoice = "scissors";
            playRound("scissors", computerSelection);
            break;    
    }
});

const results = document.querySelector("#results");

function displayResults(text) {
    let content = document.createElement("div")
    content.textContent = text;
    results.appendChild(content);
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
let humanSelection;
const computerSelection = getComputerChoice();

//function playGame() {
    let humanScore = 0;
    let computerScore = 0; 
    function playRound(humanChoice, computerChoice) {
        displayResults("Human choice is " + humanChoice);
        displayResults("Computer choice is " + computerChoice);
    
        if (humanChoice === computerChoice) {
            displayResults("This round is a tie!")        
        } else if ((humanChoice === "rock" && computerChoice == "scissors") ||
                (humanChoice === "paper" && computerChoice == "rock") ||
                (humanChoice === "scissors" && computerChoice == "paper")) {
            displayResults("You win this round!")
            humanScore++;
            displayResults("Your score is " + humanScore + " and computer score is " + computerScore)
        } else if ((computerChoice === "rock" && humanChoice == "scissors") ||
                (computerChoice === "paper" && humanChoice == "rock") ||
                (computerChoice === "scissors" && humanChoice == "paper")) {
            displayResults("You lose this round!")
            computerScore++;
            displayResults("Your score is " + humanScore + " and computer score is " + computerScore)
        } else {
            displayResults("Choice not recognised! Please type a valid choice of: rock, paper or scissors")
        }
    }
    playRound(humanSelection, computerSelection);
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());   
//}
//playGame();

