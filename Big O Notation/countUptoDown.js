//This function Big O Notation would be O(n) and O(n) i.e 2(O(n)), Because their are 2 "for loops"

function countUptoDown(n) {
  console.log("Going up!");
  for(let i = 0; i < n; i++){
    console.log(i);
  }
  console.log("At the top!\n/Going down...");
  for(let j = n - 1; j >= 0; j--){
    console.log(j);
  }
  console.log("Back down. Bye");
}

countUptoDown(10);