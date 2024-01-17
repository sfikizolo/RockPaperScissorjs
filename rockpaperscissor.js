let userChoice = '';

function handleChoice(choice) {
    userChoice = choice;
}

function playGame() {

    const compArray = ["r", "p", "s"];
    const compMapping = { "r": "Rock", "p": "Paper", "s": "Scissors" };
    const compChoice = compArray[Math.floor(Math.random() * compArray.length)];

    let result;
    if (userChoice === compChoice) {
        result = "It's a draw";
    } else if ((compChoice === "s" && userChoice === "r") || (compChoice === "r" && userChoice === "p") || (compChoice === "p" && userChoice === "s")) {
        result = "You win!";
    } else {
        result = "The computer wins!";
    }

    document.getElementById('result').innerHTML = `The computer choice is ${compMapping[compChoice]}<br>Your choice is ${compMapping[userChoice]}<br>${result}`;
}