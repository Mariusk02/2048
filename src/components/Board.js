const range = (length) => Array(length).fill().map((_, index) => index)

class Board {
    constructor () {
        // const { random } = options;
        // if (random) {
            this.matrix = this.initRandomBoard()
        // }
        console.log(this.matrix)
    };

    // getRandomValue() {
    //     if (Math.random() < 0.2) {
    //         if (Math.random() < 0.5) {
    //             return 2;
    //         } else {
    //             return 4;
    
    //         }
    //     }
    //     return 0;
    // }

    getRandomCell() {
        const nonce = Math.random();
        if (nonce < 0.8) {
            return 0
        } else if (nonce < 0.9) {
            return 2
        } else {
            return 4
        }
    }

    initRandomBoard() {
        return range(4).map(() => range(4).map(() => this.getRandomCell()))
        // const result = []
        // for (let i = 0; i < 4; i++) {
        //     result.push([])
        //     for (let j = 0; j < 4; j++) {
        //         result[i].push(this.getRandomCell())
        //     }
        // }
        // return result
    }

    // [1,2,2,4,5]

    // [1,3]

    mover(row) {
        row = row.filter((cellValue) => cellValue !== 0)
        for (let i = 0; i <  row.length - 1; i++) {
            let merge = row[i];
            const incoming = row[i + 1];
            if (merge === incoming) {
                merge = merge + row.splice(i + 1, 1)[0]
                row[i] = merge;
            }
        }
        for (let i = row.length; i < 4; i++) {
            row.push(this.getRandomCell())
        }
        return row;
    }

}


export default Board
