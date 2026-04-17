const options = ["rock", "paper", "scissors"]
let userSelection = process.argv.slice(2)
if (userSelection.length>1){
    console.log("Only give one input word please (rock, paper or scissors).");
} else{
    if (typeof(userSelection[0]) == "string"){
        userSelection=userSelection[0].toLowerCase()
    }else{
        userSelection=userSelection[0]
    }
    randomSelect()
    compare()
}



function randomSelect() {
    computerSelection = options[Math.floor(Math.random()*options.length)]
    return computerSelection    
}

function compare() {
    if (userSelection == computerSelection){
        console.log(`It's a tie! You chose ${userSelection}, the computer chose ${computerSelection}.`)
    } else if(userSelection == "rock" && computerSelection == "paper" || userSelection =="scissors" && computerSelection == "rock" || userSelection == "paper" && computerSelection == "scissors"){
        console.log(`Sorry, you lost! You chose ${userSelection}, the computer chose ${computerSelection}.`)
    } else if(userSelection == "paper" && computerSelection == "rock" || userSelection =="rock" && computerSelection == "scissors" || userSelection == "scissors" && computerSelection == "paper"){
        console.log(`Congratualations, you won! You chose ${userSelection}, the computer chose ${computerSelection}.`)
    } else{
        console.log("Please choose rock, paper or scissors.")
    }
}
