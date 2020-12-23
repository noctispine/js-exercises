function flatten(array) {
  let flatArr = [];
  for (let element of array) {
    flatArr = flatArr.concat(element);
  }
  return flatArr;
}

let arrays = [[1,2,3], [4,5], [6]];

console.log(flatten(arrays));

// with using reduce

console.log(arrays.reduce((flat, current) => flat.concat(current), []));