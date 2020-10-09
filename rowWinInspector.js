import { Column } from "./column.js";

export class RowWinInspector {
    constructor (columns){
        this.columns = columns;
    }

    inspect(){
        for(let i = 0; i <= 6; i++){
            const token1 = this.columns[0].getTokenAt(i);
            const token2 = this.columns[1].getTokenAt(i);
            const token3 = this.columns[2].getTokenAt(i);
            const token4 = this.columns[3].getTokenAt(i);
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
