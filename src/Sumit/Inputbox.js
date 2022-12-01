import React from "react";
import { Convert, toCelsius, toFahrenheit } from "../lib/Converter.js";
import BoilingVerdict from "./BoilingVerdict.js";
import TemperaturInput from "./TemperatuInput.js";

export default class Inputbox extends React.Component{
    state = {
        temperature:"",
        scale: "c"
    };

    InputHandel = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }
    render() {
        const {temperature, scale} = this.state;

        const celsius = scale === 'f' ? Convert(temperature, toCelsius) : temperature;

        const fahrenheit = scale === 'c' ? Convert(temperature, toFahrenheit) : temperature;
        return(
            <div>
             <TemperaturInput scale ='c' temperature={celsius} InputHandel = {this.InputHandel}/>   
             <TemperaturInput scale ='f' temperature={fahrenheit} InputHandel = {this.InputHandel}/>   
            <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        )
    }
}