export class ColumnWinInspector {
    constructor (column) {
        this.column = column
    }
    inspect() {
        for (let i = 0; i <= 2; i++){
        const token1 = this.column.getTokenAt(i);
        const token2 = this.column.getTokenAt(i+1);
        const token3 = this.column.getTokenAt(i+2);
        const token4 = this.column.getTokenAt(i+3);
        // console.log("indicies:", i, i+1, i+2, i+3)
        // console.log("tokens", token1, token2, token3, token4)
            if ((token1 === token2) && (token1 === token3) && (token1 === token4) && (token1 !== null)){
                // console.log(true)
                return token1
            } else {
                // console.log(false)
                // console.log("---------------/n/n")
            }
        }
        return 0
    }
}
