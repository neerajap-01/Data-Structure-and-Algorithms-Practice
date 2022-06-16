/*
Selection Sort Pseudocode

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.
*/

//A Navie Approach
// function navieSelectionSort(arr) {
//   for(let i = 0; i < arr.length-1; i++){
//     let minIndex = i;
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[j] < arr[minIndex]){
//         minIndex = j;
//       }
//     }
//     [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//   }
//   return arr;
// }

// console.log(navieSelectionSort([6,1,2,3,4,5]))

//Optimized Approach
function navieSelectionSort(arr) {
  for(let i = 0; i < arr.length-1; i++){
    let minIndex = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    if(i !== minIndex){
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
  }
  return arr;
}

console.log(navieSelectionSort([6,1,2,3,4,5]))