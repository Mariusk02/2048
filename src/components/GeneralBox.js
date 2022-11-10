import React, { useEffect } from 'react';
import Board from './Board'
import "../CSS/App.css";

const board = new Board()
board.initRandomBoard()
console.log(board.matrix[0])
console.log(board.mover(board.matrix[0]))

function GeneralBox() {
    const [board, setBoard] = React.useState(new Board())
    // useEffect(() => {
    // }, [])

    if (!board.matrix) {
        return null;
    }

    return board.matrix.map((fila, rowIndex) => (
        <div key={rowIndex} className="generalBox">
            {fila.map((numero, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className="one">{numero}</div>
        ))}
        </div>
    ))

}

export default GeneralBox
