# rock-paper-scissors
## Requirements for first version
1. Create a function called `computerPlay` that returns randomly either "Rock", "Paper" or "Scissors".
    > function `computerPlay`: Explanation: The idea is generate a random number that will be the selection in an array where each index corresponds
    to one of the three options: `rock, paper, scissors`. Between creating a function that returns a random number between 0 and 2 and and array with 
    repeated `rock, paper, scissors`, I chose the second one. A function with
    a random number between 0 - 2 will always tend to return either more 1s, or 2s, etc. 

2. Write a function called `playRound` that plays a single round. The function takes two parameters: `playerSelection` and 
`computerSelection`. It returns a string declaring who won. `playerSelection` should be case-insensitive 

3. Write a function called `game` that calls `playRound` 5 times. and keeps score until the computer or the user wins.

## Requirements for second version (refactoring)

1. Remove the logical part from the `game()` (now `thisWinner`) function that plays 5 rounds
2. Add three buttons, one for each selection. 
3. Add an event listener to the buttons
    > The event listener should call the `playRound()` function with the user selection every time the button is clicked. 
4. Create a div to display the results using DOM methods.
5. Show running score.
    > Get the actual score of each player. Every time the function `ThisWinner` is called, the variables `computerScore` 
    and `yourScore` update its value. Each time the user or the computer wins, 1 point is added.           
6. Show winner once a player reaches 5 points

## Requirements for third version (refactoring)
1. Add header to the game
2. Show result: 
    > * Create a div to display the results using DOM methods.
    > * Add two sections -one for a short result like `you won`, and one for long 
    results like `rock beats scissors`
    > * Get those nodes references
3. Add hand-boxes
    > Each hand show the picked option
4. Add buttons
    > Update event listener -the node reference part
     Event listener call `playRound()`
     `playRound()` should show 
5. Create function called `raiseHand()`
    >  * The function takes two args: playerSelection and computerSelection
    >  * If "picked-option" class:
    >  * Remove 
    >  * Add to new picked options
6. Add play again option
    >   * Create box to show play again button and final results result
    >   * Create `restartGame()` function

      
     
      
