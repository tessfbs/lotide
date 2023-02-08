const eqArrays = function(array1,array2){
  let status = true
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      status = false;
    }
  }
  return status
}

const assertArraysEqual = function(array1,array2){
  if(eqArrays(array1,array2)){
    console.log(`🟢🟢🟢 Assertion Passed: ${array1}  === ${array2}`)
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`)
  }
}

//console.log(assertArraysEqual(["1", 2, "3"], ["1", "2", "3"]))
//console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))

//length 
//if it is 1 or 2 >> result is []
//if it is odd number >> number/2 rounded upc>> result is the [number/2 rounded upc
//if it is even number  >> result is 2 index : [number/2] and [number/2-1]

const middle =  function(array){
  const length = array.length;
  let result = [];
  if(length === 1 || length === 2){
    result = [];
    return result;
  }if (length % 2 === 0){
    result.push(array[length/2]-1);
    result.push(array[length/2]);
  }if (length % 2 !== 0){
    result.push(array[Math.ceil(length/2-1)]);
  }
  return result
}
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

