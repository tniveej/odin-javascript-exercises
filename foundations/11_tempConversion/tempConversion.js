function checkAndRound (temperature) {
  return (Number.isInteger(temperature)) ? temperature: Math.round(temperature*10)/10;
}

const convertToCelsius = function(farenheit) {
  return checkAndRound((farenheit-32)*5/9);
  
};

const convertToFahrenheit = function(celcius) {
  return checkAndRound(celcius*9/5+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
