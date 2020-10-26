import React, { useState } from "react"

export default function Counter() {
  
    const [ counter, setCounter ] = useState(0)


    const clearCounter= () => setCounter(0);

    return (
        <>
            <h2>I have had { counter } glasses of water today <button  onClick={() => { setCounter( counter + 1)}} >+</button><button onClick={clearCounter}>clear</button></h2>
          
            
         

            {(() => {
                if (counter === 0) {
                  return (
                    <div> <img src= "water0.png" alt="two dogs saying you betta hydrate" height="50px"/> </div>
                  )
                } else if (counter === 1) {
                  return (
                    <div><img src= "water1.png" alt="one water bottle" height="60px"/></div>
                  )
                } else if (counter === 2) {
                    return (
                      <div><img src= "water2.png" alt="two water bottles" height="60px"/></div>
                    )  
                } else if (counter === 3) {
                    return (
                      <div><img src= "water3.png" alt="three water bottles" height="60px"/></div>
                    )
                } else if (counter === 4) {
                    return (
                      <div><img src= "water4.png" alt="four water bottles" height="60px"/></div>
                    )
                } else if (counter === 5) {
                    return (
                      <div><img src= "water5.png" alt="five water bottles" height="60px"/></div>
                    )
                } else if (counter === 6) {
                    return (
                      <div><img src= "water6.png" alt="six water bottles" height="60px"/></div>
                    )
                } else if (counter === 7) {
                    return (
                      <div><img src= "water7.png" alt="seven water bottles" height="60px"/></div>
                    )       
                } else if (counter === 8) {
                    return (
                      <div><img src= "water8.png" alt="you did it" height="60px"/></div>
                    )       
                } else {
                  return (
                    <div><img src= "water8.png" alt="you did it" height="60px"/></div>
                  )
                }
            })()}
        </>
    )
}