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
    return "Scissor";
}

function getHumanChoice(){
    var choice=prompt("Enter your choice: \n1 for Rock.\n2 for Paper.\n3 for Scissor.");
    if(choice==1){
        console.log("You chose Rock");
        return "Rock";
    }
    else if(choice==2){
        console.log("You chose Paper");
        return "Paper";
    }
    else if(choice==3){
        console.log("You chose Scissor");
        return "Scissor";
    }
    return null;    
}

function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    if(humanChoice==computerChoice) console.log("Its a tie!")
    if(humanChoice=="Rock"){
        if(computerChoice=="Scissor"){
            humanScore++;
            console.log("You win! Rock beats Scissors :)");
        }
        if(computerChoice=="Paper"){
            computerScore++;
            console.log("You loose! Paper beats Rock :(")
        }   
    }
    else if(humanChoice=="Paper"){
        if(computerChoice=="Scissor"){
            computerScore++;
            console.log("You loose! Scissors beats Paper :(");
        }
        if(computerChoice=="Rock"){
            humanScore++;
            console.log("You win! Paper beats Rock :)")
        }  
    }
    else if(humanChoice=="Scissor"){
        if(computerChoice=="Paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper :)");
        }
        if(computerChoice=="Rock"){
            computerScore++;
            console.log("You loose! Paper beats Rock :(")
        }
    }
    else console.log("Invalid Choice :/");
}

let humanScore=0, computerScore=0;

function playGame(){
    for(let i=0;i<5;i++){
        playRound();
        console.log("\n");
    }
    console.log(`Score: You-${humanScore}/Computer-${computerScore}`);
}

playGame();