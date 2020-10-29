import React, { useEffect, useState } from "react"
import { getWeather } from "../../weather"

export default function WeatherDoodle() {
 const [ weather, setWeather ] = useState(null)

   useEffect(() => {
        getWeather(72701).then(response => setWeather(response.weather[0].main))
        console.log(weather)
   }, [setWeather])

        //const weather= weather.weather[0].main;

        return(
            <>
            {(() => {
                if ( weather === "Clouds") {
                  return (
                    <>
                    <div> <img src= "weather_cloudy.png" alt="cloud" height="200px"/> </div>
                    <h3>The sun will come out tomorrow, probably.</h3>
                    </>
                  )
                } else if (weather === "Clear") {
                  return (
                    <>
                    <div><img src= "weather_sunny.png" alt="sun" height="200px"/></div>
                    <h3>Please walk the dog now, thanks.</h3>
                    </>
                  )
                } else if (weather === "Snow") {
                    return (
                      <>
                      <div><img src= "weather_snowy.png" alt="snow" height="200px"/></div>
                      <h3>Stay warm and make hot chocolate!</h3>
                      </>
                    ) 
                } else if (weather === "Rain") {
                    return (
                      <>
                      <div><img src= "weather_rain.png" alt="rain" height="200px"/></div>
                      <h3>Bring an umbrella!</h3>
                      </>
                    ) 
                } else if (weather === "Drizzle") {
                    return (
                      <>
                      <div><img src= "weather_drizzle.png" alt="rain" height="200px"/></div>
                      <h3>Stay dry!</h3>
                      </>
                    ) 
                } else if (weather === "Thunderstorm") {
                    return (
                      <>
                      <div><img src= "weather_tstorm.png" alt="storm cloud" height="200px"/></div>
                      <h3>Stay inside!</h3>
                      </>
                    ) 
                  } else if (weather === "Mist") {
                    return (
                      <>
                      <div><img src= "weather_drizzle.png" alt="drizzle" height="200px"/></div>
                      <h3>cozy?</h3>
                      </>
                    ) 
                } else {
                  return (
                    <div></div>
                  )
                }
            })()}
            </>

        )}
        

       