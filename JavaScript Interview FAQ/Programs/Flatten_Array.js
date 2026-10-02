let originalArray = [1, [2, 3], 4, 5, 6];
let getFlattenArray = function flattenArray(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(getFlattenArray(originalArray));
