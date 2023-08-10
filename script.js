const selectWinner = document.querySelector("#select-winner");
const computerChoose = document.querySelector("#computer-choose");
const playerChoose = document.querySelector('#player-choose');
const btns = document.querySelectorAll('.btn');
const textpointsPlayer = document.querySelector('#player-score');
const textPointsComputer = document.querySelector('#computer-score');
let playerSelection = '';
let computerSelection = '';
let pointsPlayer = 0;
let pointsComputer = 0;

btns.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        computerSelection = getComputerChoise();
        playerSelection = e.target.id;
        let currentWinnter = playRound(playerSelection,computerSelection);
        styleTextWinnter(currentWinnter);
        
        
        let computerTextSelecction = getTextComputerSelecction(computerSelection);
        computerChoose.innerHTML = "Computer: " + computerTextSelecction;
        playerChoose.innerText = "Player: " + getTextComputerSelecction(playerSelection);
        
        selectWinner.innerText = "winner is: " + currentWinnter;
        addPoint(currentWinnter);
        if(currentWinnter === "player") textpointsPlayer.innerText += '✔';
        if(currentWinnter === "computer") textPointsComputer.innerText += '✔';
        
        if (pointsPlayer >= 5 || pointsComputer >=5 ) {
           
            
            pointsComputer = 0;
            pointsPlayer = 0;
            alert(`The winner is ${currentWinnter}`)
            textpointsPlayer.innerText = 'Player: ';
            textPointsComputer.innerText = 'Computer: ';
            selectWinner.innerText = '';
            computerChoose.innerHTML = "Computer: ";
            playerChoose.innerText = "Player: ";
            
        }
        
    },false )
    
});


function addPoint(textWinner){
    if(textWinner === "player")pointsPlayer++;
    else if(textWinner === "computer") pointsComputer++
}




/*function game(){
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choouse rock, paper or scissors").toLowerCase();
        const computerSelection = getComputerChoise();
        console.log(`Round ${i+1}`);
        console.log(`player selected: ${playerSelection}`);
        console.log(`computer select: ${computerSelection}`);
        console.log(`The winner is:  ${playRound(playerSelection,computerSelection)}`);
        console.log(` `);  
    }
}*/


function playRound(playerSelection,computerSelection){
    
    let whomWon = "player";
    

    if (playerSelection === computerSelection) whomWon = "no one, it's a tie";
 
    if (playerSelection === "rock" && computerSelection==="paper") whomWon = "computer";
   
    if (playerSelection === "paper" && computerSelection === "scissors") whomWon="computer";
 
    if (playerSelection === "scissors" && computerSelection === "rock") whomWon="computer";
  

    return whomWon;
}



function getComputerChoise(){
    let collectionChoise = ["rock","paper","scissors"];
    let positionToSend = Math.floor(Math.random() * collectionChoise.length);
    return collectionChoise[positionToSend];
}

function getTextComputerSelecction(selection){
    if(selection === "scissors") return "✌";
    if(selection === "rock") return "✊"; 
    if(selection === "paper") return "👋";

}

function styleTextWinnter(currentWinnter){
    if (currentWinnter === "computer") selectWinner.style.color = "red";
    else if(currentWinnter === "player") selectWinner.style.color = "green";
    else selectWinner.style.color = "yellow";
}

