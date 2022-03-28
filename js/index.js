let userScore = 0
let computerScore = 0
addGameEventClick()

/**
 * Function that scan html buttons and wait for a user click.
 */
function addGameEventClick() {
  let choice = document.getElementsByClassName('button');
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', game);
  }
}

/**
 * Function that will put the values ​​in the score.
 */
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

/**
 * Function that will update the images when the user clicks on the buttons.
 */
function updateImageChoice(who, choice) {
  console.log(`Update image: ${choice}`)

  let paperSrc = './assets/images/paper.webp'
  let rockSrc = './assets/images/rock.webp'
  let scissorsSrc = './assets/images/scissors.webp'
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

/**
 * Function that will change the winner's message in the div.
 */
function showWinMessage(who) {
  let div = document.getElementById('messages');
  if (who == 1) {
    div.innerHTML = 'User WON!'      
  } else if (who == 2) {
    div.innerHTML = 'Computer WON!'    
  } 
}

/**
 * Function that will compare the choices of the user and the computer.
 */
function game(userInput) {
  let userChoice = userInput.target.innerHTML != "" ? userInput.target.innerHTML.toLowerCase() : ""
  updateImageChoice(1, userChoice)
  let computerChoice = getComputerChoice()
  updateImageChoice(2, computerChoice)

  console.log(`User ${userChoice} x ${computerChoice} Computer`)


if (userChoice === computerChoice) {  
  let div = document.getElementById('messages')
  div.innerHTML = 'Tie!'  
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
    console.log('computer won')
    updateScore(2) 
  } else {
    console.log('user won') 
    updateScore(1) 
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

/**
 * Function that return the computer choice
 */
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