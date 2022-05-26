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
    return arr[randomNum()];
}


// Raise hands
function raiseHand(playerSelection, computerSelection){
    
    // remove pickedOption if added
    if (pickedOptionOne.length > 0){
        for (let a = (pickedOptionOne.length - 1); a >= 0; a--){
            pickedOptionOne[a].removeAttribute('class');
        }

    }
    if (pickedOptionTwo.length > 0){
        for (let b = (pickedOptionTwo.length - 1); b >= 0; b--){
            pickedOptionTwo[b].removeAttribute('class');
        }
    }

    // Raise hands
    if (playerSelection == 'rock'){
        playerRockBox.classList.add('picked-option-one');
    }
    if (playerSelection == 'paper'){
        playerPaperBox.classList.add('picked-option-two');
    }
    if ( playerSelection == 'scissors'){
        playerScissorBox.classList.add('picked-option-one')
    }
    if (computerSelection == 'rock'){
        computerRockBox.classList.add('picked-option-one');
    }
    if (computerSelection == 'paper'){
        computerPaperBox.classList.add('picked-option-two');
    }
    if (computerSelection == 'scissors'){
        computerScissorBox.classList.add('picked-option-one');
    }
    
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

    // Call raiseHand() function
    raiseHand(e.target.id, computerSelection);

    if (computerSelection === e.target.id){
        shortResultText.textContent = "It's a tie";
        longResultText.textContent = `${e.target.id[0].toUpperCase() + e.target.id.slice(1)} ties with ${computerSelection}`;
        return;
    } 
    if (computerSelection === "paper" && e.target.id === "rock"){
        shortResultText.textContent = "You lost!";
        longResultText.textContent = `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${e.target.id}`
        return thisWinner("You Lost! Paper beats Rock");
    }  
    if (computerSelection === "rock"  && e.target.id === "scissors"){
        shortResultText.textContent = "You lost!";
        longResultText.textContent = `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${e.target.id}`
        return thisWinner("You Lost! Rock beats Scissors");
    }
    if (computerSelection === "scissors" && e.target.id === "paper") {
        shortResultText.textContent = "You lost!";
        longResultText.textContent = `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${e.target.id}`
        return thisWinner("You Lost! Scissors beats Paper");
    }
    shortResultText.textContent = "You won!";
    longResultText.textContent = `${e.target.id[0].toUpperCase() +  e.target.id.slice(1)} beats ${computerSelection}`;
    return thisWinner("You won!");
}


// Create game
function thisWinner(winner){

    // Check winner
    // alert(winner);
    
    // Get current score of each player
    let computerScore = computerScoreNode.textContent;
    let yourScore = yourScoreNode.textContent; 

   
    if (winner.includes("You Lost")){
        computerScore++;
        computerScoreNode.textContent = computerScore;
    }
    if (winner.includes("You won")){
        yourScore++;
        yourScoreNode.textContent = yourScore;

    }

    // TODO: Report winner
    if (computerScore == 5){
        longResultText.textContent = "";
        playAgainBox.classList.add('play-again-box-active');
        playAgainBtn.classList.add('play-again-active');
        return shortResultText.textContent = "You lost the game!";
    }  
    if (yourScore == 5) {
        longResultText.textContent = "";
        playAgainBox.classList.add('play-again-box-active');
        playAgainBtn.classList.add('play-again-active');
        return shortResultText.textContent = "Congratulations!! You won the game!";
    }
}


function restartGame(){
    playAgainBox.removeAttribute('class');
    playAgainBtn.removeAttribute('class');
    playAgainBtn.classList.add('play-again-inactive');
    shortResultText.textContent = "Play your weapons";
    longResultText.textContent = "Get 5 points and win!";
    computerScoreNode.textContent = '0';
    yourScoreNode.textContent = '0';

    // remove pickedOption if added
    if (pickedOptionOne.length > 0){
        for (let a = (pickedOptionOne.length - 1); a >= 0; a--){
            pickedOptionOne[a].removeAttribute('class');
        }

    }
    if (pickedOptionTwo.length > 0){
        for (let b = (pickedOptionTwo.length - 1); b >= 0; b--){
            pickedOptionTwo[b].removeAttribute('class');
        }
    }
    return;    

}
// TODO: Get node of short text results: you tied | you won, etc
let shortResultText = document.getElementById('results-short').firstChild;


// TODO: Get node of long text results: paper beats rock, etc
let longResultText = document.getElementById('results-long').firstChild;

// TODO: Get node score of each player
let computerScoreNode = document.getElementById('computer-score');
let yourScoreNode = document.getElementById('your-score');

// TODO: Get reference of play again box
const playAgainBox = document.getElementById('play-again-box');
const playAgainBtn = document.getElementById('play-again'); 
// TODO: Btn clicked, add event listener
playAgainBtn.addEventListener('click', restartGame);


// TODO: Get reference of each chose-option image
const playerRockBox = document.getElementById('player-rock-box');
const playerPaperBox = document.getElementById('player-paper-box');
const playerScissorBox = document.getElementById('player-scissors-box');
const computerRockBox = document.getElementById('computer-rock-box');
const computerPaperBox = document.getElementById('computer-paper-box');
const computerScissorBox = document.getElementById('computer-scissors-box');

// TODO: Get raised-hand reference
let pickedOptionOne = document.getElementsByClassName('picked-option-one');
let pickedOptionTwo = document.getElementsByClassName('picked-option-two');



// Get all elements with class btn
const theBtns = document.querySelectorAll('.image-button');
// Add listener to each button 
theBtns.forEach((btn => btn.addEventListener('click', playRound)));

// Get element to put winner
const theWinner = document.getElementById('winner');


