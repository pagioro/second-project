let userScore = 0
let computerScore = 0

let choice = document.getElementsByClassName('button');
for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', game);
}

function updateScore(who) {
  console.log(who)
  //esse parametro WHO podemos usar para dizer se for usuario ou a maquina quem ganhou - Depois penso se podemos fazer de outro jeito rsrs
  //Podemos usar aqui 1 para o User e 2 para a maquina 


  let userScore = document.getElementById('user-score');
  let computerScore = document.getElementById('computer-score');

  if (userScore) {
    console.log(userScore)
    userScore.target.innerHTML = who
  }
}


function game(userInput) {
  let userChoice = userInput.target.innerHTML != "" ? userInput.target.innerHTML.toLowerCase() : "" // aqui vc fodeu, nao entendi mas ja vi isso, nao lembro

  let computerChoice = getComputerChoice()
  console.log(`User ${userChoice} x ${computerChoice} Computer`)


  if (userChoice === computerChoice) {
    console.log('tie')
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log('user won')
      updateScore(1)
    } else {
      console.log('computer won')
      updateScore(2)
    }
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('user won')
      updateScore(1)
    } else {
      console.log('computer won')
      updateScore(2)
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      console.log('user won')
      updateScore(1)
    } else {
      console.log('computer won')
      updateScore(2)
    }
  } else {
    console.log('Error')
  }
}

/* return computer choice */

function getComputerChoice() { //aqui
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