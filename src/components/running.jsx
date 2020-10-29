import React, { useState, useEffect } from "react"
import "../style/list.css"

export default function RunCounter() {

    const initialRunCount=() => {
    if(typeof window !== `undefined`){
    Number(window.localStorage.getItem('runCount')||0)

    }
}


    const clearRunCount= () => setRunCount(0);
    const [ runCount, setRunCount ] = useState(initialRunCount)
    const increment = () => setRunCount(runCount+1)

    useEffect(() => {
            if(typeof window !== `undefined`){
             window.localStorage.setItem('runCount', runCount)
        } 
      },
        [runCount]
    )

    

    return (
        <>
            <h2>I have gone running { runCount } times this week<button class="submit" onClick={increment}> +</button> <button class="habitbutton" onClick={clearRunCount}>clear</button></h2>
           
            
              {(() => {
                if (runCount === 0) {
                  return (
                    <div> <img src= "running_zero.png" alt="" height="65px"/> </div>
                  )
                } else if (runCount === 1) {
                  return (
                    <div><img src= "runner_pink.png" alt="sun" height="65px"/></div>
                  )
                } else if (runCount === 2) {
                    return (
                      <div><img src= "runner_orange.png" alt="snow" height="65px"/></div>
                    )
                } else if (runCount === 3) {
                    return (
                      <div><img src= "runner_blue.png" alt="snow" height="65px"/></div>
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

