function deepEqual(x,y) {
  if (x === y) return true;

  if (typeof x != "object" || typeof y != "object") return false;

  let keysX = Object.keys(x), keysY = Object.keys(y);

  if (keysX.length != keysY.length) return false;

  for (let key of keysX)
    if(!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;

  return true;
  
}

let obj = {first: {second : 5}, empty : null};
let obj2 = {first: 5, empty : null};

console.log(deepEqual(obj, obj2));