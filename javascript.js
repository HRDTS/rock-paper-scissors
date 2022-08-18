let array = ["rock", "paper", "scissor"]

var getComputerChoice = (array[(Math.floor((Math.random() * array.length)))])


function game(playerSelection, computerSelection = (array[(Math.floor((Math.random() * array.length)))])) {
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "Computer chose PAPER against your ROCK. You lose!"
    } if (playerSelection === "rock" && computerSelection === "scissor"){
            return "Computer chose SCISSOR against your ROCK. You win!"
    } if (playerSelection === "rock" && computerSelection === "rock"){
        return "Computer chose ROCK against your ROCK. Draw!"
    } if (playerSelection === "paper" && computerSelection === "scissor"){
        return "Computer chose SCISSOR against your PAPER. You lose!"
    } if (playerSelection === "paper" && computerSelection === "rock"){
            return "Computer chose ROCK against your PAPER. You win!"
    } if (playerSelection === "paper" && computerSelection === "paper"){
        return "Computer chose PAPER against your PAPER. Draw!"
    } if (playerSelection === "scissor" && computerSelection === "rock"){
        return "Computer chose ROCK against your SCISSOR. You lose!"
    } if (playerSelection === "scissor" && computerSelection === "paper"){
            return "Computer chose PAPER against your SCISSOR. You win!"
    } if (playerSelection === "scissor" && computerSelection === "scissor"){
        return "Computer chose SCISSOR against your SCISSOR. Draw!"}
}

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    console.log(game("rock",));
  });

  const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    console.log(game("paper",));
  });

  const scissor = document.querySelector('.scissor')
scissor.addEventListener('click', () => {
    console.log(game("scissor",));
  });


/*
let playerCounter = 0;
let computerCounter = 0;

function playRound() {
    for (let i = 0; i < 5; i++) {
        let outcome = (game(playerSelection,));
        console.log(outcome);
        if (outcome === "You lose!") {
            (computerCounter++)
        } else if (outcome === "You win!") {
            (playerCounter++)
        } console.log("computers score: " + computerCounter + " - your score: " + playerCounter)      

    }
    if (playerCounter > computerCounter) {
    console.log("You win the game!")
    } else if (computerCounter > playerCounter) {
    console.log("You lose the game!")
    } else {
    console.log("It/'s a draw")
    }
} 

playRound()
*/