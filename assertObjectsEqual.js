const eqObjects = function(object1, object2) {
  let status = true;
  const array1= Object.entries(object1) 
  const array2= Object.entries(object2)
    // I want to compare the number of keys
  if(array1.length !== array2.length){
    return false;
  }
  for(let key in object1){
      // I want to compare they keys
    if((key in object2) === false){
      return false;
    }
    let value1 = object1[key];
    let value2 = object2[key];

    //I want to compare the value for the same key

  if(value1 !== value2){
      return false
    }
  }
return status;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if(eqObjects(actual,expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)}!== ${inspect(expected)}`)
  }
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }))