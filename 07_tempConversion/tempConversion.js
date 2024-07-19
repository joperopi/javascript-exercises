const convertToCelsius = function(f) {
  let c = (5/9*(f-32));
  if (c === parseInt(c)) {
    return c;
  }else {
    return parseFloat(c.toFixed(1));
  }
};

const convertToFahrenheit = function(c) {
  let f = (32+(c*1.8));
  if (f === parseInt(f)) {
    return f;
  }else {
    return  parseFloat(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
