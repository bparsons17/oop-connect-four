export class GameJSONSerializer{
    constructor (game) {
        this.game = game
    }

    serialize(){
        const data = {
            player1Name: this.game.player1Name,
            player2Name: this.game.player2Name,
            tokens: [[],[],[],[],[],[]];

        }
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 7; j++){
                const tokenValue = this.game.getTokenAt(i,j);
                data.tokens[i][j] = tokenValue;
            }
        }
        return JSON.stringify(data);
    }


}
