import { Game } from "./game.js";

export class JSONDeserializer {
    constructor (JSON) {
        this.JSON = JSON;
    }

    deserialize() {
        const data = JSON.parse(this.JSON);
        const game = new Game(data.player1Name, data.player2Name)
        const columnIndicies = [5, 5, 5, 5, 5, 5, 5];

        let playerTurn = 1;
        while (columnIndicies.some(x => x) !== -1){
            for (let i = 0; i < 7; i++){
                const rowIndex = columnIndicies[i];
                if (rowIndex === -1) continue
                const tokenValues = data.tokens[rowIndex[i]];
                if (tokenValues === null) {
                    columnIndicies[i] = -1;
                }
                if (tokenValues === playerTurn){
                    game.playInColumn(i);
                    columnIndicies[i]--;
                    if (playerTurn === 1){
                        playerTurn = 2;
                    }else{
                        playerTurn = 1;
                    }
                }
            }
        }
        return game;
    }
}
