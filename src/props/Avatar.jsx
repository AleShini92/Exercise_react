/**
 * Export function use for:
 * City.jsx
 * 
 * @param {*} param0 
 * @returns 
 */

export function Avatar({ children: capital, alias }) {
    return (
        <>
            <p>{alias.city}</p>
            {/* {children} = <span>capital of</span> */}
            <p>{capital} "{alias.nation}"</p>
            <img 
                src= {alias.url}
                alt={alias.city}
                title={alias.city}
                width='600'
            />
        </>
    )
}