
console.log("Let The Game Begin")

const range = 3;

let computerScore = 0;
let humanScore = 0;

function computerChoice() {

    let computerRandom = Math.floor(Math.random() * range);

    let theChoice;

    if (computerRandom == 0) {
        theChoice = "Rock";
    } else if (computerRandom == 1) {
        theChoice = "Paper";
    } else {
        theChoice = "Scissors";  
    }

    return theChoice;
}

console.log(computerChoice());

function humanChoice() {

    let playerChoice;

    let playerRandom = prompt("Please enter your choice: Rock, Paper or Scissors:");

    if (playerRandom !== null) {
        playerInput = playerRandom.toLowerCase();

        if (playerInput == "rock") {
            playerChoice = "Rock";
        } else if (playerInput == "paper") {
            playerChoice = "Paper";
        } else if (playerInput == "scissors") {
            playerChoice = "Scissors";
        } else {
            playerChoice = "What the heck is that? Please speak English. =P ";
        }
    } else {
        console.log("User cancelled the prompt.");
    }

    return playerChoice;
}

console.log(humanChoice());

