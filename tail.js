const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`)
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(array){
  let array2 = [];
  for(var i = 1; i < array.length; i++){
    array2[i-1]=array[i];
  }
  return array2;
}
console.log(tail([5,4,3,2,1]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"