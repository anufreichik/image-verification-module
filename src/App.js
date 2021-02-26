import React from 'react';
import './App.css';
import FieldRow from "./FieldRow";
import {useState} from "react";

function App() {

    // const initSquares = [
    //
    //     {id: 1, link: "http://lorempixel.com/200/200/cats", category: "cat", row: 1, cell: 1},
    //     {id: 2, link: "http://lorempixel.com/200/200", category: "other", row: 1, cell: 2},
    //     {id: 3, link: "http://lorempixel.com/200/200/cats/1", category: "cat", row: 1, cell: 3},
    //
    //     {id: 4, link: "http://lorempixel.com/200/200/cats/2", category: "cat", row: 2, cell: 1},
    //     {id: 5, link: "http://lorempixel.com/200/200", category: "other", row: 2, cell: 2},
    //     {id: 6, link: "http://lorempixel.com/200/200", category: "other", row: 2, cell: 3},
    //
    //     {id: 7, link: "http://lorempixel.com/200/200/cats/3", category: "cat", row: 3, cell: 1},
    //     {id: 8, link: "http://lorempixel.com/200/200", category: "other", row: 3, cell: 2},
    //     {id: 9, link: "http://lorempixel.com/200/200", category: "other", row: 3, cell: 3},
    //
    // ]

    const rows = [1, 2, 3]
    const [squares, setSquares] = useState(getRandomSquares());
    const [message, setMessage] = useState('');

//function that create array of objects for squares
    function getRandomSquares(){
        let arr=[]
        for(let i=0;i<9;i++){
            //get random number 1 or 0
            //if 0 we do category cat , if 1 then category other
            const random=Math.floor(Math.random() * Math.floor(2));
            const randomImageNumber = Math.floor(Math.random() * Math.floor(6))+1;
            const id=i+1;
            //calculate row based on i
            const row=Math.ceil((i+1)/3);
            if(random) arr.push({id:id, link: `http://lorempixel.com/200/200/cats/${randomImageNumber}`, category: "cat", row: row })
            else arr.push({id:id, link: "http://lorempixel.com/200/200", category: "other", row: row })
        }
        return arr;
    }
//handle square click event and update object corresponding to id to be opposite from what it was
    function onSquareClick(id) {
        for (let i = 0; i < squares.length; i++) {
                if (squares[i].id === id ) {
                    let newList = [...squares].map(el=>{
                            if(el.id===id)
                            {
                                const randomImageNumber = Math.floor(Math.random() * Math.floor(6))+1;
                                if(el.category === "cat") return {...el,category:'other', link: "http://lorempixel.com/200/200" }
                                else return {...el,category:'cat', link: `http://lorempixel.com/200/200/cats/${randomImageNumber}` }
                            }

                            else
                                return el;
                    })
                    setSquares(newList);
                    break;
                }
        }
    }

    function submitField() {
        //check if all squares are not cats, meaning you clicked on all cats
        let countCatsResult=squares.filter(el=>el.category==='cat').length;
        if (countCatsResult===0){
            setMessage('Verification successful!');
        }
        else
            setMessage('Verification failed!');

        //reset squares
        setSquares(getRandomSquares());
    }

    return (
        <div >

            <h1>{message}</h1>

            <h3>Select Category "Cat" to be verified</h3>
            <button onClick={submitField}>Submit</button>
            <table>

                <tbody>
                {
                    rows.map((el, i) => <FieldRow key={`row${el}`} squares={squares.filter(s=>s.row===el)} squareClick={onSquareClick}/>)
                }
                </tbody>
            </table>

        </div>
    );
}

export default App;
