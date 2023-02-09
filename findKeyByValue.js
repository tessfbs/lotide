//Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`)
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const findKeyByValue = function(object,value){
  for(gender in object){
    //console.log(object[gender]);
    if(object[gender] === value){
      return gender
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"))
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));