//!BIG O Complexity is O(2^n)

function fib(n) {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2)
}

console.log(fib(3))

//! We need to remember the repeat inputs value to speed up the process,

//! MEMOIZATION

function fibonacci(n, memo=[]){
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return n
  let res = fibonacci(n-1,memo) + fibonacci(n-2,memo)
  memo[n] = res;
  return res;
}

//Can improve by defining some values in memo array
function fibonacci(n, memo=[0,1,1]){
  if(memo[n] !== undefined) return memo[n];
  let res = fibonacci(n-1,memo) + fibonacci(n-2,memo)
  memo[n] = res;
  return res;
}

//!WE'VE BEEN WORKING TOP-DOWN BUT THERE IS ANOTHER WAY! BOTTOM-UP

//! TABULATION
function fibTabu(n) {
  if(n <= 2) return 1;
  let fibNum = [0,1,1];
  for (let i = 3; i <= n; i++) {
    fibNum = fibNum[i-1] + fibNum[i-2];
  }
  return fibNum[n]
}