let choice = document.getElementsByClassName('button');
for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', game);
}

function game(userInput) {
  let userChoice = userInput.target.innerHTML != "" ? userInput.target.innerHTML.toLowerCase() : ""
  
  let computerChoice = getComputerChoice()
  console.log(`User ${userChoice} x ${computerChoice} Computer`)

  if (userChoice === computerChoice) {
   console.log('tie')
  }else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log('user won')
    } else  {
      console.log('computer won')
    }
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('user won')
    } else  {
     console.log('computer won')
    }
  } else if (userChoice === 'scissors') { 
    if (computerChoice === 'paper') {
      console.log('user won')
    }else {
      console.log('computer won')
    }
  }else{
   console.log('Error')
  }
}

/* return computer choice */

function getComputerChoice() { 
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

let userScore = document.getElementById('user-score').innerHTML;
let computerScore = document.getElementById('computer-score').innerHTML;

















// document.getElementById('messages').innerHTML += '<br>Some new content!';

/*
  let userGame = game(userInput);
  let computerGame = getComputerChoice();

  if ((userGame === 'scissors' && computerGame === 'paper') || (userGame === 'rock' && computerGame === 'scissors') || (userGame === 'paper' && computerGame === 'rock')) {
    'you won!'
  } if (userGame === computerGame) {
    'the game is a tie!'
  } else {
    'the computer won!'
  }
  
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