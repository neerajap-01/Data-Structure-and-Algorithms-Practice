//Write a function which accepts a base an an exponent.  It should return the result of raising the base to that exponent.

function power (a,b) {
  if(b === 0) return 1;
  return a * power(a,(b-1))
}

// console.log(power(2,3))

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray (arr) {
  if(arr.length === 0){
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3]))