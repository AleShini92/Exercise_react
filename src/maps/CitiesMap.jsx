import cities from '../json/cities.json'

/**
 * Destructoring:
 *      I taked the @param {id, url, name} form cities.json 
 *      Then I created the cards
 * @param {*} param0 
 * @returns html card
 */
function City({ id, url, name, country }) {
    return (
        <div style={{ marginTop: 20 }}>
            <h2>{name} - <i>{country}</i></h2>
            <div className='container'>
                <div className='card' key={id}>
                    <img src={url} alt={name} width="400" />
                </div>
            </div>
        </div>
    )
}


/**
 *  Here I passed all the @param {id, url, name, country} with the [spread operator]
 * @returns Map of @function City
 */
export default function List() {
    return (
        <div>
            {cities.map(city =>
                <City {...city} key={city.id} />
            )}
        </div>
    )
}