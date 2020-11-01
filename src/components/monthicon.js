import  React from 'react'

export default function MonthIcon(){

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
  
    
    return (
        <>
            {(() => {
                if (month == 1) {
                  return (
                    <div> <img src= "cloud.svg" alt="cloud" /> </div>
                  )
                } else if (month === 2) {
                  return (
                    <div><img src= "smilesun.svg" alt="sun"/></div>
                  )
                } else if (month === 3) {
                    return (
                      <div><img src= "snow.svg" alt="snow"/></div>
                    ) 
                } else if (month === 4) {
                    return (
                      <div><img src= "rain.svg" alt="rain"/></div>
                    ) 
                } else if (month === 5) {
                    return (
                      <div><img src= "rain.svg" alt="rain"/></div>
                    ) 
                } else if (month === 6) {
                    return (
                      <div><img src= "storm.svg" alt="storm cloud"/></div>
                    ) 
                } else if (month === 7) {
                    return (
                      <div><img src= "storm.svg" alt="storm cloud"/></div>
                    ) 
                } else if (month === 8) {
                    return (
                      <div><img src= "storm.svg" alt="storm cloud"/></div>
                    ) 
                } else if (month === 9) {
                    return (
                      <div><img src= "storm.svg" alt="storm cloud"/></div>
                    ) 
                } else if (month === 10) {
                    return (
                      <div class="month"><img src="month_oct.png" alt="jackolantern" height="100px" /></div>
                    ) 
                } else if (month === 11) {
                    return (
                      <div class="month"><img src="month_nov.png" alt="jackolantern" height="100px" /></div>
                    ) 
                } else if (month === 12) {
                    return (
                      <div><img src= "storm.svg" alt="storm cloud"/></div>
                    )   
                } else {
                  return (
                    <div></div>
                  )
                }
            })()}
       </>
    )}
