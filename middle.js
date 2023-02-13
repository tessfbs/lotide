const assertArraysEqual = require('./assertArraysEqual')


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

module.exports = middle;

// assertArraysEqual((middle([1])),[])
// assertArraysEqual((middle([1, 2])),[])
// assertArraysEqual((middle([1, 2, 3])),[2])
// assertArraysEqual((middle([1, 2, 3, 4, 5])),[3])
// assertArraysEqual((middle([1, 2, 3, 4])),[2,3])
// assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3,4])

