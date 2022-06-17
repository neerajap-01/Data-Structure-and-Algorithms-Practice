/*
Pivot Pseudocode

- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array 
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
    - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index
*/

function pivot(arr,startIndex = 0,endIndex = arr.length-1) {
  function swap(arr,firstIdx,secondIdx) {
    [arr[firstIdx],arr[secondIdx]] = [arr[secondIdx],arr[firstIdx]];
  }
  let pivotIndex = startIndex;
  let pivot = arr[startIndex]
  for (let i = startIndex+1; i < arr.length; i++) {
    if(pivot > arr[i]){
      pivotIndex++;
      swap(arr,i,pivotIndex)
    }
  }
  swap(arr,startIndex,pivotIndex)
  return pivotIndex;
}

// console.log(pivot([4,8,2,1,5,7,6,3]))

/*
Quicksort Pseudocode

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements
*/

function quickSort(arr,left = 0, right = arr.length-1) {
  if(left < right){
    let pivotIdx = pivot(arr, left, right)
    //left
    quickSort(arr, left, pivotIdx-1);
    //right
    quickSort(arr, pivotIdx+1, right)
  }
  return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]))