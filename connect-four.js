import { Game } from './game.js';

let game = undefined;
window.addEventListener("COMContentLoaded", event => {

    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    function newGameButtonDisable() {
        let player1Content = player1Name.value;
        let player2content = player2Name.value;
        newGameButton.disabled = player1Content.length === 0 || player2content.length === 0;
    }
    player1Name.addEventListener("keyup", event => {
        newGameButtonDisable()
    })

    player2Name.addEventListener("keyup", event => {
        newGameButtonDisable()
    })



});
