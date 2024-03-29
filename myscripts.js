function getComputerChoice() {
    // generate random int from 0 to 2
    randInt = Math.floor(Math.random() * 3);

    switch(randInt) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Scissors";
            break;
        case 2:
            return "Paper";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const lowerCasePlayerInput = playerSelection.toLowerCase();
    const capitalizedPlayerInput = lowerCasePlayerInput.charAt(0).toUpperCase() + lowerCasePlayerInput.slice(1);

    if(capitalizedPlayerInput == computerSelection) {
        return "Tie! You both chose " + capitalizedPlayerInput;
    }
    
    switch(true) {
        case (capitalizedPlayerInput == "Rock") && (computerSelection == "Scissors"):
            return "You Win! Rock beats Scissors";
            break;
        case (capitalizedPlayerInput == "Rock") && (computerSelection == "Paper"):
            return "You Lose! Paper beats Rock";
            break;
        case (capitalizedPlayerInput == "Paper") && (computerSelection == "Rock"):
            return "You Win! Paper beats Rock";
            break;
        case (capitalizedPlayerInput == "Paper") && (computerSelection == "Scissors"):
            return "You Lose! Scissors beats Paper";
            break;
        case (capitalizedPlayerInput == "Scissors") && (computerSelection == "Rock"):
            return "You Lose! Rock beats Scissors";
            break;
        case (capitalizedPlayerInput == "Scissors") && (computerSelection == "Paper"):
            return "You Win! Scissors beats Paper";
            break;
        default:
            return "Please choose Rock, Paper, or Scissors";
    }
}
  
function playGame() {
    console.log("Let's play 5 games of Rock, Paper, Scissors!");

    for (let i = 0; i < 5; i++) {
        let playerResponse = prompt("Choose Rock, Paper, or Scissors");
        let computerResponse = getComputerChoice();

        let result = playRound(playerResponse, computerResponse);
        console.log(result);
    }

    console.log("Thanks for playing!");

}