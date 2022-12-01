export function toCelsius(fahrenheit) {
    return((fahrenheit-32) * 5 ) / 9;
}

export function toFahrenheit(celsius) {
    return((celsius * 9 / 5) * 5 ) + 32;
}

export function Convert(temperatur, convertTo){
    const input = parseFloat(temperatur);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convertTo(input);
    const rounder = Math.round(output * 1000) / 1000;
    return rounder.toString();
}