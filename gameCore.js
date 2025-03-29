
console.log("Let The Game Begin")

const range = 3;

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
    let playerRandom = prompt("Please enter 0 for Rock, 1 for Paper, or 2 for Scissors:");

    let playerChoice;

    if (playerRandom == 0) {
        playerChoice = "Rock";
    } else if (playerRandom == 1) {
        playerChoice = "Paper";
    } else {
        playerChoice = "Scissors";
    }

    return playerChoice;
}

console.log(humanChoice());

