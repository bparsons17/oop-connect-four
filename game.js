import { Column } from "./column.js";
import { ColumnWinInspector } from "./columnWinInspector.js";
import { RowWinInspector } from "./rowWinInspector.js";
import { DiagonalWinInspector } from "./diagonalWinInspector.js"
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
        if (this.columns.every(x => x.isFull())) {
            this.winnerNumber = 3;
        }
    }

    getName() {
        if (this.winnerNumber === 1) {
            return `${this.player1} wins!`
        }
        else if (this.winnerNumber === 2) {
            return `${this.player2} wins!`
        }
        else if (this.winnerNumber === 3) {
            return `${this.player1} ties ${this.player2}`
        } else {
            return `${this.player1} versus ${this.player2}`
        }
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer)
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin()
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex)
    }

    isColumnFull(columnIndex) {
        let column = this.columns[columnIndex];
        return column.isFull();
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return;
        } else {
            for (let i = 0; i < this.columns.length; i++) {
                let inspector = new ColumnWinInspector(this.columns[i]);
                let winner = inspector.inspect();
                // console.log(winner)
                // debugger
                if (winner === 1 || winner === 2) {
                    this.winnerNumber = winner;
                }
            }
        }
    }

    checkForRowWin(){
        if (this.winnerNumber !== 0) {
            return;
        } else {

            for (let i = 0; i < 4; i++){
                const slicedColumns = this.columns.slice(i, i+4);
                const rows = new RowWinInspector(slicedColumns);
                const winner = rows.inspect();
                if (winner === 1 || winner === 2) {
                    this.winnerNumber = winner;
                }
            }

        }
    }

    checkForDiagonalWin() {
         if (this.winnerNumber !== 0) {
           return;
         } else {
           for (let i = 0; i < 4; i++) {
             const slicedColumns = this.columns.slice(i, i + 4);
             const rows = new DiagonalWinInspector(slicedColumns);
             const winner = rows.inspect();
             if (winner === 1 || winner === 2) {
               this.winnerNumber = winner;
             }
           }
         }
    }

}
