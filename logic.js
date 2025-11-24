function getComputerChoice() {
    let result = Math.random()
    if ((result > 0) && (result < 0.33)) {
        return "rock"

    } else if ((result > 0.33) && (result < 0.66)) {
        return "paper"
    } else {return "scissors"

    }

}

function getHumanChoice() {
    let human = prompt("Write your choice (rock/paper/scissors): ")
    return human.toLowerCase()    
}





function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tied!"
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")){
        humanScore += 1
        return "Rock beats scissors. Human win!"
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        humanScore += 1
        return "Paper beats rock. Human win!"
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")){
        humanScore += 1
        return "Scissors beats paper. Human win!"
    } else if ((computerChoice == "rock") && (humanChoice == "scissors")){
        computerScore += 1
        return "Rock beats scissors. Computer win!"
    } else if ((computerChoice == "paper") && (humanChoice == "rock")) {
        computerScore += 1
        return "Paper beats rock. Computer win!"
    } else if ((computerChoice == "scissors") && (humanChoice == "paper")){
        computerScore += 1
        return "Scissors beats paper. Computer win!"
    }

    }
    

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log(playRound(humanSelection, computerSelection))
    }
    if (computerScore == humanScore) {
        return "Tied!"
    } else if (computerScore > humanScore) {
        return "Computer win!"
    } else {
        return "Human win!"
    }

}
console.log(playGame())







