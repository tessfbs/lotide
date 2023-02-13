const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;

// console.log(assertArraysEqual(["1", 2, "3"], ["1", "2", "3"]))
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))

