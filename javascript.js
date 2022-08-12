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

//deze onderstaande functie wordt alleen gebruikt om de loop uit te voeren. Dit is een dummy functie.
// we gaan nu een scorecounter opzetten voor player en computer
// de twee scorecounters zijn aangemaakt middels variabelen. Als de uitkomst "You lose!" is, dan krijgt de computer +1 punt. "You win!" krijt de player +1 punt. draw = 0 punt
// we moeten nu nog 

let playerCounter = 0;
let computerCounter = 0;

function dummy(){
    for (let i = 0; i < 5; i++) {
        let outcome = (game(prompt("rock, paper or scissor").toLowerCase(),));
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

dummy()


/*
let computerInput = getComputerChoice
let playerInput = "rock"

var gameOutput = (game(playerInput.toLowerCase(), computerInput))


*/
