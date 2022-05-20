// Create random number 
function randomNum(){
    // Generates numbers 0-8
    let rand = Math.floor(Math.random() * 9);
    return rand;
    
}
// Computer choice
function computerPlay(){
    let arr = ["Rock", "Paper", "Scissors", 
                "Paper", "Rock", "Scissors", 
                "Scissors", "Paper", "Rock"];
    let thiSelection = arr[randomNum()]
    // console.log(thiSelection);
    return thiSelection;

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

// Create game
function game(){
    // TODO: Keep score
    let computer = 0;
    let user = 0;
    // TODO: Call playRound 5 times
    for (let round = 0; round < 5; round++){
        // const playerSelection = prompt("Rock, Paper or Scissors?");
        const playerSelection = computerPlay(); 
        const computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        // console.log(winner);
        if (winner.includes("You Lose")){
            computer++;
            continue
        }
        if (winner.includes("You won")){
            user++;
            continue
        }
        if (winner.includes("We")){
            round -= 1;
        }
        // Report winner
/*         if (computer.computer === 3 || user.user === 3){
            return `The`
        } 
 */    }
    // TODO: Report winner
    if (computer > user){
        return console.log(`You lose! I won ${computer} rounds.`);
    } else {
        return console.log(`Congratulations!! You won ${user} rounds.`);
    }
}

// Play Game
game();
