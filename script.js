//initializes the scores for the player and computer
let playerScore = 0;
let computerScore = 0;

//generates a random number and is assigned to either rock, paper or scissors
function computerPlay() {
	let num = Math.floor(Math.random() * 3) + 1;
	if (num === 1) {
		return 'ROCK';
	} else if (num === 2) {
		return 'PAPER';
	} else {
		return 'SCISSORS';
	}
}

//once the player (and computer) makes their choice, this function determines the winner
function playRound(playerSelection, computerSelection) {
	if (
		!(
			playerSelection.toUpperCase() === 'ROCK' ||
			playerSelection.toUpperCase() === 'PAPER' ||
			playerSelection.toUpperCase() === 'SCISSORS'
		)
	) {
		return 'Selection Error';
	} else {
		if (playerSelection.toUpperCase() === 'ROCK') {
			if (computerSelection === 'PAPER') {
				computerScore++;
				return 'You lose, Paper beats Rock';
			} else if (computerSelection === 'SCISSORS') {
				playerScore++;
				return 'You win, Rock beats Scissors';
			} else {
				return "It's a draw";
			}
		} else if (playerSelection.toUpperCase() === 'PAPER') {
			if (computerSelection === 'SCISSORS') {
				computerScore++;
				return 'You lose, Scissors beats Paper';
			} else if (computerSelection === 'ROCK') {
				playerScore++;
				return 'You win, Paper beats Rock';
			} else {
				return "It's a draw";
			}
		} else if (playerSelection.toUpperCase() === 'SCISSORS') {
			if (computerSelection === 'ROCK') {
				computerScore++;
				return 'You lose, Rock beats Scissors';
			} else if (computerSelection === 'PAPER') {
				playerScore++;
				return 'You win, Scissors beats Paper';
			} else {
				return "It's a draw";
			}
		}
	}
}

//runs the playRound() functions 5 times and determines the winner
function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(prompt(), computerPlay()));
	}
	if (playerScore > computerScore) {
		console.log(
			`The score is ${playerScore} : ${computerScore}, You are the WINNER!`
		);
	} else if (playerScore < computerScore) {
		console.log(
			`The score is ${playerScore} : ${computerScore}, You LOST!:(`
		);
	} else {
		console.log('Congrats, you tied.');
	}
}

//initializes the games
game();
