
let choice = document.getElementsByClassName('button');
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', game);
}

function game(userInput) { 
    console.log(user.target.innerHTML) 
    if (game === 'rock' || game === 'paper' || game === 'scissors') {
      return game;
    }
  }
  
function getComputerChoice() {  
  let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    }
  }

  console.log(getComputerChoice());


  let userGame = game();
  let computerGame = getComputerChoice();

  if ((userGame === 'scissors' && computerGame === 'paper') || (userGame === 'scissors' && computerGame === 'paper') || (userGame === 'paper' && computerGame === 'rock')) {
    'you won!'
  } if (userGame === computerGame) {
    'the game is a tie!'
  } else {
    'the computer won!'
  }

  /*
  
function winner (userChoice, computerChoice) {
   if (userChoice === computerChoice) {
     return 'the game is a tie!';
   }  
   if (userChoice === 'rock') {
     if (computerChoice === 'paper') {
       return 'the computer won!';
     } else {
       return 'you won!';
     }
   }

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'the computer won!';
  } else {
    return 'you won!';
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'the computer won!';
  } else {
    return 'you won!';
    }
  }
}



function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log("User:  " + userChoice);
    console.log("Computer:  " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

*/
