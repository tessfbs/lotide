//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let index in sentence){
    
    if(results[sentence[index]]){
      results[sentence[index]].push(index);
    }else{
      results[sentence[index]] = [index];
    }
  }
  return results;
};

console.log(letterPositions('TESS'));