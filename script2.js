let computerSelection;
let wins =0;
let loses=0;
let ties =0;

function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt === 0){
        computerSelection = 'rock';
        return computerSelection;
    } else if(randomInt === 1){
        computerSelection = 'paper';
        return computerSelection;
    } else{
        computerSelection = 'scissors';
        return computerSelection;
    }
}




function playRound(playerSelection){
    let userChoice = prompt("Enter 'rock', 'paper', or 'scissors': "); //get user input
        userChoice = userChoice.toLowerCase(); //could prob just do this on same line, but here for readabiltiy, etc.

    while(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
            userChoice = prompt("Enter 'rock', 'paper', or 'scissors': ");
            userChoice = userChoice.toLowerCase();
    }
    getComputerChoice();
    console.log(computerSelection);
    if(userChoice === computerSelection){
            console.log(`It's a tie! Both chose ${userChoice}!`);
            ties = ties + 1;
    } else if((userChoice === 'rock' && computerSelection === 'scissors') || (userChoice === 'paper' && computerSelection === 'rock') || (userChoice === 'scissors' && computerSelection === 'paper') ){
            console.log(`You win! ${userChoice} beats ${computerSelection}!`);
            wins = wins + 1;
    } else {
        console.log(`You lose! ${userChoice} gets beat by ${computerSelection}!`);
        loses = loses + 1;
    }
    console.log(wins, loses, ties);
}

function game(){

    for(let i = 0; i < 5; i++){
        playRound();
    }
    console.log(`You won ${wins}, lost ${loses}, and tied ${ties}!`);
    
}

game();


