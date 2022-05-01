//This function Big O Notation would be O(n), because the iteration or the runtime is basically depends on the as it grows after 5 and can get upto n or infinity

function logAtLeast5(n){
  for(let i = 1; i <= Math.max(5,n); i++){
    console.log(i);
  }
}

logAtLeast5(10)