# Project-Rock-Paper-Scissors
Requirements
1. Create a function called `computerPlay` that returns randomly either "Rock", "Paper" or "Scissors".
    - function `computerPlay`: Explanation: The idea is generate a random number that will be the selection in an array where each index corresponds
    to one of the three options: `rock, paper, scissors`. Between creating a function that returns a random number between 0 and 2 and and array with 
    repeated `rock, paper, scissors`, I chose the second one. A function with
    a random number between 0 - 2 will always tend to return either more 1s, or 2s, etc. 

2. Write a function called `playRound` that plays a single round. The function takes two parameters: `playerSelection` and `computerSelection`. It returns a string declaring who won. `playerSelection` should be case-insensitive 

3. Write a function called `game` that calls `playRound` 5 times. and keeps score until the computer or the user wins.
4.      
