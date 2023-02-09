//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.


const countLetters = function(string){
  let results = {l:0,i:0,g:0};
  for(let letter of string){
    if(results[letter]){
      results[letter] += 1;
    }else{
      results[letter] =1;
    }
  }
  return results
}

console.log(countLetters('lighthouse in the house'));
