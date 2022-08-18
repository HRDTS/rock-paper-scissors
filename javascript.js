let array = ["rock", "paper", "scissor"]

var getComputerChoice = (array[(Math.floor((Math.random() * array.length)))])


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

let gameCounter = 0;
let playerCounter = 0;
let computerCounter = 0;

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {

    if ((game("rock",)) === "You lose!") {
        computerCounter++;
        gameCounter++;
        console.log("You lose!")
    } else if ((game("rock",)) === "You win!") {
        playerCounter++;
        gameCounter++;
        console.log("You win!")
    } else {
        console.log("draw")
        gameCounter++;
    } console.log("computers score: " + computerCounter + " - your score: " + playerCounter)
    return playRoundo()
  });

  const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    if ((game("paper",)) === "You lose!") {
        computerCounter++;
        gameCounter++;
        console.log("You lose!")
    } else if ((game("paper",)) === "You win!") {
        playerCounter++;
        gameCounter++;
        console.log("You win!")
    } else {
        console.log("draw")
        gameCounter++;
    } console.log("computers score: " + computerCounter + " - your score: " + playerCounter)
    return playRoundo()
  });

  const scissor = document.querySelector('.scissor')
scissor.addEventListener('click', () => {
    if ((game("scissor",)) === "You lose!") {
        computerCounter++;
        gameCounter++;
        console.log("You lose!")
    } else if ((game("scissor",)) === "You win!") {
        playerCounter++;
        gameCounter++;
        console.log("You win!")
    } else {
        console.log("draw")
        gameCounter++;
    } console.log("computers score: " + computerCounter + " - your score: " + playerCounter)
    return playRoundo()
  });

function playRoundo() {
    if (gameCounter === 5 && playerCounter > computerCounter) {
        console.log("Congratulations, you have won the game!");
        gameCounter = 0;
        playerCounter = 0;
        computerCounter = 0;
    } else if (gameCounter === 5 && computerCounter > playerCounter) {
        console.log("So close! You have lost the game!")
        gameCounter = 0;
        playerCounter = 0;
        computerCounter = 0;
    } else if (gameCounter === 5) {
        console.log("No winners this game. It/'s a draw!")
        gameCounter = 0;
        playerCounter = 0;
        computerCounter = 0;
    } 
}
