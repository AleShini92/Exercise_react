import { useState } from "react"

const cities= [
    {id:0, title: 'London'},
    {id:1, title: 'Tokyo'},
    {id:2, title: 'New York'}
]

export default function Picked() {
    const [items, setItems] = useState(cities);
    const [selected, setSelected] = useState(items[0]);
    //console.table(selected)

    return (
        <>
            <h2>Pick your favourite City:</h2>
            <ul>
                {
                    items.map(city =>
                        <div key={city.id}
                            style={{display: 'flex', justifyContent: 'space-between', margin:10}}
                        >
                            <li style={{listStyle: 'none'}}>{city.title}</li>
                            <button
                                style={{fontSize:14}}
                                onClick={() => {
                                    setSelected(city);
                                }}
                            >
                                Change
                            </button>
                        </div>
                    )
                }
            </ul>
            <p>You choose: {selected.title}</p>
        </>
    )
}