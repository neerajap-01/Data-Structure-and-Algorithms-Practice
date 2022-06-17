/*
BubbleSort Pseudocode

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array
*/

//Navie Approach
// function bubbleSortNum(arr){
//   for(let i = arr.length; i > 0; i--){
//     for (let j = 0; j < i-1; j++) {
//       if(arr[j] > arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSortNum([6,1,2,3,4,5]))

//Optimized Approach - When the data is nearly sorted
function bubbleSortNum(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true
    for (let j = 0; j < i-1; j++) {
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        noSwaps = false
      }
    }
    if(noSwaps) break
  }
  return arr
}

console.log(bubbleSortNum([6,1,2,3,4,5]))