function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);  // m => m > 10;

console.log(typeof(greaterThan10) + '\n' + greaterThan10(11));


function noisy(f) {
  return (...args) => {
    console.log("callings with", args);
    let result = f(...args);
    console.log("called with", args, ",retured", result);
    return result;
  }
}

noisy(Math.min)(3,5,6,2,5,1,-5);


// filtering arrays

function filter(array, test) {
  let passed = [];
  for (element of array) {
    if(test(element)){
      passed.push(element);
    }
  }

  return passed;
}

console.log(filter([4,7,12,4,2,1,5], x => x > 5));

// transforming with map

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }

  return mapped;
}

console.log(map([1,2,3,4,5], x => x * x));

//  summarizing with reduce (fold)

function reduce(array, combine, start) {
  let current = start;
  for (let element of array){
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1,2,3], (a, b) => a + b, 1))




