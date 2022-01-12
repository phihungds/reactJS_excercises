import React from 'react';
import { useState, useEffect } from 'react';

function Hello () {
    const [input, setInput] = useState('')
    
    const typeIn = (e) => {
        setInput(e.target.value)
    }
    
    return(
        <div style={{textAlign:'center'}}>
            <div>
                <input onChange={(e) => {typeIn(e)}} />
                <h1>Hello: {input}</h1>
            </div>
        </div>
    )
}


export default Hello