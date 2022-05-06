// Create random number 
function randomNum(){
    // Generates numbers 0-8
    let rand = (Math.random().toFixed(1) * 10) - 1;
    if (rand < 0){ // if random is 0-1
        // console.log(rand);
        return 0;
    } else {
        // console.log(rand);
        return rand;
    }
    
}
// Computer choice
function computerPlay(){
    let arr = ["Rock", "Paper", "Scissors", 
                "Rock", "Paper", "Scissors", 
                "Rock", "Paper", "Scissors"];
    return arr[randomNum()]
}

// Create one round competition
function playRound(playerSelection, computerSelection){
    // Paper > Rock > Scissor > Paper
    // Paper - Rock   || Paper - Scissors - || Paper-Paper
    // Rock- Scissors || Rock - Rock 
    // Scissors - Scissors
    // console.log(playerSelection);
    // console.log(computerSelection);

    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()){
        return "We're tied"
    } 
    if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock"){
        return "You Lose! Paper beats Rock";
    }  
    if (computerSelection.toLowerCase() === "rock"  && playerSelection.toLowerCase() === "scissors"){
        return "You Lose! Rock beats Scissors";
    }
    if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        return "You Lose! Scissors beats Paper";
    }
    return `You won! ${playerSelection} beats ${computerSelection}.`;
}

