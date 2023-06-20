const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  let summ = 0
  arr.forEach(element => summ+=element);
  return summ
};

const multiply = function(arr) {
  let multi  = 1
  arr.forEach(element=> multi*=element)
  console.log(multi)
  return multi
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(num) {
  let fact = 1
  for (let x = 1; x <= num; x++) {
    fact = fact * x
  }
  return fact
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
