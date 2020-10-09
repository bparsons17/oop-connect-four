import { Column } from "./column.js";
import { ColumnWinInspector } from "./columnWinInspector.js";

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [
          new Column(),
          new Column(),
          new Column(),
          new Column(),
          new Column(),
          new Column(),
          new Column()
        ];
        this.winnerNumber = 0;
    }

    checkForTie() {
        if (this.columns.every(x=> x.isFull())) {
            this.winnerNumber = 3;
        }
    }

    getName() {
        if(this.winnerNumber === 3) {
            return `${this.player1} ties ${this.player2}`
        } else {
           return `${ this.player1 } versus ${ this.player2 }`
        }
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer)
        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
        this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex)
    }

    isColumnFull(columnIndex) {
        let column = this.columns[columnIndex];
        return column.isFull();
    }

    checkForColumnWin(){
        if(this.winnerNumber !== 0){
            return;
        } else {
            for (let i = 0; i < this.columns.length; i++){
                let newColumn = new ColumnWinInspector(this.columns[i]);
                let winner = newColumn.inspect();
                if(winner === 1 || winner === 2){
                    this.winnerNumber = winner;
                    break;
                }
            }
        }
    }

}
