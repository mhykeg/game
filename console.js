playerChoice = '';
playerScore = 0;
computerScore = 0;

function playGame() {
    computerOptions = ['Scissors', 'Paper', 'Stone'];
    randomNumber = Math.floor(Math.random() *3);
    computerChoice = computerOptions[randomNumber];
}


function winner() {
    if(playerChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie, try again!";
    } else if (playerChoice === "Scissors") {
        if(computerChoice === "Paper") {
            document.getElementById("result").innerHTML = "Congratulations, you won!";
            playerScore += 1;
        } else if(computerChoice === "Stone") {
            document.getElementById("result").innerHTML = "Oh no, you lost :(";
            computerScore += 1;
        }
    } else if(playerChoice === "Paper") {
        if(computerChoice === "Stone") {
            document.getElementById("result").innerHTML = "Congratulations, you won!";
            playerScore += 1;
        } else if(computerChoice === "Scissors"){
            document.getElementById("result").innerHTML = "Oh no, you lost :(";
            computerScore += 1;
        }
    } else if (playerChoice === "Stone") {
        if(computerChoice === "Scissors") {
            document.getElementById("result").innerHTML = "Congratulations, you won!";
            playerScore += 1;
        } else if(computerChoice === "Paper"){
            document.getElementById("result").innerHTML = "Oh no, you lost :(";
            computerScore += 1;}
    }
}

function leading() {
    if (playerScore > computerScore) {
        document.getElementById("leader").innerHTML = "You are leading!"
    } else if (playerScore < computerScore) {
        document.getElementById("leader").innerHTML = "The Opponent is leading!"
    } else {
        document.getElementById("leader").innerHTML = "It's a draw!"
    }
}


function scoreCount() {
    document.getElementById("score-count").innerHTML = `Player Score: ${playerScore}. Computer Score: ${computerScore}`;
}

function scissors() {
    playGame();
    document.getElementById("opponent-choice").innerHTML = `Opponent played ${computerChoice}`;
    document.getElementById("opponent-choice").style.visibility = 'visible';
    document.getElementById("player-final-choice").innerHTML = "You played Scissors";
    playerChoice = 'Scissors';
    winner();
    document.getElementById("result").style.visibility = 'visible';
    scoreCount();
    leading();
}

function paper() {
    playGame();
    document.getElementById("opponent-choice").innerHTML = `Opponent played ${computerChoice}`;
    document.getElementById("opponent-choice").style.visibility = 'visible';
    document.getElementById("player-final-choice").innerHTML = "You played Paper";
    playerChoice = 'Paper';
    winner();
    document.getElementById("result").style.visibility = 'visible';
    scoreCount();
    leading();
}

function stone() {
    playGame();
    document.getElementById("opponent-choice").innerHTML = `Opponent played ${computerChoice}`;
    document.getElementById("opponent-choice").style.visibility = 'visible';
    document.getElementById("player-final-choice").innerHTML = "You played Stone";
    playerChoice = 'Stone';
    winner();
    document.getElementById("result").style.visibility = 'visible';
    scoreCount();
    leading();
}
