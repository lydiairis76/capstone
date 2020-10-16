import axios from "axios"

export function getWeather(zipCode) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&units=imperial&appid=c7c75b49b3c71ddf2f1a3baeaf301451`
    return axios.get(endpoint).then(response => response.data)
}