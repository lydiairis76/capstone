import  React from 'react'

export default function DateTime(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return (
        <div>{month}/{date}/{year}</div>
       
    )}
