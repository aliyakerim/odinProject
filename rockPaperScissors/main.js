

let opening = prompt("rock paper or scisoor?");


function computerPlay() {
    const choice = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       return "You tie!  Player's choice is " + playerSelection + " computer's choice is " + computerSelection;
    } else if (playerSelection == "rock" && computerSelection =="paper" ||
    playerSelection == "paper" && computerSelection =="scissor" ||
    playerSelection == "scissor" && computerSelection =="rock") {
        return " You snoose, you loose. Player's choice is " + playerSelection + " computer's choice is " + computerSelection;
    } else if (playerSelection == "scissor" && computerSelection =="paper" ||
    playerSelection == "rock" && computerSelection =="scissor" ||
    playerSelection == "paper" && computerSelection =="rock") {
        return "Smooth like honey! player's choice is " + playerSelection + " computer's choice is " + computerSelection;
    }
}

let playerSelection = "rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
  

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
} 











