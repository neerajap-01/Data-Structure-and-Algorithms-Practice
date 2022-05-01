//This function Big O Notation would be O(1), Because even if the n changes but the operation of the code remains the same so the time taken would be vary a little

function addNum(n){
  return n * (n + 1)/2;
}

let t1 = performance.now()
addNum(1000000000);
let t2 = performance.now()

console.log((`Time taken : ${(t2 - t1)/ 1000} seconds`));