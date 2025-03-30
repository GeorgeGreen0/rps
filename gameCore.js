
function computerChoice() {

    const range = 3;

    let computerRandom = Math.floor(Math.random() * range);

    let theChoice;

    if (computerRandom == 0) {
        theChoice = "rock";
    } else if (computerRandom == 1) {
        theChoice = "paper";
    } else {
        theChoice = "scissors";  
    }

    return theChoice;
}

function humanChoice() {

    let playerChoice;
    let playerInput;

    let playerRandom = prompt("Please enter your choice: Rock, Paper or Scissors:");

    if (playerRandom !== null) {
        playerInput = playerRandom.toLowerCase();

        if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
            return playerInput;
        } else {
            playerChoice = "What the heck is that? Please speak English. =P ";
        }
    } else {
        console.log("User cancelled the prompt.");
    }

    return playerChoice;
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;
    let ties = 0;
    let rounds = 0;

    while (rounds<5) {
            function playRound() {

               let computerResult = computerChoice();
               let humanResult = humanChoice();

                if (computerResult == humanResult) {
                    console.log(`It's a tie! You guys chose the same.`);
                    ties ++;
                } else if (
                    (computerResult == "rock" && humanResult == "scissors")|| 
                    (computerResult == "paper" && humanResult == "rock") ||
                    (computerResult == "scissors" && humanResult == "paper")
                )
                {
                    console.log(`Termi wins! ${computerResult} beats ${humanResult}`);
                    computerScore ++;
                } else {
                    console.log(`Human wins! ${humanResult} beats ${computerResult}`);
                    humanScore ++;
                }
            }

        playRound();
        
        rounds ++;
    } 
            
    console.log(rounds);

    console.log(humanScore, computerScore, ties);

    if (rounds === 5) {
        if (computerScore > humanScore) {
            console.log ("Terminator wins!");
            return computerScore;
        } else if (humanScore > computerScore) {
            console.log ("Human wins!");
            return humanScore;
        } else {
            console.log ("It looks like tie!");
            return ties;
        }
    } else {
        console.log ("Something's not right");
    }

}

console.log(playGame());