let userScore = 0
let computerScore = 0
addGameEventClick() 

function addGameEventClick() {
  let choice = document.getElementsByClassName('button');
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', game);
  }
}

function updateScore(who) {

  console.log(`Who called the function: ${who == 1 ? 'User' : 'Computer'}`)
  let userSpan = document.getElementById('user-score');
  let computerSpan = document.getElementById('computer-score');

  // User
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
  showWinMessage(who);     
}

function updateImageChoice(who, choice) {
  console.log(`Update image: ${choice}`)

  let paperSrc = './assets/images/paper.png'
  let rockSrc = './assets/images/rock.png'
  let scissorsSrc = './assets/images/scissors.png'
  let choiceSelected = '' 

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

function showWinMessage(who) {
  let div = document.getElementById('messages');
  //User
  if (who == 1) {
    div.innerHTML = 'User WON!'
    console.log(showWinMessage(who))
  }
  //Computer
  if (who == 2) {
    div.innerHTML = 'Computer WON!'
    console.log(showWinMessage(who))
  }

  /*
    tie  
    if ((who == 2) && (who == 1)) {
      div.innerHTML = 'tie!'
      console.log(showWinMessage(who))
    }
  */
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

/* Return Computer Choice */
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





