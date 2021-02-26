import React from 'react';

function Square(props) {
    return (
        <td onClick={()=>props.squareClick(props.square.id)}>
           <img src={props.square.link}/>
        </td>
    );
}

export default Square;
