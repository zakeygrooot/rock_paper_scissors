function startGame() {
    const userName = document.getElementById('username').value;
    const greeting = document.getElementById('greeting');
    const gameArea = document.getElementById('gameArea');

    if (userName.toLowerCase() === "sapna") {
        greeting.textContent = `Hello ${userName}, my love. Shall we start?`;
    } else {
        greeting.textContent = `Hello ${userName}. My name is Waseem.`;
    }

    gameArea.style.display = 'block';
}

function playGame(userChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = Math.floor(Math.random() * 3);
    const result = document.getElementById('result');

    if (userChoice === computerChoice) {
        result.innerHTML = `Computer chose: ${choices[computerChoice]}<br>It's a draw!`;
    } else if (
        (userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)
    ) {
        result.innerHTML = `You chose: ${choices[userChoice]}<br>Computer chose: ${choices[computerChoice]}<br>You won!`;
    } else {
        result.innerHTML = `You chose: ${choices[userChoice]}<br>Computer chose: ${choices[computerChoice]}<br>You lost!`;
    }
}
