import { useState } from "react";

/**
 * questa funzione permette al pulsante 
 * + : di aumentare il conteggio
 * - : di diminuire il conteggio
 * @returns button
 */

function Count() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(c => c + 1)
    }

    return (
        <div>
            <p style={{marginBottom: 10}}>You have clicked { count } time!</p>
            <button onClick={handleClick} style={{ marginRight: 10 }}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Count