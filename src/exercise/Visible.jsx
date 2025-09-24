import React, { useState } from "react";

/**
 * Questa funzione permette di premere sul bottone e di cancellare il testo.
 * Se ripremi il bottno appare di nuovo il testo
 * 
 * @returns ternary operator & button
 */

function Visible() {
    const [isVisible, setVisible] = useState(true);
    
    return (
        <div>
            {isVisible && <p>This text is toggleable</p>}
            {/* { isVisible ? <p>This text is toggleable</p> : "" } */}
            <button onClick={() => setVisible(!isVisible) }>Click</button>
        </div>
    )
}

export default Visible