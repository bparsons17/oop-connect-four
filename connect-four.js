import { Game } from './game.js';

let game = undefined;
window.addEventListener("COMContentLoaded", event => {

    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    function newGameButtonDisable() {
        if(player1Name.length === 0 || player2Name.length === 0){
            newGameButton.disabled;
        }
    }
    player1Name.addEventListener("keyup", event => {
        newGameButtonDisable()
    })

    player2Name.addEventListener("keyup", event => {
        newGameButtonDisable()
    })



});
