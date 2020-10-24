import React, { useState, useEffect } from "react"
import "../style/list.css"

export default function Counter() {
    let initialRunCount= () => {
    if(typeof window !== `undefined`){
    Number(window.localStorage.getItem('runCount') ||0)

    }
}
    const clearRunCount= () => setRunCount(0);
    const [ runCount, setRunCount ] = useState(initialRunCount)
    const increment = () => setRunCount(runCount+1)

    useEffect(() => {
            window.localStorage.setItem('runCount', runCount)
        } ,
        [runCount],
    )

    

    return (
        <>
            <h2>I have gone running { runCount } times this week<button onClick={increment} >+</button> <button onClick={clearRunCount}>clear</button></h2>
           
            
              {(() => {
                if (runCount === 1) {
                  return (
                    <div> <img src= "cloud.svg" alt="cloud" height="50px"/> </div>
                  )
                } else if (runCount === 2) {
                  return (
                    <div><img src= "smilesun.svg" alt="sun"height="50px"/></div>
                  )
                } else if (runCount === 3) {
                    return (
                      <div><img src= "snow.svg" alt="snow"height="50px"/></div>
                    )         
                } else {
                  return (
                    <div></div>
                  )
                }
            })()}
        
          


            


        </>
    )
}

