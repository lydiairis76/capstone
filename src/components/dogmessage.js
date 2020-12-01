import  React from 'react'

export default function DogMessage(){

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
  
    
    return (
        <>
            {(() => {
                if (month == 1) {
                  return (
                    <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                  )
                } else if (month === 2) {
                  return (
                    <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                  )
                } else if (month === 3) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 4) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 5) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 6) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 7) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 8) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 9) {
                    return (
                        <div class="month"><img src="mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 10) {
                    return (
                      <div class="month"><img src="october_mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 11) {
                    return (
                        <div class="month"><img src="november_mascot.png" alt="dog" height="250px" /></div>
                    ) 
                } else if (month === 12) {
                    return (
                        <div class="month"><img src="december_mascot.png" alt="dog" height="250px" /></div>
                    )   
                } else {
                  return (
                    <div></div>
                  )
                }
            })()}
       </>
    )}
