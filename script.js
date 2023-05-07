//let choices = ['rock', 'paper', 'sissors']; //rock = 0, paper = 1, siccors = 2;

let compChoice;
let userChoice = prompt("Enter 'rock', 'paper', or 'scissors': ");

userChoice = userChoice.toLowerCase();


    if(userChoice === 'rock'){
        userChoice = 0;
    } else if(userChoice === 'paper'){
        userChoice = 1;
    } else if(userChoice === 'scissors'){
        userChoice = 2;
    } else {
        console.log('Invalid input!')
    }

console.log(userChoice);
//getting html click (not necessary to do it this way, but useful to have listeners ready)

/*
const getChoiceRock= document.getElementById("rock");
const getChoicePaper = document.getElementById("paper");
const getChoiceSissors = document.getElementById("sissors");
*/


//function to generate randomized selector for array (computer)


    
    compChoice = Math.floor(Math.random() * 3);

console.log(compChoice);
//Comparison...

// User Wins: 0v2, 1v0, 2v1

function convertString(){
    if(compChoice === 0){
        compChoice = 'Rock';
    } else if (compChoice === 1){
        compChoice = 'Paper';
    } else{
        compChoice = 'Scissors';
    }
}

    if(userChoice === compChoice){
        console.log("It's a tie!!!")
    } else if((userChoice === 0 && compChoice === 2) || (userChoice === 1 && compChoice === 0) || (userChoice === 2 && compChoice === 1)){
        console.log("You win!");
    
    } 
    else if(userChoice === compChoice){
        console.log("It's a tie!!!") }
    else {
        convertString(compChoice);
        console.log(compChoice);
        console.log(`You lose... computer chose ${compChoice}!`);
    }




//determining user choice by button click
/*document.getElementById('rock').click
    userChoice === 0;


console.log(userChoice); */
