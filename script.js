let choices = ['rock', 'paper', 'sissors']; //rock = 0, paper = 1, siccors = 2;

let compChoice;


//function to generate randomized selector for array (computer)
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    
    compChoice = choices[randomNum];

    return compChoice;
}

console.log(getComputerChoice());