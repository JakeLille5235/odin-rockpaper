//let choices = ['rock', 'paper', 'sissors']; //rock = 0, paper = 1, siccors = 2;
// decided NOT to use an array just yet,,, still haven't gone over them and properly using them

//initialize variables
let compChoice;
let userChoice = prompt("Enter 'rock', 'paper', or 'scissors': "); //get user input
userChoice = userChoice.toLowerCase(); //could prob just do this on same line, but here for readabiltiy, etc.


//while loop to make sure userChoice is valid and not something crazy...
// 'while UserChoice is not rock and paper and scissors, keep prompting user (to end loop)'
while(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
    userChoice = prompt("Enter 'rock', 'paper', or 'scissors': ");
    userChoice = userChoice.toLowerCase();
}

//if else if else statement to assign variables  to numbers for comparison; redundant to be honest, was doing this for array
//approach at the start but now that we are only dealinng with strings, should've only converted random computer value to string
    if(userChoice === 'rock'){
        userChoice = 0;
    } else if(userChoice === 'paper'){
        userChoice = 1;
    } else if(userChoice === 'scissors'){
        userChoice = 2;
    } else {
        console.log('Invalid input!')
    }


//used to make sure userChoice parsed correctly
console.log(userChoice);
//getting html click (not necessary to do it this way, but useful to have listeners ready)

/*
const getChoiceRock= document.getElementById("rock");
const getChoicePaper = document.getElementById("paper");
const getChoiceSissors = document.getElementById("sissors");
*/


//function to generate randomized selector for array (computer)


// setting compChoice to a randomized integer and rounding w/ Math.floor; multiplying by 3 makes it so only values 0-2 (3 options)   
compChoice = Math.floor(Math.random() * 3);

console.log(compChoice);
//Comparison...

// User Wins: 0v2, 1v0, 2v1

//can def make into 1 function and use variable selector here...

//functions to convert back to strings for console print out at end... can condense down to 1 function instead of separate for comp and user
function convertStringComp(){
    if(compChoice === 0){
        compChoice = 'Rock';
    } else if (compChoice === 1){
        compChoice = 'Paper';
    } else{
        compChoice = 'Scissors';
    }
}

function convertStringUser(){
    if(userChoice === 0){
        userChoice = 'Rock';
    } else if (userChoice === 1){
        userChoice = 'Paper';
    } else{
        userChoice = 'Scissors';
    }   
}

//final set of if else statements to compare computer vs. user; ie. who will win
    if(userChoice === compChoice){
        //calling function to convert to string for output in message (rather than 'your choice was 2!' it would print 'your choice is scissors')
        convertStringComp(compChoice);
        console.log(`It's a tie!!! Both chose ${compChoice}`)
    } else if((userChoice === 0 && compChoice === 2) || (userChoice === 1 && compChoice === 0) || (userChoice === 2 && compChoice === 1)){
        convertStringUser(userChoice);
        console.log(`You win! ${userChoice} was the way to go...`);

    
    } 
    else {
        convertStringComp(compChoice);
        console.log(compChoice);
        console.log(`You lose... computer chose ${compChoice}!`);
    }




//determining user choice by button click
/*document.getElementById('rock').click
    userChoice === 0;


console.log(userChoice); */
