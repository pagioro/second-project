
let choice = document.getElementsByClassName('button');
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', userInput);
}

function userInput(user) { 
    console.log(user.target.innerHTML) 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
  }
  
    /*
function getComputerChoice() {
  const randomNumber = Math.floor(Math.ramdom() * 3);
    switch(randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    break;
    }
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
