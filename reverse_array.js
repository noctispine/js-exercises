function reverseArray(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++)
    newArr[i] = arr[arr.length-i-1]; 

  return newArr;  
}

function reverseArrayInPlace(arr) {
  let x;
  x = arr.pop();
  arr.unshift(x);
  
  return arr;
}


let arr = [3,4,5,6];

console.log(reverseArray(arr));

console.log(reverseArray(arr));