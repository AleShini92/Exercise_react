import { useState } from "react";

export default function Chat({ contact: message }) { {/* funziona lo stesso anche senza :message */}
    const [text, setText] = useState('');

    return(
        <section
        style= {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <textarea
                cols="30" rows="5"
                style={{padding: '5 0 0 5', resize: 'none'}}
                value= {text}
                placeholder={'Chat to ' + message.name}     // cambiare con contact (se tolgo :message)
                onChange={e => setText(e.target.value)}
            />
            <button>Send to {message.email}</button>        {/* cambiare con contact (se tolgo :message) */}
        </section>
    )
}