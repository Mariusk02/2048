import React from 'react';
import "../CSS/App.css";

function GeneralBox() {

    const data= [
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null, null]
    ]

    const getFila = (fila) => (
        fila.map(value => (
            <div className="one">{value}</div>
        ))
    )
    return data.map((fila) => (
        <div className="generalBox">
            {getFila(fila)}
        </div>
    ))

}

export default GeneralBox
