//This function Big O Notation would be O(n * n) i.e O(n²), Because their are 2 "for loops"

function printAllPairs(n) {
  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= n; j++){
      console.log(i, j);
    }
  }
}
printAllPairs(1000);