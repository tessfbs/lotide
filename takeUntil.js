//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.


const takeUntil = (array, callback) => {
  //create output variable
  let output=[];

  //loop to check each item
  for(let x of array){
    
    //check if the condition given in the call back is true in order to stop the loop
    if(!callback(x)){
      output.push(x);
    }else{
      return output
    }
  }
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


console.log(takeUntil(data1, x => x < 0));
console.log(takeUntil(data2, x => x === ','));

