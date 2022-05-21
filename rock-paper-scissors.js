// Create random number 
function randomNum(){
    // Generates numbers 0-8
    let rand = Math.floor(Math.random() * 9);
    return rand;
    
}
    
// Computer choice
function computerPlay(){
    let arr = ["rock", "paper", "scissors", 
                "paper", "scissors", "rock", 
                "scissors", "rock", "paper"];
    return arr[randomNum()]
}

// Create one round competition
function playRound(e){ // passing the event: which button was pressed
    // Paper > Rock > Scissor > Paper
    // Paper - Rock   || Paper - Scissors - || Paper-Paper
    // Rock- Scissors || Rock - Rock 
    // Scissors - Scissors
    // Get computer selection
    e.stopPropagation();
    const computerSelection = computerPlay();
    // alert(e.target.id); // id of the clicked btn 
    // alert(computerSelection); 


    if (computerSelection === e.target.id){
        return thisWinner("You've tied");
    } 
    if (computerSelection === "paper" && e.target.id === "rock"){
        return thisWinner("You Lose! Paper beats Rock");
    }  
    if (computerSelection === "rock"  && e.target.id === "scissors"){
        return thisWinner("You Lose! Rock beats Scissors");
    }
    if (computerSelection === "scissors" && e.target.id === "paper") {
        return thisWinner("You Lose! Scissors beats Paper");
    }
    thisWinner(`You won! ${e.target.id} beats ${computerSelection}.`);
}


// Create game
function thisWinner(winner){

    // Check winner
    // alert(winner);
    
    // Get current score of each player
    let computerScore = computerScoreNode.textContent;
    let yourScore = yourScoreNode.textContent; 

   
    if (winner.includes("You Lose")){
        computerScore++;
        computerScoreNode.textContent = computerScore;
    }
    if (winner.includes("You won")){
        yourScore++;
        yourScoreNode.textContent = yourScore;

    }
    if (winner.includes("You've")){
        alert(winner);

    }
    // TODO: Report winner
    if (computerScore == 5){
        theWinner.textContent = `You lose! I won ${computer} rounds.`;
        // return alert(`You lose! I won ${computer} rounds.`);
    }  
    if (yourScore == 5) {
        theWinner.textContent = `Congratulations!! You won ${user} rounds.`;
        // return alert(`Congratulations!! You won ${user} rounds.`);
    }
}

// TODO: Get node score of each player
let computerScoreNode = document.getElementById('computer-score');
let yourScoreNode = document.getElementById('your-score');

// Get all elements with class btn
const theBtns = document.querySelectorAll('.btn');
// Add listener to each button 
theBtns.forEach((btn => btn.addEventListener('click', playRound)));

