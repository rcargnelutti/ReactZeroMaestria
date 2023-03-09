import React from "react";
import {useState} from 'react'

const Challenge = () => {
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const a = 10;
    const b = 15;

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={showOrHide}>Somar</button>
            { showElement ? <p>A + B = {a + b}</p> : null }
        </div>
    );
};

export default Challenge;