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



const without = function(source, itemsToRemove){
  let newArray = [];
  for(let i = 0; i < source.length; i++){
    for(let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
        source.splice(i,1);
      }
    }    
  }
  return source;
};

module.exports = without;

console.log(without([1, 2, 3], [1]) )
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["hello", "world", "lighthouse"],["hello", "world", "lighthouse"]))
