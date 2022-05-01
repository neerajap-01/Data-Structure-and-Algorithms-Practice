//This function Big O Notation would be O(1), because the iteration or the runtime is basically go upto 5 and then it will not grow more than that.

function logAtMost5(n){
  for(let i = 1; i <= Math.min(5,n); i++){
    console.log(i);
  }
}

logAtMost5(1)