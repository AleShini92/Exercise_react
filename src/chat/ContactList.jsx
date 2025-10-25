export default function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
        {contacts.map(contact =>
          <button
            style={{marginBlockEnd: 5}}
            key={contact.email}
            onClick={() => {
            onSelect(contact);
          }}>
           {contact.name}
          </button>
        )}
    </section>
  );
}