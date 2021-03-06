import React, { useEffect, useState } from "react"
import { getWeather } from "../../weather"

export default function Weather() {
    const [zipCode, setzipCode] = useState();
    
    const [ weather, setWeather ] = useState(null)
    
    useEffect(() => {
        getWeather(72701).then(response => setWeather(response))
    }, [setWeather])


    return(
       
     
        
        <div>
        { weather !== null && 
            <p> It's currently { parseInt(weather.main.temp) } and { weather.weather[0].description }! </p>
          }
        </div>
       
    )
        }
       