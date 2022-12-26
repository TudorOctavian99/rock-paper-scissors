// Initialize variables for the program
const choices = ['ROCK','PAPER','SCISSORS'];

function game() {
    //for (let i=1;i<=5;i++){
        // Prompt user for input
        
        //Randomly assign computer a choice
    //}
}

//Function to assign the winner of a round 
function playRound (userSelection,computerSelection) {

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    //Evaluate when computerSelection = Rock
    if (computerSelection == 'Rock'){
        if (userSelection == 'PAPER') {
            playerScore += 1;
        } else if (userSelection.toUpperCase() == 'SCISSORS'){
            computerScore += 1;
        }
    }
    if (computerSelection == 'Paper'){
        if (userSelection.toUpperCase() == 'Rock') {
            computerScore += 1;
        } else if (userSelection.toUpperCase() == 'SCISSORS'){
            playerScore += 1;
        } 
    }

    if (computerSelection == 'Scissors'){
        if (userSelection.toUpperCase() == 'PAPER') {
            computerWins += 1;
        } else if (userSelection.toUpperCase() == 'ROCK'){
            playerWins += 1;
        } 
    }

    if (playerScore > computerScore) {
        return `You won! ${userSelection} beats ${computerSelection}`;
    } else if (computerWins < playerWins) {
        return `You loose! ${computerSelection} beats ${userSelection}`;
    } else {
        return 'Tie!';
    }
}

// Function to randomly generate the computer's choice
function getComputerChoice () {
    // Generate a random number between 1 and 3
    // For number = 1 -> Rock, number = 2 -> Paper, number = 3 -> Scissors
    return choices[Math.floor(Math.random()*choices.length)];
}

// Function to get player's choice
function getPlayerChoice {
    let input = prompt('Type your choice (Rock, Paper, Scissors): ');

    while (input == null){
        input = prompt('Type your choice (Rock, Paper, Scissors): ');
    }
    input = input.toUpperCase();
    return input;
}

function validateInput(choice){
    return choices.includes(choice);
}

