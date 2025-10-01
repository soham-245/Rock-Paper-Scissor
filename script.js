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

// function getHumanChoice(){
//     var choice=prompt("Enter your choice: \n1 for Rock.\n2 for Paper.\n3 for Scissor.");
//     if(choice==1){
//         console.log("You chose Rock");
//         return "Rock";
//     }
//     else if(choice==2){
//         console.log("You chose Paper");
//         return "Paper";
//     }
//     else if(choice==3){
//         console.log("You chose Scissor");
//         return "Scissor";
//     }
//     return null;    
// }

let humanScore=0, computerScore=0;

function playRound(clickedButton){
    let humanChoice=clickedButton;
    let computerChoice=getComputerChoice();
    if(humanChoice==computerChoice) console.log("Its a tie!")
    if(humanChoice=="Rock"){
        if(computerChoice=="Scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors :)");
        }
        if(computerChoice=="Paper"){
            computerScore++;
            console.log("You loose! Paper beats Rock :(")
        }   
    }
    else if(humanChoice=="Paper"){
        if(computerChoice=="Scissors"){
            computerScore++;
            console.log("You loose! Scissors beats Paper :(");
        }
        if(computerChoice=="Rock"){
            humanScore++;
            console.log("You win! Paper beats Rock :)")
        }  
    }
    else if(humanChoice=="Scissors"){
        if(computerChoice=="Paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper :)");
        }
        if(computerChoice=="Rock"){
            computerScore++;
            console.log("You loose! Paper beats Rock :(")
        }
    }
}

const buttons=document.querySelector(".buttons");

let clickedButton = null;

function startRound(e){
    clickedButton=e.target.textContent;
    if(clickedButton==="Rock" || clickedButton==="Paper" || clickedButton==="Scissors"){
    playRound(clickedButton); }
}
while(humanScore<5 || computerScore<5){
buttons.addEventListener('click', startRound);}

