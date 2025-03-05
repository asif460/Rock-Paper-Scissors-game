// Rock Paper Scissors Game

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        if (["rock", "paper", "scissors"].includes(choice)) {
            return choice;
        }
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    }

    console.log("\nFinal Result:");
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("😢 Game over! The computer wins.");
    } else {
        console.log("🤝 It's a draw!");
    }
}

// Start the game
playGame();
