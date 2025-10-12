import { useState } from "react"

/** SCHEMA IN BASSO 👇 */


export default function Quiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success') {
        return <h1 style={{fontSize:20}}>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'westminster';
                if(shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                } else {
                    resolve();
                }
            }, 1000);
        });
    }


    function handleTextAreaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>Quiz City</h2>
            <p>In witch City is Abbey Road?</p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    name="" id="" cols="30" rows="5"
                    style={{resize: "none", marginBlock: 15}}
                    value={answer}
                    onChange={handleTextAreaChange}
                    disabled= {status === 'submiting'}
                />
                <button
                    style={{display:"block", fontSize: 14}}
                    disabled={
                        answer.length === 0 || status === 'submiting'
                    }
                
                >
                    Submit
                </button>
                {
                    error !== null &&
                    <p>
                        {error.message}
                    </p>
                }
            </form>
        </>
    )
}


/**
 * 
 *  

                    ┌───────────────────────────────────────────────┐
                    │                  INIZIO                           │
                    │        status = 'typing' (utente scrive)          │
                    └───────────────────────────────────────────────┘
                                        │
                                        │ Clic su “Submit”
                                        ▼
                ┌───────────────────────────────────────────────┐
                │         status = 'submitting'                     │
                │    (form disabilitato, attesa risposta)           │
                └───────────────────────────────────────────────┘
                                         │
                                    Dopo 1 secondo
                                         │
                    ┌──────────────────┴────────────────────┐
                    │                                           │
                    ▼                                           ▼
        ┌──────────────────────────┐         ┌──────────────────────────┐
        │  ✅ Risposta corretta       │         │  ❌ Risposta sbagliata     │
        │  (submitForm resolve())     │         │  (submitForm reject())     │
        └──────────────────────────┘         └──────────────────────────┘
                    │                                      │
                    ▼                                      ▼
        ┌──────────────────────────┐          ┌──────────────────────────┐
        │ status = 'success'          │          │ status = 'typing'          │
        │ Mostra “That’s right!”      │          │ Mostra errore e riattiva   │
        │                             │          │ il form per riprovare      │
        └──────────────────────────┘          └──────────────────────────┘


        typing = l’utente scrive ✏️
        submitting = il form è in attesa ⏳
        success = risposta giusta 🎉
        errore = ritorna a typing per riprovare 🔁

 * 
*/