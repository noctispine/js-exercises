function range(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if (step > 0){
    for(let i = start; i <= end; i += step)
      arr.push(i);
  }
  else{
    for(let i = start; i >= end; i += step)
      arr.push(i);
  }
  
  return arr;
}

function sum(...numbers) {
  let sum = 0;
  for(let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sum(...range(10,2,-2)));