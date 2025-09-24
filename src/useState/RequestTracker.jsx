import { useState } from "react"

function delay(ms) {
    return new Promise(resolve => {
    setTimeout(resolve, ms); })
}

export default function RequestTracker() {

    const [pending, setPending] = useState(0)
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(p => p + 1)
        await delay(3000)
        setPending(p => p - 1)
        setCompleted(c => c + 1)
    }

    return (
        <>
            <h3>Pending: {pending}</h3>
            <h3 style={{marginTop: 10}}>Completed: {completed}</h3>
            <button onClick={handleClick} style={{marginTop: 20}}>buy</button>
        </>
    )
}