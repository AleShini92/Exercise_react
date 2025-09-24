import { useState } from "react";
import cities from "../json/cities.json";


function Button({ children: text, click, theme }) {
    return(
        <button onClick={click} style={theme}>
            {text}
        </button>
    )
}


function Image({url, name, country}) {
    return(
        <>
            <h1>
                <i style={{fontSize: 20}}>{name}</i>
            </h1>
            <figure>
                <img src={url} alt={name} title={name} width="400"/>
                <figcaption>
                    <b>{country}</b>
                </figcaption>
            </figure>
        </>
    )
}

export default function Next() {
    const [index, setIndex] = useState(0);

    let hasPrev = index > 0;
    let hasNext = index < cities.length -1;

    function prevClick() {
        if(hasPrev) {
            setIndex(index - 1)
        }
    };

    function nextClick() {
        if(hasNext) {
            setIndex(index + 1)
        }
    };

    let city = cities[index];
    //console.table(city);
    return (
        <>
            <Image
                // url={city.url} name={city.name} country={city.country}
                {...city}
            />
            <Button click={prevClick} theme={{marginTop: 35, marginRight: 20}}>
                Prev
            </Button>
            <Button click={nextClick}>
                next
            </Button>
        </>
    )
}