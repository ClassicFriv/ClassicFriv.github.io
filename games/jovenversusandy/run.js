// Moves and their corresponding damage
const moves = {
    "Andy": {
        "The Spinning Incident": 30,
        "The 'Morey' Incident": 20,
        "The 'Insoluble' Incident": 25,
        "Telescope": 35
    },
    "Joven": {
        "The Wednesday Incident": 25,
        "Diabetus": 40
    }
};

let currentPlayer;
let currentHP = {
    "Andy": 200,
    "Joven": 200
};

// Function to choose player and start the game
function choosePlayer(player) {
    currentPlayer = player;
    updateMoves();
    document.getElementById('player-choice').style.display = 'none';
}

// Function to update moves based on the chosen player
function updateMoves() {
    const moveList = currentPlayer === "Andy" ? moves.Andy : moves.Joven;
    const moveContainer = currentPlayer === "Andy" ? document.getElementById('andy-moves') : document.getElementById('joven-moves');
    moveContainer.innerHTML = "";
    for (const move in moveList) {
        moveContainer.innerHTML += `<li>${move}</li>`;
    }
}

// Function to perform a move
function performMove(move) {
    const damage = moves[currentPlayer][move];
    currentHP[currentPlayer === "Andy" ? "Joven" : "Andy"] -= damage;
    checkGameStatus();
}

// Function to check game status
function checkGameStatus() {
    if (currentHP.Andy <= 0) {
        endGame("Joven");
    } else if (currentHP.Joven <= 0) {
        endGame("Andy");
    }
}

// Function to end the game
function endGame(winner) {
    document.getElementById('game-title').innerText = `${winner} is the winner!`;
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('result-text').innerText = `${winner} is the winner!`;
    document.body.style.backgroundColor = winner === "Andy" ? "#add8e6" : "#ffcccc";
}

// Timer to change background color every 8 seconds
setInterval(() => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "#add8e6" ? "#ffcccc" : "#add8e6";
}, 8000);
