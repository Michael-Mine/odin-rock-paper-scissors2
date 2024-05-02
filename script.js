let computerChoice;

function getComputerChoice() {
    
    computerChoice = Math.random()

    console.log(computerChoice)
    
    if (computerChoice <= 0.333){
        computerChoice = "Rock"
        console.log("Rock!")
        
    } else if (computerChoice >= 0.666) {
        computerChoice = "Paper"
        console.log("Paper!")
    } else {
        computerChoice = "Scissors"
        console.log("Scissors!")
    }

    return computerChoice
}

getComputerChoice();

console.log(computerChoice);


