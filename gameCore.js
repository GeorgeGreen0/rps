
console.log("Let The Game Begin")

const range = 3;

function computerChoice() {

    let computerRandom = Math.floor(Math.random() * range);

    let computerChoice;

    if (computerRandom == 0) {
        computerChoice = "Rock";
    } else if (computerChoice == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";  
    } 
}

console.log(computerChoice());

function humanChoice() {
    
}