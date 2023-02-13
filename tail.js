const assertEqual = require('./assertEqual')

const tail = function(array){
  let array2 = [];
  for(var i = 1; i < array.length; i++){
    array2[i-1]=array[i];
  }
  return array2;
}

module.exports = tail;

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"