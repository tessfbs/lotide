const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`)
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let status = true;
  const array1= Object.entries(object1) 
  const array2= Object.entries(object2)
  // console.log(array1)
  // console.log(array2)
    // I want to compare the number of keys
  if(array1.length !== array2.length){
    return false;
  }
  for(let key in object1){
    //console.log(key);
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



const oneMoreShirtObject = { size: "small", color: "red"};
const shirtObject = { color: "red", size: "small" };
const anotherShirtObject= { size: "medium", color: "blue" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

console.log(eqObjects(shirtObject,anotherShirtObject)) //FALSE
console.log(eqObjects(shirtObject,oneMoreShirtObject)) //TRUE
console.log(eqObjects(shirtObject,longSleeveShirtObject)) //FALSE
console.log(eqObjects({ a: '1', b: 2 }, { b: 2, a: '1' })) //FALSE




//console.log(assertEqual((shirtObject,longSleeveShirtObject),true))