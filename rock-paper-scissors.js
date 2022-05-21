// Create random number 
function randomNum(){
    // Generates numbers 0-8
    let rand = Math.floor(Math.random() * 9);
    return rand;
    
}
    
// Computer choice
function computerPlay(){
    let arr = ["Rock", "Paper", "Scissors", 
                "Rock", "Paper", "Scissors", 
                "Rock", "Paper", "Scissors"];
    return arr[randomNum()]
}

// Create one round competition
function playRound(e){ // passing the event: which button was pressed
    // Paper > Rock > Scissor > Paper
    // Paper - Rock   || Paper - Scissors - || Paper-Paper
    // Rock- Scissors || Rock - Rock 
    // Scissors - Scissors
    // Now playRound becomes the game() function to
    const computerSelection = computerPlay();
    alert(e.target.id); // id of the clicked btn 
    alert(computerSelection); 


    if (computerSelection.toLowerCase() === e.target.id.toLowerCase()){
        game("We're tied");
    } 
    if (computerSelection.toLowerCase() === "paper" && e.target.id.toLowerCase() === "rock"){
        game("You Lose! Paper beats Rock");
    }  
    if (computerSelection.toLowerCase() === "rock"  && e.target.id.toLowerCase() === "scissors"){
        game("You Lose! Rock beats Scissors");
    }
    if (computerSelection.toLowerCase() === "scissors" && e.target.id.toLowerCase() === "paper") {
        game("You Lose! Scissors beats Paper");
    }
    game(`You won! ${e.target.id} beats ${computerSelection}.`);
}


// Create game
function game(winner){
    // TODO: Keep score
    let computer = 0;
    let user = 0;
    // TODO: Call playRound 5 times
    // winner = playRound(playerSelection, computerSelection);

    // Get current score of each player
    const computerScore = document.getElementById('computer-score').textContent;
    const yourScore = document.getElementById('your-score').textContent;


    alert(winner);
    if (winner.includes("You Lose")){
        computer++;
        score.appendChild(eachScore).textContent = computer;
    }
    if (winner.includes("You won")){
        user++;
        score.appendChild(eachScore);
    }
    if (winner.includes("We")){
        score.appendChild(eachScore);

    }
    // TODO: Report winner
    if (computer == 5){
        theWinner.textContent = `You lose! I won ${computer} rounds.`;
        // return alert(`You lose! I won ${computer} rounds.`);
    }  
    if (user == 5) {
        theWinner.textContent = `Congratulations!! You won ${user} rounds.`;
        // return alert(`Congratulations!! You won ${user} rounds.`);
    }
}

// Get all elements with class btn
const theBtns = document.querySelectorAll('.btn');
// Add listener to each button 
theBtns.forEach((btn => btn.addEventListener('click', playRound)));

