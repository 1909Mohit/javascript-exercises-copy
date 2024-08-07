const convertToFahrenheit = function(celsiusTemperature) {
  // freezing point 0C, Boiling point 100C of water
  // 100C - 0C = 100C

  // convert to Fahrenheit -- multiply by (180/100) or (9/5) and add 32
  const fahrenheitTemperature = (celsiusTemperature * (9 / 5)) + 32;
  // return Number(fahrenheitTemperature.toFixed(1));
  return parseFloat(fahrenheitTemperature.toFixed(1));

};

const convertToCelsius = function(fahrenheitTemperature) {
  // freezing point 32F, Boiling point 212F of water 
  // 212F - 32F = 180F

  // convert to celsius -- Subtract 32 and then multiply by (5/9)
  const celsiusTemperature = (fahrenheitTemperature - 32) * (5/9)
  // return Number(celsiusTemperature.toFixed(1));
  return parseFloat(celsiusTemperature.toFixed(1));


};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
