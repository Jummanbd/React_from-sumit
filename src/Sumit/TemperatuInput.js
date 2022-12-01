import React from "react";

const scaleName = {
    c:'Celsius',
    f:'Fahrenheit',
}

export default function TemperaturInput ({scale,temperature, InputHandel}) {

        return(
            <fieldset>
                <legend>Enter temperatur in {scaleName[scale]}:</legend>
                <input type='text' value ={temperature} onChange= {(e) => InputHandel (e, scale)} />
            </fieldset>

        )
    
}