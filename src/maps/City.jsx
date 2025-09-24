import cities from '../json/cities.json'

function ListCity() {

    const container = {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "1000px",
        justifyContent: "center",
        gap: "15px"
    }
    
    /**
     * ho preso tutti gli elementi dell'ARREY cities per creare le varie CARD
     */
    const cityList = cities.map((city) => 
        <figure className="card" key={city.id}>
            <img src={city.url} width="350" alt={city.name} title={city.name}/>
            <figcaption>
                <p>{city.name} - {city.country}</p>
            </figcaption>
        </figure>
    )

    return (
        <>
            <div style={container}>
                { cityList }
            </div>
        </>
    )
}

export default ListCity;