//initializes the scores for the player and computer
let playerScore = 0;
let computerScore = 0;
let round = 1;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//generates a random number and is assigned to either rock, paper or scissors
function computerPlay() {
	let num = Math.floor(Math.random() * 3) + 1;
	if (num === 1) {
		return 'rock';
	} else if (num === 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

//once the player (and computer) makes their choice, this function determines the winner
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock') {
		if (computerSelection === 'paper') {
			computerScore++;
			round++;
			return 'You lose, Paper beats Rock';
		} else if (computerSelection === 'scissors') {
			playerScore++;
			round++;
			return 'You win, Rock beats Scissors';
		} else {
			round++;
			return "It's a draw";
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'scissors') {
			computerScore++;
			round++;
			return 'You lose, Scissors beats Paper';
		} else if (computerSelection === 'rock') {
			playerScore++;
			round++;
			return 'You win, Paper beats Rock';
		} else {
			round++;
			return "It's a draw";
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock') {
			computerScore++;
			round++;
			return 'You lose, Rock beats Scissors';
		} else if (computerSelection === 'paper') {
			playerScore++;
			round++;
			return 'You win, Scissors beats Paper';
		} else {
			round++;
			return "It's a draw";
		}
	}
}

rock.addEventListener('click', () => {
	Click('rock');
});
paper.addEventListener('click', () => {
	Click('paper');
});
scissors.addEventListener('click', () => {
	Click('scissors');
});

function Click(playerSelection) {
	const computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
	winner();
}

function winner() {
	if (round === 6)
		if (playerScore > computerScore) {
			alert('Winner');
			reset();
		} else if (playerScore < computerScore) {
			alert('Loser');
			reset();
		} else {
			alert('tied');
		}
}

function reset() {
	round = 0;
	playerScore = 0;
	computerScore = 0;
}
