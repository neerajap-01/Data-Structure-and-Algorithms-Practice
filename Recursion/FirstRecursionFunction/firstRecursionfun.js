function countDown(num) {
  if(num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num)
}

// countDown(5);

function sumInRange(num) {
  if(num === 1) return 1;
  return num + sumInRange(num-1);
}
// console.log(sumInRange(3))

//factorial

function factorialWithOutRec (num) {
  let total = 1;
  for(let i = num; i > 1; i--){
    total *= i
  }
  return total;
}

// console.log(factorialWithOutRec(3))

function factorialWithRec (num) {
  if(num === 1) return 1;
  return num * factorialWithRec(num-1);
}

console.log(factorialWithRec(3))