function range(start, end, step) {
  let arr = [];
  for(let i = start; i != end + step; i += step)
    arr.push(i);
    
  return arr;
}

function sum(...numbers) {
  let sum = 0;
  for(let number of numbers) {
    sum += number;
    console.log(number);
  }

  return sum;
}

console.log(sum(...range(10, 5, -1)));