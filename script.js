let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("winnerCheck");

let UserInput, compterInput;
let choices = ["Rock", "Paper", "Scissor"];

let computerScore = document.getElementById("computer_score");
let userScore = document.getElementById("user_score");

let restart = document.getElementById("restart");

// Reusable function
function playGame(choice) {
    UserInput = choice;
    compterInput = choices[Math.floor(Math.random() * 3)];
    userChoice.textContent = `You : ${UserInput}`;
    computerChoice.textContent = `Computer : ${compterInput}`;

    if(UserInput == compterInput){
        result.textContent = "It's a tie"
    }
    else{
        switch (UserInput) {
            case "Rock":
                compterInput == "Paper" ? result.textContent = "You lose" : result.textContent = "You win"
                break;

            case "Paper":
                compterInput == "Scissor" ? result.textContent = "You lose" : result.textContent = "You win"
                break;

            case "Scissor":
                compterInput == "Rock" ? result.textContent = "You lose" : result.textContent = "You win"
                break;
        
        }

    }

    if(result.textContent == "You win"){
        userScore.textContent++;
        result.style.color = "green";
        
    }
    else if(result.textContent == "You lose"){
        computerScore.textContent++;
        result.style.color = "red";
    }
    else{
        result.style.color = "grey";
    }
}

// Button event listeners
rock.addEventListener("click", () => playGame("Rock"));
paper.addEventListener("click", () => playGame("Paper"));
scissor.addEventListener("click", () => playGame("Scissor"));
restart.addEventListener("click" , () => {
    computerScore.textContent = 0;
    userScore.textContent = 0;
    result.textContent = "";
    userChoice.textContent = "You :"
    computerChoice.textContent = "Computer :";
});
