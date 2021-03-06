import { Game } from './game.js';
import { GameJSONSerializer } from './gameJSONSerializer.js'
import { JSONDeserializer } from './gameJSONDeserializer.js'
let game = undefined;
const json = window.localStorage.getItem('connect-four');
if(json) {
    const deserializer = new JSONDeserializer(json);
    game = deserializer.deserialize();
    updateUI();
}

const clickTargets = document.getElementById('click-targets')

function updateUI() {
    const board = document.getElementById("board-holder");
    if (game === undefined) {
        board.classList.add("is-invisible");
    } else {
        board.classList.remove("is-invisible");
    }

    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            let square = document.getElementById(`square-${i}-${j}`);
            square.innerHTML = "";
            let tokenPosition = game.getTokenAt(i, j);
            if (tokenPosition === 1) {
                let tokenDiv = document.createElement("div");
                tokenDiv.classList.add("black");
                tokenDiv.classList.add('token')
                square.appendChild(tokenDiv);
            } else if (tokenPosition === 2) {
                let tokenDiv = document.createElement("div");
                tokenDiv.classList.add("red");
                tokenDiv.classList.add('token')
                square.appendChild(tokenDiv);
            }
        }
    }


    for (let i = 0; i <= 6; i++) {
        let column = document.getElementById(`column-${i}`);
        const fullColumn = game.isColumnFull(i);
        if (fullColumn === true) {
            column.classList.add("full");
        } else {
            column.classList.remove("full");
        }
    }

    const gameName = document.getElementById("game-name");
    gameName.innerHTML = game.getName()
    const currentPlayer = game.currentPlayer;

    if (currentPlayer === 1) {
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

    clickTargets.addEventListener('click', (event) => {
        const columnToPlay = event.target.id;
        let numColumn = null;
        if (!columnToPlay.startsWith("column-")) return;
        numColumn = Number.parseInt(columnToPlay[columnToPlay.length - 1]);

        game.playInColumn(numColumn);

        const serializer = new GameJSONSerializer(game);
        const json = serializer.serialize();
        window.localStorage.setItem('connect-four', json)
        updateUI();

    })




});
