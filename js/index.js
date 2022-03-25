//variaveis fora de funcao que todas as funcoes podem acessar e modificar
let userScore = 0
let computerScore = 0
addGameEventClick() // Chama a funcao que adiciona o event listener nos botoes - Ja quero q ela execute assim q carregar a pagina

function addGameEventClick() {
  let choice = document.getElementsByClassName('button');
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', game);
  }
}


function updateScore(who) {
  //Podemos usar WHO 1 para o User e 2 para a maquina

  console.log(`Who called the function: ${who == 1 ? 'User' : 'Computer'}`)
  let userSpan = document.getElementById('user-score');
  let computerSpan = document.getElementById('computer-score');

  // USER
  if (userSpan && who == 1) {
    userScore += 1
    userSpan.textContent = userScore
    console.log(`User Score: ${userScore}`)
  }

  //Computer
  if (computerSpan && who == 2) {
    computerScore += 1
    computerSpan.textContent = computerScore
    console.log(`User Score: ${computerScore}`)
  }
}

function updateImageChoice(who, choice) {
  console.log(`Update image: ${choice}`)

  let paperSrc = './assets/images/main-image.webp'
  let rockSrc = './assets/images/main-image.webp'
  let scissorsSrc = './assets/images/main-image.webp'
  let choiceSelected = '' //Variavel que sera usada para guardar o SRC selecionado

  switch (choice) {
    case 'paper':
      choiceSelected = paperSrc
      break;
    case 'scissors':
     choiceSelected = scissorsSrc
      break;
    case 'rock':
     choiceSelected = rockSrc
      break;
  }

  //User
  if (who == 1) {
    let userImg = document.getElementById('user-image');
    userImg.src = choiceSelected
  }

  //Computer
  if (who == 2) {
    let compImg = document.getElementById('computer-image');
    compImg.src = choiceSelected
  }
}

//Funcao para aparecer a mesnagem de ganhador - Precisa fazer a parte do computer e adicionala na logica do game
function showWinMessage(who) {

  let div = document.getElementById('messages');

  if (who == 1) {
    div.innerHTML = 'User WON'
  }

  //Computer
  if (who == 2) {
    div.innerHTML = 'Computer WON'
  }
}

function game(userInput) {
  let userChoice = userInput.target.innerHTML != "" ? userInput.target.innerHTML.toLowerCase() : ""
  updateImageChoice(1, userChoice)
  let computerChoice = getComputerChoice()
  updateImageChoice(2, computerChoice)

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
