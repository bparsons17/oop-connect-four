import { Game } from './game.js';

let game = undefined;

const clickTargets = document.getElementById('click-targets')

function updateUI() {
    const board = document.getElementById("board-holder");
    if (game === undefined) {
        board.classList.add("is-invisible");
    } else {
        board.classList.remove("is-invisible");
    }
    const gameName = document.getElementById("game-name");
    gameName.innerHTML = game.getName()
    const currentPlayer = game.currentPlayer;

    if(currentPlayer === 1) {
        clickTargets.classList.add('black');
        clickTargets.classList.remove('red')
    } else {
        clickTargets.classList.add("red");
        clickTargets.classList.remove("black");
    }

}


window.addEventListener("DOMContentLoaded", event => {

    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    function newGameButtonDisable() {
        let player1Content = player1Name.value;
        let player2Content = player2Name.value;

        newGameButton.disabled = player1Content.length === 0 || player2Content.length === 0;
    }
    player1Name.addEventListener("keyup", event => {
        newGameButtonDisable()
    })

    player2Name.addEventListener("keyup", event => {
        newGameButtonDisable()
    })

    newGameButton.addEventListener("click", event => {
        game = new Game(player1Name.value, player2Name.value)
        player1Name.value = '';
        player2Name.value = '';
        newGameButton.disabled = true;
        updateUI();
    })

    clickTargets.addEventListener('click', () => {
        const columnToPlay = event.target.id;
        let numColumn = null;
        if(columnToPlay.startsWith('columns-')) {
            let numsArray = columnToPlay.split('-')
            numColumn = Number.parseInt(numsArray[1])
        }
    
        game.playInColumn(numColumn);
        updateUI();

    })







});
