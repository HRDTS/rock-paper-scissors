let array = ["rock", "paper", "scissor"]
var getComputerChoice = (array[(Math.floor((Math.random() * array.length)))])
// The array variable and getComputerChoice variables generate a random rock, paper or scissor outcome for the computer

function game(playerSelection, computerSelection = (array[(Math.floor((Math.random() * array.length)))])) {
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose!"
    } if (playerSelection === "rock" && computerSelection === "scissor"){
            return "You win!"
    } if (playerSelection === "rock" && computerSelection === "rock"){
        return "Draw!"
    } if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You lose!"
    } if (playerSelection === "paper" && computerSelection === "rock"){
            return "You win!"
    } if (playerSelection === "paper" && computerSelection === "paper"){
        return "Draw!"
    } if (playerSelection === "scissor" && computerSelection === "rock"){
        return "You lose!"
    } if (playerSelection === "scissor" && computerSelection === "paper"){
            return "You win!"
    } if (playerSelection === "scissor" && computerSelection === "scissor"){
        return "Draw!"}
}

// the code above determines the outcome of the round. all 9 possible scenarios are written out.

let gameCounter = 0;
let playerCounter = 0;
let computerCounter = 0;

// the three variables above keep count of the game, player score and computer score.

// below I have added addeventlisteners to the three buttons (Rock, Paper, Scissor) on my HTML file. 
//The conditions of the if statements are connected to the 9 scenarios above.
// for ex: if I click on rock and computer generates paper. Players loses so no points for player, the computerCounter goes up 1 score and the gameCounter goes up.
// Same goes for when player wins or draws. 
// there is also the function playRoundo() at the bottom. This shows the scoreboad after each click.
const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
        let gameOutcomeRock = (game("rock",))
        if (gameOutcomeRock === "You lose!") {
        computerCounter++;
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: your rock vs computers paper. Computer wins!`
    } else if (gameOutcomeRock === "You win!") {
        playerCounter++;
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: your rock vs computers scissor. Player wins!`
    } else if (gameOutcomeRock === "Draw!") {
        console.log("Draw!")
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: your rock vs computers rock. Draw!`   
    } 
    console.log("computers score: " + computerCounter + " - your score: " + playerCounter)  
    return playRoundo()
  });

  const paper = document.querySelector('.paper')
    paper.addEventListener('click', () => {
        let gameOutcomePaper = (game("paper",))
    if ( gameOutcomePaper === "You lose!") {
        computerCounter++;
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: your paper vs computers scissor. Computer wins!`
    } else if (gameOutcomePaper === "You win!") {
        playerCounter++;
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: Your paper vs computers rock. Player wins!`
    } else if (gameOutcomePaper === "Draw!") {
        console.log("Draw!")
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: your paper vs computes paper. Draw!`
    }  
    console.log("computers score: " + computerCounter + " - your score: " + playerCounter)
    return playRoundo()
  });

  const scissor = document.querySelector('.scissor')
    scissor.addEventListener('click', () => {
        let gameOutcomeScissor = (game("scissor",));
    if (gameOutcomeScissor === "You lose!") {
        computerCounter++;
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: your scissor vs computers rock. Computer wins!`
    } else if (gameOutcomeScissor === "You win!") {
        playerCounter++;
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: Your scissor vs computers paper. Player wins!`
    } else if (gameOutcomeScissor === "Draw!") {
        console.log("Draw!")
        gameCounter++;
        roundResult.textContent = `round ${gameCounter}: Your scissor vs computers scissor. Draw!`  
    }
    console.log("computers score: " + computerCounter + " - your score: " + playerCounter)
    return playRoundo()
  });


// this function playRoundo() keeps the score. If the player or computer hits 5 points, the playerCounter, computerCounter and gameCounter resets.

  function playRoundo() {
    if (playerCounter === 5) {
        console.log("Congratulations, you have won the game! I am resetting the score so you can play again.");
        div.textContent = `You have ${playerCounter} and the computer has ${computerCounter} points`
        finalWinner.textContent = "Player won!"
        gameCounter = 0;
        playerCounter = 0;
        computerCounter = 0;
    } else if (computerCounter === 5) {
        console.log("So close! You have lost the game! I am resetting the score so yo can play again.")
        div.textContent = `You have ${playerCounter} and the computer has ${computerCounter} points`
        finalWinner.textContent = "Computer won!"
        gameCounter = 0;
        playerCounter = 0;
        computerCounter = 0;
    } if (gameCounter > 0) { //this if statement makes sure the final result (for ex: 5-0) actually shows up, instead of going from 4-0 to 0-0 (because it resets after each win)
        div.textContent = `You have ${playerCounter} and the computer has ${computerCounter} points`
    } if (gameCounter > 0) {
        finalWinner.textContent = ""
    } 
}

// these are codes used to append the scoreboard text and the winner of each round text. 
const body = document.querySelector("body")
const div = document.createElement("div")
const roundResult = document.createElement("div")
const finalWinner = document.createElement("div")
body.appendChild(div)
body.appendChild(roundResult)
body.appendChild(finalWinner)
