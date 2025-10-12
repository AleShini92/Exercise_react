import { useState, useRef } from "react";

export default function NameList() {
  const [name, setName] = useState("");
  const [listName, setListName] = useState([]);
  const nextId = useRef(0);

  function addName() {
    setListName([
      ...listName,
      { id: nextId.current++, name: name }
    ]);
    setName(""); // opzionale: resetta l’input
  }

  function deleteName(id) {
    setListName(listName.filter(item => item.id !== id));
  }

  return (
    <>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Add a Name:</h1>
      <input
        style={{ display: "inline-block", marginRight: 10, marginBottom: 20 }}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addName}>add</button>
      <ul>
        {listName.map(item => (
          <li key={item.id} style={{ listStyleType: "none", textAlign: "left" }}>
            {item.name} {" "}
            <button
              style={{padding:4, fontSize:12, marginInlineStart:10}}
              onClick={() => deleteName(item.id)}>Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}


/*
const [name, setName] = useState("")
Stato per l'input: valore corrente del campo testo. È un controlled input (il value dell<input> è legato a name).

const [listName, setlistName] = useState([])
Stato per la lista di nomi: un array di oggetti { id, name }.

const nextId = useRef(0)
Un ref mutabile. nextId.current persiste tra render ma cambiarlo non causa re-render. Qui è usato come contatore incrementale per gli id.

L'utente scrive nell<input>.
L'handler onChange={e => setName(e.target.value)} viene chiamato ad ogni tasto: aggiorna lo stato name.
React pianifica un re-render: il value={name} riflette l'ultima stringa, quindi l'input è controllato.

nextId.current++ restituisce il valore corrente come id e poi incrementa nextId.current.
Esempio: la prima aggiunta dà id: 0, poi nextId.current diventa 1.

setlistName([...listName, { id, name }]) costruisce un nuovo array copiando il vecchio con lo spread e aggiungendo l'oggetto in coda.
Questo è importante: si mantiene l'immutabilità (React rileva il cambiamento perché l'array è un oggetto diverso).

setName("") pulisce l'input (perché è controllato, il value diventa stringa vuota e l'input si svuota).
Nota importante: setState è asincrono — ma l'incremento del ref (nextId.current++) avviene immediatamente nello stesso handler.

function deleteName
Usa filter per creare un nuovo array senza l'elemento con id specificato.
Poi imposta quello come nuovo stato: React re-renderizza e l'elemento scompare.
*/

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