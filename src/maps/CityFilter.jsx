import Cities from '../json/cities.json'

let cityJapan = [];
let otherCity = [];

Cities.forEach(city => {
    if(city.country === 'Japan') {
        cityJapan.push(city)
    } else {
        otherCity.push(city)
    }
})

//console.table(cityJapan);

/**
 * 
 * I created two ARRAY empty 
 * cityJapan = with the only japan's cities
 * otherCity = with the other cities
 * 
 * with the props I passed the value @param { title } e @param { Cities }  to method MAP
 * 
 * for each <ListCities> I passed the cityJapan and otherCity variables
 * 
 * @param {*} param0 
 * @returns
 */

function ListCities({ title, CitiesMap }) {
    return (
        <>
            <h2 style={{ marginTop: 20 }}>{title}</h2>
            <div className='container'>
                {CitiesMap.map((city) =>
                    <figure className='card' key={city.id}>
                        <img src={city.url} width="400"/>
                        <figcaption>{city.name}</figcaption>
                    </figure>
                )}
            </div>
        </>
    )
}

export default function Japan() {
    return (
        <article>
            <ListCities 
                title="JAPAN"
                CitiesMap={cityJapan}
            />

            <ListCities
                title="OTHER CITY"
                CitiesMap={otherCity}
            />
        </article>
    )
}