let choices = ['rock', 'paper', 'sissors']; //rock = 0, paper = 1, siccors = 2;

let compChoice;
let userChoice;

//getting html click (not necessary to do it this way, but useful to have listeners ready)

/*
const getChoiceRock= document.getElementById("rock");
const getChoicePaper = document.getElementById("paper");
const getChoiceSissors = document.getElementById("sissors");
*/


//function to generate randomized selector for array (computer)
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    
    compChoice = choices[randomNum];

    return compChoice;
}


//determining user choice by button click
document.getElementById('rock').click
    userChoice === 0;


console.log(userChoice);
