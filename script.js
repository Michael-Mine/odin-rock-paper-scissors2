let humanChoice;
let computerChoice;

function getHumanChoice() {
    humanChoice = prompt("Make your choice, type: rock, paper or scissors");
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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0; 
    function playRound(humanChoice, computerChoice) {
        console.log("Human choice is " + humanChoice);
        console.log("Computer choice is " + computerChoice);
    
        if (humanChoice === computerChoice) {
            alert("This round is a tie!")        
        } else if ((humanChoice === "rock" && computerChoice == "scissors") ||
                (humanChoice === "paper" && computerChoice == "rock") ||
                (humanChoice === "scissors" && computerChoice == "paper")) {
            alert("You win this round!")
            humanScore++;
            alert("Your score is " + humanScore + " and computer score is " + computerScore)
        } else if ((computerChoice === "rock" && humanChoice == "scissors") ||
                (computerChoice === "paper" && humanChoice == "rock") ||
                (computerChoice === "scissors" && humanChoice == "paper")) {
            alert("You lose this round!")
            computerScore++;
            alert("Your score is " + humanScore + " and computer score is " + computerScore)
        } else {
            alert("Choice not recognised! Please type a valid choice of: rock, paper or scissors")
        }
    }
    playRound(humanSelection, computerSelection);
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());   
}
playGame();