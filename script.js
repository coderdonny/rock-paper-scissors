//initializes the scores for the player and computer
let playerScore = 0;
let computerScore = 0;
let round = 1;
let winner;
let gameOver = false;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//Stores Player and Computer PNG score images
const scoreZero = document.querySelector('.scoreZero');
const scoreOne = document.querySelector('.scoreOne');
const scoreTwo = document.querySelector('.scoreTwo');
const scoreThree = document.querySelector('.scoreThree');
const scoreFour = document.querySelector('.scoreFour');
const scoreFive = document.querySelector('.scoreFive');

const computerScoreZero = document.querySelector('.computerScoreZero');
const computerScoreOne = document.querySelector('.computerScoreOne');
const computerScoreTwo = document.querySelector('.computerScoreTwo');
const computerScoreThree = document.querySelector('.computerScoreThree');
const computerScoreFour = document.querySelector('.computerScoreFour');
const computerScoreFive = document.querySelector('.computerScoreFive');

//selects modal and header message
const modal = document.querySelector('.modal');
const endMessage = document.createElement('h1');

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
			updateComputerScore(computerScore);
			roundMessage(`Round ${round}: You lose, Paper beats Rock`);
		} else if (computerSelection === 'scissors') {
			playerScore++;
			updatePlayerScore(playerScore);
			roundMessage(`Round ${round}: You win, Rock beats Scissors`);
		} else {
			roundMessage(`Round ${round}: It's a draw`);
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'scissors') {
			computerScore++;
			updateComputerScore(computerScore);
			roundMessage(`Round ${round}: You lose, Scissors beats Paper`);
		} else if (computerSelection === 'rock') {
			playerScore++;
			updatePlayerScore(playerScore);
			roundMessage(`Round ${round}: You win, Paper beats Rock`);
		} else {
			roundMessage(`Round ${round}: It's a draw`);
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock') {
			computerScore++;
			updateComputerScore(computerScore);
			roundMessage(`Round ${round}: You lose, Rock beats Scissors`);
		} else if (computerSelection === 'paper') {
			playerScore++;
			updatePlayerScore(playerScore);
			roundMessage(`Round ${round}: You win, Scissors beats Paper`);
		} else {
			roundMessage(`Round ${round}: It's a draw`);
		}
	}

	if (round === 5) {
		gameOver = true;
		scoreCheck();
		if (winner === 'player') {
			modal.style.backgroundColor = 'green';
			modal_container.classList.add('show');
			mask.classList.add('show');
		} else if (winner === 'computer') {
			modal.style.backgroundColor = 'red';
			modal_container.classList.add('show');
			mask.classList.add('show');
		} else if (winner === 'tied') {
			modal.style.backgroundColor = 'yellow';
			modal_container.classList.add('show');
			mask.classList.add('show');
		}
	}
	round++;
}

if (playerScore === 0) {
	scoreZero.classList.add('show');
}

if (computerScore === 0) {
	computerScoreZero.classList.add('show');
}

//updates players score with result from playRound function
function updatePlayerScore(score) {
	if (score === 0) {
		scoreZero.classList.add('show');
	} else if (score === 1) {
		scoreZero.classList.remove('show');
		scoreOne.classList.add('show');
	} else if (score === 2) {
		scoreOne.classList.remove('show');
		scoreTwo.classList.add('show');
	} else if (score === 3) {
		scoreTwo.classList.remove('show');
		scoreThree.classList.add('show');
	} else if (score === 4) {
		scoreThree.classList.remove('show');
		scoreFour.classList.add('show');
	} else if (score === 5) {
		scoreFour.classList.remove('show');
		scoreFive.classList.add('show');
	}
}

//updates computers score with result from playRound function
function updateComputerScore(score) {
	if (score === 0) {
		computerScoreZero.classList.add('show');
	} else if (score === 1) {
		computerScoreZero.classList.remove('show');
		computerScoreOne.classList.add('show');
	} else if (score === 2) {
		computerScoreOne.classList.remove('show');
		computerScoreTwo.classList.add('show');
	} else if (score === 3) {
		computerScoreTwo.classList.remove('show');
		computerScoreThree.classList.add('show');
	} else if (score === 4) {
		computerScoreThree.classList.remove('show');
		computerScoreFour.classList.add('show');
	} else if (score === 5) {
		computerScoreFour.classList.remove('show');
		computerScoreFive.classList.add('show');
	}
}

const message = document.querySelector('.outcomeMessage');
const content = document.createElement('div');

//appends a message with the results of the round
function roundMessage(input) {
	content.textContent = input;
	message.appendChild(content);
}

//clicking one of the below triggers a game
rock.addEventListener('click', () => {
	Click('rock');
});
paper.addEventListener('click', () => {
	Click('paper');
});
scissors.addEventListener('click', () => {
	Click('scissors');
});

//takes user choice and sends it to playRound()
function Click(playerSelection) {
	console.log(playRound(playerSelection, computerPlay()));
}

//checks the score at the end of the game and determines a winner
function scoreCheck() {
	if (round === 5) {
		if (playerScore > computerScore) {
			winner = 'player';
			endGameMessage(`WINNER! ${playerScore} : ${computerScore}`);
		} else if (playerScore < computerScore) {
			endGameMessage(`LOSER! ${playerScore} : ${computerScore}`);
			winner = 'computer';
		} else {
			endGameMessage(`TIED GAME! ${playerScore} : ${computerScore}`);
			winner = 'tied';
		}
	}
}

//resets variables to start new game
function reset() {
	round = 1;
	playerScore = 0;
	computerScore = 0;
	content.parentNode.removeChild(content);
	gameOver = false;
	winner = '';
	clearScores();
}

const open = document.querySelector('#open');
const modal_container = document.querySelector('#modal-container');
const close = document.querySelector('.modal-container');

const mask = document.querySelector('#page-mask');

//When closing modal at end of the game
close.addEventListener('click', () => {
	modal_container.classList.remove('show');
	mask.classList.remove('show');

	scoreOne.classList.remove('show');
	scoreTwo.classList.remove('show');
	scoreThree.classList.remove('show');
	scoreFour.classList.remove('show');
	scoreFive.classList.remove('show');

	computerScoreOne.classList.remove('show');
	computerScoreTwo.classList.remove('show');
	computerScoreThree.classList.remove('show');
	computerScoreFour.classList.remove('show');
	computerScoreFive.classList.remove('show');
	scoreZero.classList.add('show');
	computerScoreZero.classList.add('show');
	reset();
});

//takes winning message and appends to modal
function endGameMessage(input) {
	endMessage.classList.add('content');
	endMessage.textContent = input;
	modal.appendChild(endMessage);
}
