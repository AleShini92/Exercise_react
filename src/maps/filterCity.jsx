import cities from '../json/cities.json'

/**
 *
 * I taked the list cities and I filtered all elements
 * only for the japan's cities
 * 
 * @returns filter cities === japan
 */

function JapanCity() {
    const jap = cities.filter(city => city.country === 'Japan');
    //console.log(jap)

    const cityJap = jap.map((city) => 
        <div className="card" key={city.id}>
            <img src={city.url} width="350" alt={city.name} title={city.name}/>
            <div>
                <p>{city.name}</p>
            </div>
        </div>
    )

    return (
        <article className='container'>
            <h1 style={{ marginBottom: 20 }}>Japan City:</h1>
            {cityJap}
        </article>
    )
}

export default JapanCity