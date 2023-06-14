const selectWinner = document.querySelector("#select-winner");
const computerChoose = document.querySelector("#computer-choose");
const btns = document.querySelectorAll('.btn');
const textpointsPlayer = document.querySelector('#player-score');
const textPointsComputer = document.querySelector('#computer-score');
let playerSelection = '';
let computerSelection = '';
let pointsPlayer = 0;
let pointsComputer = 0;

btns.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        
        let currentWinnter = playRound(playerSelection,computerSelection);
        playerSelection = e.target.id;
        computerSelection = getComputerChoise();
        computerChoose.innerHTML = "Computer selection: " + computerSelection;
        
        selectWinner.innerText = "winner is: " + currentWinnter;
        addPoint(currentWinnter);
        textpointsPlayer.innerText = `Player points: ${pointsPlayer}`;
        textPointsComputer.innerText = `Computer points: ${pointsComputer}`;
        if (pointsPlayer >= 5 || pointsComputer >=5 ) {
            alert(`The winner is ${currentWinnter}`)
            pointsComputer = 0;
            pointsPlayer = 0;
            textpointsPlayer.innerText = `Player points: ${pointsPlayer}`;
            textPointsComputer.innerText = `Computer points: ${pointsComputer}`;
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

