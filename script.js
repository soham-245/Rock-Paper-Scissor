function getComputerChoice(){
    const n=Math.floor(Math.random()*100);
    if(n>=0 && n<33){
        console.log("Computer chose Rock");
        return "Rock";
    }
    else if(n>=33 && n<66){
        console.log("Computer chose Paper");
        return "Paper";
    }
    console.log("Computer chose Scissors");
    return "Scissors";
}

let humanScore=0, computerScore=0;

let roundresultMsg = document.querySelector(".roundResultMessage");


let humanScoreVar = document.querySelector(".humanScore");
let computerScoreVar = document.querySelector(".computerScore");

function playRound(clickedButton){
    let humanChoice=clickedButton;
    let computerChoice=getComputerChoice();
    if(humanChoice==computerChoice){
        roundresultMsg.textContent="Its a tie! 🤝";
    }
    if(humanChoice=="Rock"){
        if(computerChoice=="Scissors"){
            humanScore++;
            roundresultMsg.textContent="You win! Rock beats Scissors 👍";
        }
        if(computerChoice=="Paper"){
            computerScore++;
            roundresultMsg.textContent="You loose! Paper beats Rock 😂";
        }   
    }
    else if(humanChoice=="Paper"){
        if(computerChoice=="Scissors"){
            computerScore++;
            roundresultMsg.textContent="You loose! Scissors beats Paper 😂";
        }
        if(computerChoice=="Rock"){
            humanScore++;
            roundresultMsg.textContent="You win! Paper beats Rock 👍";
        }  
    }
    else if(humanChoice=="Scissors"){
        if(computerChoice=="Paper"){
            humanScore++;
            roundresultMsg.textContent="You win! Scissors beats Paper 👍";
        }
        if(computerChoice=="Rock"){
            computerScore++;
            roundresultMsg.textContent="You loose! Paper beats Rock 😂";
        }
    }
    humanScoreVar.textContent=`Your Score: ${humanScore}`;
    computerScoreVar.textContent=`Computer Score: ${computerScore}`;
    if(humanScore==5 || computerScore==5) resultScreen();

}

const buttons=document.querySelector(".buttons");

let clickedButton = null;

function startRound(e){
    clickedButton=e.target.textContent;
    if(clickedButton==="Rock" || clickedButton==="Paper" || clickedButton==="Scissors"){
    playRound(clickedButton); }
}

buttons.addEventListener('click', startRound);

function playAnotherRound(){
    humanScore = 0;
    computerScore = 0;
    humanScoreVar.textContent = `Your Score: ${humanScore}`;
    computerScoreVar.textContent = `Computer Score: ${computerScore}`;
    
    buttons.style.display = "flex";
    roundresultMsg.style.display = "block"; // show round messages
    roundresultMsg.textContent = "";
    
    resultMsg.style.display = "none"; // hide end-game result
}


const resultMsg=document.querySelector(".resultMessage");

function resultScreen(){
    roundresultMsg.textContent = "";
    buttons.style.display = "none";
    let resultText=document.querySelector(".resultText");
    resultMsg.style.display = "flex";
    if(humanScore>computerScore){
        resultText.textContent="You wonnn!!🤯🥵💪";
    }
    else{
        resultText.textContent="You loose!! 🤣🫵 ";
    }
    const playAgain = document.querySelector(".playAgainButton");
    playAgain.onclick = playAnotherRound; 

}


