import React, { useState } from "react"

export default function RunCounter() {
  
    const [ runCounter, setRunCounter ] = useState(0)


    const clearRunCounter= () => setRunCounter(0);

    return (
        <>
    
            <h2>I have gone running { runCounter } times this week<button onClick={() => { setRunCounter( runCounter + 1)}}> +</button> <button onClick={clearRunCounter}>clear</button></h2>
           
            
              {(() => {
                if (runCounter === 0) {
                  return (
                    <div> <img src= "running_zero.png" alt="dog saysing running is fun" height="65px"/> </div>
                  )
                } else if (runCounter === 1) {
                  return (
                    <div><img src= "runner_pink.png" alt="pink man running" height="65px"/></div>
                  )
                } else if (runCounter === 2) {
                    return (
                      <div><img src= "runner_orange.png" alt="orange man running" height="65px"/></div>
                    )
                } else if (runCounter === 3) {
                    return (
                      <div><img src= "runner_blue.png" alt="blue man running" height="65px"/></div>
                    )  
                } else {
                  return (
                    <div><img src= "runner_dog.png" alt="man and dog running together" height="65px"/></div>
                  )
                }
            })()}
        </>
    )
}

