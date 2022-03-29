let userScore = 0
let computerScore = 0
const paper = 'paper'
const rock = 'rock'
const scissors = 'scissors'
const user = 'user'
const computer = 'computer'
addGameEventClick()

/**
 * Function that scan html buttons and wait for a user click.
 */
function addGameEventClick() {
  const choice = document.getElementsByClassName('button');
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', game);
  }
}

/**
 * Function that will put the values ​​in the score.
 */
function updateScore(who) {

  //console.log(`Who called the function: ${who == user ? 'User' : 'Computer'}`)
  const userSpan = document.getElementById('user-score');
  const computerSpan = document.getElementById('computer-score');

  // User
  if (userSpan && who == user) {
    userScore += 1
    userSpan.textContent = userScore
    //console.log(`User Score: ${userScore}`)
  }else if (computerSpan && who == computer) {  //Computer
    computerScore += 1
    computerSpan.textContent = computerScore
    //console.log(`User Score: ${computerScore}`)
  }
  
  showWinMessage(who);
}

/**
 * Function that will update the images when the user clicks on the buttons.
 */
function updateImageChoice(who, choice) {
  //console.log(`Update image: ${choice}`)

  const paperSrc = './assets/images/paper.webp'
  const rockSrc = './assets/images/rock.webp'
  const scissorsSrc = './assets/images/scissors.webp'
  let choiceSelected = ''

  switch (choice) {
    case paper:
      choiceSelected = paperSrc
      break;
    case scissors:
      choiceSelected = scissorsSrc
      break;
    case rock:
      choiceSelected = rockSrc
      break;
  }

  //User
  if (who == user) {
    const userImg = document.getElementById('user-image');
    userImg.src = choiceSelected
  } else if (who == computer) { //Computer
    const compImg = document.getElementById('computer-image');
    compImg.src = choiceSelected
  }
}

/**
 * Function that will change the winner's message in the div.
 */
function showWinMessage(who) {
  const div = document.getElementById('messages');
  if (who == user) {
    div.innerHTML = 'User WON!'
  } else if (who == computer) {
    div.innerHTML = 'Computer WON!'
  }
}

/**
 * Function that will compare the choices of the user and the computer.
 */
function game(userInput) {
  const userChoice = userInput.target.innerHTML != "" ? userInput.target.innerHTML.toLowerCase() : ""
  updateImageChoice(user, userChoice)
  const computerChoice = getComputerChoice()
  updateImageChoice(computer, computerChoice)

  //console.log(`User ${userChoice} x ${computerChoice} Computer`)


  if (userChoice === computerChoice) {
    const div = document.getElementById('messages')
    div.innerHTML = 'Tie!'
  } else if (userChoice === paper) {
    if (computerChoice === rock) {
      //console.log('user won')
      updateScore(user)
    } else {
      //console.log('computer won')
      updateScore(computer)
    }
  } else if (userChoice === rock) {
    if (computerChoice === paper) {
      //console.log('computer won')
      updateScore(computer)
    } else {
      // console.log('user won') 
      updateScore(user)
    }
  } else if (userChoice === scissors) {
    if (computerChoice === paper) {
      // console.log('user won')
      updateScore(user)
    } else {
      //console.log('computer won')
      updateScore(computer)
    }
  } else {
    console.log('Error')
  }
}

/**
 * Function that return the computer choice
 */
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
  }
}