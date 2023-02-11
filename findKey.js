//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  let results = [];

  for(let key in object){
    // console.log("movie", key);
    // console.log("start rating: ", object[key].stars) 

    //criteria from callback
    // console.log(callback(object.key));
    //console.log(callback(object[key]));
    //console.log(object[key].stars);
    if(callback(object[key])){
  return key;
}
  }
  return undefined
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, key => key.stars === 2)) // => "noma"


