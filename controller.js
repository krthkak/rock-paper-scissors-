console.log("Hello World")

//getHumanChoice();

let options = ['rock', 'paper', 'scissors']
let humanScore = 0;
let computerScore = 0;

playGame();




function playGame(){
    let play = true;
    while(play){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        play = confirm("Do you want to play again?");
    }
    console.log("Game Over");
    console.log("Final Scores");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    
}


function getComputerChoice() {
    let index = Math.floor((Math.random() * 10)%3);
    return options[index];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: rock, paper or scissors");
    return choice;
}

function playRound(humanChoice,computerChoice){
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);
    didHumanWin(humanChoice,computerChoice);
}

function didHumanWin(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice == computerChoice){
        console.log("It's a tie");
    } else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("You win");
        humanScore++;
    } else if(humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("Computer wins");
        computerScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("You win");
        humanScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log("Computer wins");
        computerScore++;
    } else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log("You win");
        humanScore++;
    } else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log("Computer wins");
        computerScore++;
    }
}