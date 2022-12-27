// Initialize variables for the program
const choices = ['ROCK','PAPER','SCISSORS'];
const winners =[];

function game() {
    for (let i=1; i<=5; i++){
        playRound(i);
    }
    logWins();
}

//Function to assign the winner of a round 
function playRound (round) {

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round);
}

// Function to randomly generate the computer's choice
function getComputerChoice () {
    // Generate a random number between 1 and 3
    // For number = 1 -> Rock, number = 2 -> Paper, number = 3 -> Scissors
    return choices[Math.floor(Math.random()*choices.length)];
}

// Function to get player's choice
function getPlayerChoice () {
    //Prompt the user for input
    let input = prompt('Type your choice (Rock, Paper, Scissors): ');
    
    while (input == null) {
        input = prompt('Type your choice (Rock, Paper, Scissors): ');
    }
    input = input.toUpperCase();

    //Check the input
    let check = validateInput(input);

    while (check == false){
        input = prompt('Type Rock, Paper, Scissors. Spelling needs to be exact, capitalization is not important: ');
        while (input == null) {
            input = prompt('Type your choice (Rock, Paper, Scissors): ');
        }

        input = input.toUpperCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP == choiceC) {
        return "Tie";
    } else if (
            (choiceP == "ROCK" && choiceC == "SCISSORS") || 
            (choiceP == "PAPER" && choiceC == "ROCK") || 
            (choiceP == "SCISSORS" && choiceC == "PAPER")
            ){
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;

    console.log("Results: ");
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Number of ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner){
    console.log("Round: ");
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);
    console.log(winner, "won the round!");
    console.log("____________________________________________")
}

game();

