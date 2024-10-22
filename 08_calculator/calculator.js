const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, current) => (total * current));
};

const power = function(a, b) {
	let result = a;
  for (let i = 0; i < b -1; i++) {
    result *= a;
    console.log(result);
  };
  return result;
};

const factorial = function(num) {
	let arr = []
  if (num < 0) {
    return -1;
  } else if (num <= 1) {
    return 1;
  } else {
    for (let i = num; i > 0; i--) {
      arr.push(i);    
    };
    console.log(arr);
    return arr.reduce((total, current) => (total * current));
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
