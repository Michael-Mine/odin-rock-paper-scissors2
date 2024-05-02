let computerChoice;

function getComputerChoice() {
    
    computerChoice = Math.random()
    
    if (computerChoice <= 0.333){
        computerChoice = "Rock"
        
    } else if (computerChoice >= 0.666) {
        computerChoice = "Paper"

    } else {
        computerChoice = "Scissors"
    }

    return computerChoice
}

getComputerChoice();

console.log("Computer choice is " + computerChoice);

let humanChoice;

function getHumanChoice() {
    humanChoice = prompt("Make your Choice! Type rock, paper or scissors");
}

getHumanChoice();

console.log("Human choice is " + humanChoice) 


