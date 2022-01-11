import React from 'react';
import { useState, useEffect } from 'react';

function Hello () {
    const [input, setInput] = useState('')
    const [display, setDisplay] = useState('')
    const typeIn = (e) => {
        setInput(e.target.value)
    }
    useEffect(()=>{
        setDisplay(input)
    }

    ,[input])
    return(
        <div style={{textAlign:'center'}}>
            <div>
                <input onChange={(e) => {typeIn(e)}} />
                <h1>Hello: {display}</h1>
            </div>
        </div>
    )
}


export default Hello