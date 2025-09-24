import { useState, useEffect } from "react";

/**
 * 
 * @function Walk => has a @function handleClick to set @const setWalk to (false)
 * @function useEffect => implement a setTime to 5sec to reset the @function handleClick
 * 
 * @returns => the button changes the h1 to Stop from Walk
 */
export default function Walk() {
  const [walk, setWalk] = useState(false);

  function handleClick() {
    setWalk(!walk)
  }

  useEffect(() => {
  let timer;
  if (walk) {
    // After 5sec change in Stop
    timer = setTimeout(() => {
      setWalk(false);
    }, 5000);
  }
  // Reset Timer if "walk" change before 5sec
  return () => clearTimeout(timer);
  }, [walk]);

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "stop" : "walk" }</button>
      <h1 style={{
        fontSize: 28,
        marginTop: 30,
        color: walk ? "green" : "red"
        }}>
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
   )
}