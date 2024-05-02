let humanScore = 0;
let computerScore = 0; 
let humanChoice;
let computerChoice;

function getHumanChoice() {
    humanChoice = prompt("Make your Choice! Type rock, paper or scissors");
    return humanChoice.toLowerCase(); 
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
    console.log("Human choice is " + humanChoice);
    console.log("Computer choice is " + computerChoice);
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
