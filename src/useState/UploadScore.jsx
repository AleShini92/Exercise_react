import { useState } from "react"

/**
 * @function handleCLick copia l'oggetto in useState e aggiorna lo score implementandolo di +1
 *                       ogni volta che si clicca sul bottone e lo visualizza a monitor in h1 
 * @returns h1 score
 *          button: handleClick
 */
export default function UploadScore() {
    const [player, setPlayer] = useState({
        name: "Ale",
        alias: "Shini",
        score: 10
    })

    function handleClick() {
        setPlayer({
            ...player,
            score: player.score + 1
        })
    }

    function clickMin() {
        setPlayer({
            ...player,
            score: player.score - 1
        })
    }

    // function getColor(score) {
    //     if (score >= 15) {
    //     return "violet";
    // } return "white"; }

    return(
        <>
            <h1 style={{fontSize: 26, marginBottom:10}}>Score: {player.score}</h1>
            <div style=
                {{
                    marginBottom: 20,
                    color: player.score >= 15 ? "violet" : "white"
                //   color: getColor(player.score)
                }}>
                {player.alias}
            </div>
            <button onClick={clickMin} style={{marginRight: 20}}>-</button>
            <button onClick={handleClick}>+</button>
        </>
    )
}