import { useState } from "react";

import City from "./City"


function Button({ children: city }) {
    const [open, setOpen] = useState(false);

    const container = {
        "display": "flex",
        "flexDirection": "column",
    }

    const btn = {
        "top": 20,
        "position": "absolute",
        "left": 50
    }

    const card = () => setOpen(!open);

    return (
        <>
            {/* <button onclick={() => setOpen(!open)} */}
            <button onClick={card} style={btn}>
                {open ? 'Collapse' : 'Expande'}
            </button>
            <section style={container}>
                <figure style={{marginTop: 50}}>
                    {open && city}
                </figure>
            </section>
        </>
    )
}


export default function CityVisible() {
    return (
        <Button>
            <City />
        </Button>
    )
}