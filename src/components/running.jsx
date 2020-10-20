import React, { useState } from "react"

export default function Counter() {

    const [ counter, setCounter ] = useState(0)

    return (
        <>

            <h2>I have gone running { counter } times this week <button onClick={() => { setCounter( counter + 1)}}>+</button></h2>

            
        </>
    )
}
