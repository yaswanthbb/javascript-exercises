const convertToCelsius = function(temp) {
  const conversion = (temp - 32) * (5 / 9)
  if(Number.isInteger(conversion)){
    return conversion
  }
  else{
    return +conversion.toFixed(1)
  }
};

const convertToFahrenheit = function(temp) {
  const conversion = (temp * (9 / 5) + 32)
  if(Number.isInteger(conversion)){
    return conversion
  }
  else{
    return +conversion.toFixed(1)
  }                                                                   
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
