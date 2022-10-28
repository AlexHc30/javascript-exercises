const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// const sum = function(array) {
// 	let arraySum = 0;
//   for (let i = 0; i < array.length; i++) {
//     arraySum += array[i];
//   }
//   return arraySum;
// };
const sum = function(array) {
  return array.reduce((total, current) => total + current,0);
}

// const multiply = function(array) {
//   let result = 1;
//   for (let i = 0; i < array.length; i++) {
//     result *= array[i];
//   }
//   return result;
// };
const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(fact) {
	let result = 1;
  for (let i = 1; i <= fact; i++) {
    result *= i;
  }
  return result;
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
