function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
  
    if (unit === "celsius") {
      var convertedTemperature = (temperature * 9/5) + 32;
      resultElement.textContent = temperature + " Celsius = " + convertedTemperature.toFixed(2) + " Fahrenheit";
    } else if (unit === "fahrenheit") {
      var convertedTemperature = (temperature - 32) * 5/9;
      resultElement.textContent = temperature + " Fahrenheit = " + convertedTemperature.toFixed(2) + " Celsius";
    }
  }
  