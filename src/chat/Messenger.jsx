import { useState } from 'react'
import Chat from './Chat'
import ContactList from './ContactList'

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
    const [message, setMessage] = useState(contacts[0]); {/* dichiarata qui [message] e usata nel componento Chat */ }

    return(
        <article style={{display: 'flex', gap: 15}}>
            <ContactList
                contacts={contacts}
                selectedContact={message}
                onSelect={contact => setMessage(contact)}
            />
            <Chat contact={message} /> {/* passo il valore {message} come props alla function Chat => il nome del valore to è legato alla const to */}
        </article>
        
    )
}