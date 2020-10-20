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
                    <div> <img src= "cloud.svg" alt="cloud"/> </div>
                  )
                } else if (weather === "Clear") {
                  return (
                    <div><img src= "smilesun.svg" alt="sun"/></div>
                  )
                } else if (weather === "Snow") {
                    return (
                      <div><img src= "snow.svg" alt="snow"/></div>
                    ) 
                } else if (weather === "Rain") {
                    return (
                      <div><img src= "rain.svg" alt="rain"/></div>
                    ) 
                } else if (weather === "Drizzle") {
                    return (
                      <div><img src= "rain.svg" alt="rain"/></div>
                    ) 
                } else if (weather === "Thunderstorm") {
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
        

       