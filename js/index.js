let choice = document.getElementsByClassName('button');
for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', game);
}

function game(userInput) {  
  let userChoice = userInput.target.innerHTML 
  console.log(userChoice)
  
  let computerChoice = getComputerChoice()
  console.log(computerChoice)

  if (userChoice === computerChoice) {
    'tie'
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        'user won!'
      } else if (computerChoice === 'scisor') {
        'computer won!'
      }
        } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                'user won!'
            } else if (computerChoice === 'scissors') {
                'computer won!'
            }
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
  */

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