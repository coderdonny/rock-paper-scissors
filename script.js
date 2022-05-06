//initializes the scores for the player and computer
let playerScore = 0;
let computerScore = 0;
let round = 0;
let winner;
let gameOver = false;

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
	if (round === 4) {
		gameOver = true;
		scoreCheck();
		modal_container.classList.add('show');
		mask.classList.add('show');
		console.log('gameOver');
	}
	if (playerSelection === 'rock') {
		if (computerSelection === 'paper') {
			computerScore++;
			round++;
			roundMessage(`Round ${round}: You lose, Paper beats Rock`);
		} else if (computerSelection === 'scissors') {
			playerScore++;
			round++;
			roundMessage(`Round ${round}: You win, Rock beats Scissors`);
		} else {
			round++;
			roundMessage(`Round ${round}: It's a draw`);
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'scissors') {
			computerScore++;
			round++;
			roundMessage(`Round ${round}: You lose, Scissors beats Paper`);
		} else if (computerSelection === 'rock') {
			playerScore++;
			round++;
			roundMessage(`Round ${round}: You win, Paper beats Rock`);
		} else {
			round++;
			roundMessage(`Round ${round}: It's a draw`);
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock') {
			computerScore++;
			round++;
			roundMessage(`Round ${round}: You lose, Rock beats Scissors`);
		} else if (computerSelection === 'paper') {
			playerScore++;
			round++;
			roundMessage(`Round ${round}: You win, Scissors beats Paper`);
		} else {
			round++;
			roundMessage("It's a draw");
		}
	}
}

const message = document.querySelector('.outcomeMessage');
const content = document.createElement('div');

function roundMessage(input) {
	// content.classList.add('content');
	content.textContent = input;

	message.appendChild(content);
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
}

// if (gameOver = true){
// 		if (input === 'player') {
// 			winningMessage(`WINNER! ${playerScore} : ${computerScore}`)
// 		} else if ((input = 'computer')) {
// 			winningMessage(`WINNER! ${playerScore} : ${computerScore}`)
// 		} else {
// 			winningMessage(`WINNER! ${playerScore} : ${computerScore}`)
// 		}
// 	}
// }

function scoreCheck() {
	if (round === 4) {
		if (playerScore > computerScore) {
			endGameMessage(`WINNER! ${playerScore} : ${computerScore}`);
		} else if (playerScore < computerScore) {
			endGameMessage(`LOSER! ${playerScore} : ${computerScore}`);
		} else {
			endGameMessage(`TIED GAME! ${playerScore} : ${computerScore}`);
		}
	}
}

function reset() {
	round = 0;
	playerScore = 0;
	computerScore = 0;
	content.parentNode.removeChild(div);
}

const open = document.querySelector('#open');
const modal_container = document.querySelector('#modal-container');
const close = document.querySelector('#close');

const mask = document.querySelector('#page-mask');

// open.addEventListener('click', () => {
// 	modal_container.classList.add('show');
// });

close.addEventListener('click', () => {
	modal_container.classList.remove('show');
	mask.classList.remove('show');
	reset();
});

// modal_container.classList.add('show');

const modal = document.querySelector('.modal');
const endMessage = document.createElement('h1');

function endGameMessage(input) {
	endMessage.classList.add('content');
	endMessage.textContent = input;

	modal.appendChild(endMessage);
}
