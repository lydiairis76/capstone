import React, { useState, useEffect } from "react"

export default function Counter() {
    let initialCount= () => {
        if(typeof window !== `undefined`&& window){
        Number(window.localStorage.getItem('count') ||0)
        }
    }
    const clearCount= () => setCount(0);
    const [ count, setCount ] = useState(initialCount)
    const increment = () => setCount(count)

    useEffect(() => {
            window.localStorage.setItem('count', count)
        } ,
        [count],
    )

    

    return (
        <>
            <h2>I have had { count } glasses of water today <button class="submit" onClick={increment} >+</button><button class="habitbutton" onClick={clearCount}>clear</button></h2>
            
            {(() => {
                if (count === 0) {
                  return (
                    <div> <img src= "water0.png" alt="cloud" height="55px"/> </div>
                  )
                } else if (count === 1) {
                  return (
                    <div><img src= "water1.png" alt="sun" height="55px"/></div>
                  )
                } else if (count === 2) {
                    return (
                      <div><img src= "water2.png" alt="snow" height="55px"/></div>
                    )  
                } else if (count === 3) {
                    return (
                      <div><img src= "water3.png" alt="sun" height="55px"/></div>
                    )
                } else if (count === 4) {
                    return (
                      <div><img src= "water4.png" alt="sun" height="55px"/></div>
                    )
                } else if (count === 5) {
                    return (
                      <div><img src= "water5.png" alt="sun" height="55px"/></div>
                    )
                } else if (count === 6) {
                    return (
                      <div><img src= "water6.png" alt="sun" height="55px"/></div>
                    )
                } else if (count === 7) {
                    return (
                      <div><img src= "water7.png" alt="sun" height="55px"/></div>
                    )       
                  
                } else {
                  return (
                    <div><img src= "water8.png" alt="sun" height="55px"/></div>
                  )
                }
            })()}

            
            


        </>
    )
}

