import { useState, useRef } from "react"

// spiegazione in basso ⬇︎

export default function NameList() {

    const [name, setName] = useState('');
    const [listsName, setListsName]= useState([])

    const nextId = useRef(0);

    function addName() {
        {setListsName([
            ...listsName,
            {id: nextId.current++, name: name}
            ])
            setName(""); // opzionale: resetta l’input dopo l’aggiunta
        }
    }

    return(
        <>
            <h1 style={{ fontSize: 26, marginBottom: 10 }}>Add a Name:</h1>
            <input
                style={{ display: "inline-block", marginRight: 10, marginBottom: 20 }}
                value={name}
                onChange={e => setName(e.target.value)}
            
            />
            <button onClick={addName}>
                add
            </button>
            <ul>
                {
                    listsName.map(listName => (
                    <li key={listName.id}>{listName.name}</li>))
                }
            </ul>
        </>
    )
}



/*
    🔹 Stato iniziale
    name = ""
    listName = []


    UI:
    Input vuoto
    Lista vuota


    ✏️ Digiti "Ale"
    onChange → setName("Ale")


    Dopo il re-render:

    name = "Ale"
    listName = []


    UI:
        Input mostra "Ale"
        Lista ancora vuota

    ➕ Premi add
    onClick → setListName([...listName, { id: 0, name: "Ale" }])


    Dopo il re-render:

    name = "Ale"
    listName = [
    { id: 0, name: "Ale" }
    ]


    UI:

    Input: "Ale"
        Lista:
        Ale

    ✏️ Digiti "Luca"
    onChange → setName("Luca")


    Dopo il re-render:

    name = "Luca"
    listName = [
    { id: 0, name: "Ale" }
    ]


    UI:
    Input: "Luca"
        Lista:
        Ale

    ➕ Premi add
    onClick → setListName([...listName, { id: 1, name: "Luca" }])


    Dopo il re-render:

    name = "Luca"
    listName = [
    { id: 0, name: "Ale" },
    { id: 1, name: "Luca" }
    ]


    UI:
        Input: "Luca"
        Lista:
            Ale
            Luca

    👉 Quindi:

    name riflette solo l’input attuale.

    listName contiene tutti i nomi aggiunti.

    Ogni volta che clicchi add, l’array cresce con un nuovo oggetto { id, name }.

*/