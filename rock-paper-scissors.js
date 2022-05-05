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

function computerPlay(){
    let arr = ["Rock", "Paper", "Scissors", 
                "Rock", "Paper", "Scissors", 
                "Rock", "Paper", "Scissors"];
    return arr[randomNum()]
}