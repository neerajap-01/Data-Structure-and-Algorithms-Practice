//This function Big O Notation would be O(n), Because if the n changes the operation of the code changes as same, so the time taken would be proportionate to the n input

function addNum(n) {
  let result = 0;
  for(let i = 0; i <= n; i++){
    result += i;
  }
  return result;
}
let t1 = performance.now()
addNum(1000000000);
let t2 = performance.now()

console.log((`Time taken : ${(t2 - t1)/ 1000} seconds`));