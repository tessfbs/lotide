const takeUntil = function(array,callback) {
  let takArr = [];
  for (let arr of array) {
    if (!callback(arr)) {
      takArr.push(arr);
    } else {
      return takArr;
    }
  }
  return takArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


console.log(takeUntil(data1, x => x < 0));
console.log(takeUntil(data2, x => x === ','));
