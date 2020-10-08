export class Column {
    constructor () {
        this.token = [null, null, null, null, null, null];
    }

    add(playerNumber) {
        for( let i = 5; i >= 0; i--){
            if(this.token[i] === null){
                this.token[i] = playerNumber;
                break;
            }
        }
    }

    getTokenAt(rowIndex) {
        return this.token[rowIndex];
    }
    isFull() {
        return this.token[0] !== null;
    }

}
