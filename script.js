function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature";
        return;
    }

    let convertedTemp;

    if (from === to) {
        convertedTemp = temp;
    }

    else if (from === "celsius") {

        if (to === "fahrenheit")
            convertedTemp = (temp * 9/5) + 32;
        else
            convertedTemp = temp + 273.15;
    }

    else if (from === "fahrenheit") {

        if (to === "celsius")
            convertedTemp = (temp - 32) * 5/9;
        else
            convertedTemp = ((temp - 32) * 5/9) + 273.15;
    }

    else if (from === "kelvin") {

        if (to === "celsius")
            convertedTemp = temp - 273.15;
        else
            convertedTemp = ((temp - 273.15) * 9/5) + 32;
    }

    result.innerHTML =
        `Result: ${convertedTemp.toFixed(2)} ${getUnitSymbol(to)}`;
}

function getUnitSymbol(unit) {

    if (unit === "celsius")
        return "°C";

    if (unit === "fahrenheit")
        return "°F";

    return "K";
}