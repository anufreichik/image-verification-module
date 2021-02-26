import React from 'react';
import Square from "./Square";

function FieldRow(props) {
    return (
        <tr>
            {
                props.squares.map((el,i)=><Square key={el.id} square={el} squareClick={props.squareClick} />)
            }
        </tr>
    );
}

export default FieldRow;
