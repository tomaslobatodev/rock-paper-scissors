const play = document.getElementById('play')
const output = document.getElementById('output')
const finalResult = document.getElementById('finalResult')
const playerWinsHTML = document.getElementById('playerWins')
const botWinsHTML = document.getElementById('botWins')

let playerWins = 0;
let botWins = 0;

function addPoint(winner) {
    if (winner === 'player') playerWins = playerWins + 1
    else if (winner === 'bot') botWins = botWins + 1

    playerWinsHTML.innerHTML = playerWins
    botWinsHTML.innerHTML = botWins


    if (playerWins === 5) {
        output.innerHTML = ''
        finalResult.innerHTML = "You won the game! 🎉"
        play.disabled = true
    }
    else if (botWins === 5) {
        output.innerHTML = ''
        finalResult.innerHTML = "You lost the game. ☹️"
        play.disabled = true
    }
}

function getPlayerChoice() {
    const choice = document.getElementById('input').value
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        output.innerHTML = '<p class="invalidInput">Invalid input<p>'
    } else {
       getBotChoice(choice)
    }
}

function getBotChoice(playerChoice) {
    let choice = ""
    const numChoice = Math.floor(Math.random() * 3)
    if (numChoice === 0) {
        choice = "rock"
    } else if (numChoice === 1) {
        choice = "paper"
    } else if (numChoice === 2) {
        choice = "scissors"
    }
    fight(choice, playerChoice)
}

function fight(bot, player) {
    output.innerHTML = `<p>Bot: ${bot} --- You: ${player} </p>`
    // player wins
    if (bot === 'paper' && player === 'scissors') winner('player')
    else if (bot === 'rock' && player === 'paper') winner('player')
    else if (bot === 'scissors' && player === 'rock') winner('player')
    // bot wins
    else if (bot === 'paper' && player === 'rock') winner('bot')
    else if (bot === 'rock' && player === 'scissors') winner('bot')
    else if (bot === 'scissors' && player === 'paper') winner('bot')
    // match
    else winner('match')
}

function winner(result) {
    if (result === 'player') {
        output.innerHTML += "<p class='win'>You Win! 🎉</p>"
        addPoint('player')
    }
    else if (result === 'bot') {
        output.innerHTML += "<p class='lose'>You Lose ☹️</p>"
        addPoint('bot')
    }
    else output.innerHTML += "<p class='match'>It's a match 🤝</p>"
}

play.addEventListener('click', getPlayerChoice)
