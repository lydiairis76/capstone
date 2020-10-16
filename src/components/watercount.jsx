import React, { useState } from "react"

export default function Counter() {

    const [ counter, setCounter ] = useState(0)
    

    return (
        <>
            <h2>I have had { counter } glasses of water today <button onClick={() => { setCounter( counter + 1)}}>+</button></h2>


        </>
    )
}