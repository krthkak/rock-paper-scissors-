console.log("Hello World")

//getHumanChoice();

let options = ['Rock', 'Paper', 'Scissors']
let humanScore = 0;
let computerScore = 0;

//playGame();




function playGame(choice){
    let humanChoice = choice;
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    console.log("Game Over");
    console.log("Final Scores");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    
}


function getComputerChoice() {
    let index = Math.floor((Math.random() * 10)%3);
    return options[index];
}

// function getHumanChoice(){
//     let choice = prompt("Enter your choice: rock, paper or scissors");
//     return choice;
// }

function playRound(humanChoice,computerChoice){
    humanChoiceSpan = document.querySelector('#humanChoice');
    computerChoiceSpan = document.querySelector("#computerChoice");
    outcome = document.querySelector('#outcome');
    humanScoreSpan = document.querySelector('#humanScore');
    computerScoreSpan = document.querySelector('#computerScore');
    humanChoiceSpan.textContent = humanChoice;
    computerChoiceSpan.textContent = computerChoice;
    didHumanWin(humanChoice,computerChoice);
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

}

function didHumanWin(humanChoice,computerChoice){
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice == computerChoice){
        outcome.textContent("It's a tie");
    } else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        outcome.textContent ="You win";
        humanScore++;
    } else if(humanChoice == 'rock' && computerChoice == 'paper'){
        outcome.textContent="Computer wins";
        computerScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'rock'){
        outcome.textContent="You win";
        humanScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        outcome.textContent="Computer wins";
        computerScore++;
    } else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        outcome.textContent="You win";
        humanScore++;
    } else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        outcome.textContent="Computer wins";
        computerScore++;
    }
}