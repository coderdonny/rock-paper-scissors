function computerPlay() {
	let num = Math.floor(Math.random() * 3) + 1;
	if (num === 1) {
		return 'Rock';
	} else if (num === 2) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'Rock') {
		if (computerSelection === 'Paper') {
			return 'You lose, Paper beats Rock';
		} else if (computerSelection === 'Scissors') {
			return 'You win, Rock beats Scissors';
		} else {
			return "It's a draw";
		}
	} else if (playerSelection === 'Paper') {
		if (computerSelection === 'Scissors') {
			return 'You lose, Scissors beats Paper';
		} else if (computerSelection === 'Rock') {
			return 'You win, Paper beats Rock';
		} else {
			return "It's a draw";
		}
	} else if (playerSelection === 'Scissors') {
		if (computerSelection === 'Rock') {
			return 'You lose, Rock beats Scissors';
		} else if (computerSelection === 'Paper') {
			return 'You win, Scissors beats Paper';
		} else {
			return "It's a draw";
		}
	}
}
function game() {
	for (let i = 0; i <= 5; i++) {
		playRound(prompt('Choose your weapon!'), computerPlay);
	}
}

// if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
//     return 'You win! Rock beats Scissors!';
// } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
//     return `You Lose! Paper beats Rock!`;
// } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
//     return `It's a tie!`;
//
