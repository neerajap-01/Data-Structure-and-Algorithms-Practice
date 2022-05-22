// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//1
function countUniqueValues1(arr){ 
  if(arr.length == 0){
    return 0;
  }

  let i = 0,
  j = 1,
  result = 0;
  while(j < arr.length){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
      j++;
      result = i+1
    }else{
      j++
    }
  }
  return result;
}

console.log(countUniqueValues1([1,2,3,4,4,4,7,7,12,12,13]))

//2
function countUniqueValues(arr){
  if(arr.length == 0){
    return 0;
  }
  let i = 0
  for(let j =1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))