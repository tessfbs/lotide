
const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`)
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const eqArrays = function(array1,array2){
  let status = true
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return status = false;
    }
  }
  return status
}
module.exports = eqArrays;

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]) );
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))