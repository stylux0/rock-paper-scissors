




game();

function game(){
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choouse rock, paper or scissors").toLowerCase();
        const computerSelection = getComputerChoise();
        console.log(`Round ${i+1}`);
        console.log(`player selected: ${playerSelection}`);
        console.log(`computer select: ${computerSelection}`);
        console.log(`The winner is:  ${playRound(playerSelection,computerSelection)}`);
        console.log(` `);  
    }
}


function playRound(playerSelection,computerSelection){
    
    let whomWon = "player";
    

    if (playerSelection === computerSelection) whomWon = "no one, it's a tie";
 
    if (playerSelection === "rock" && computerSelection==="paper") whomWon = "Computer";
   
    if (playerSelection === "paper" && computerSelection === "scissors") whomWon="Computer";
 
    if (playerSelection === "scissors" && computerSelection === "rock") whomWon="Computer";
  

    return whomWon;
}



function getComputerChoise(){
    let collectionChoise = ["rock","paper","scissors"];
    let positionToSend = Math.floor(Math.random() * collectionChoise.length);
    return collectionChoise[positionToSend];
}

