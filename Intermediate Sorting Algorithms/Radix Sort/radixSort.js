//! RADIX SORT HELPERS
/* 
In order to implement radix sort, it's helpful to build a few helper functions first:
  getDigit(num, i) - returns the digit in num at the given place value
*/

function getDigit(num,i) {
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

/*
In order to implement radix sort, it's helpful to build a few helper functions first:
  digitCount(num) - returns the number of digits in num
*/

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

/*
In order to implement radix sort, it's helpful to build a few helper functions first:
  mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
*/

function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit,digitCount(nums[i]))
  }
  return maxDigit
}

/*
RADIX SORT PSEUDOCODE

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end!
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({length: 10}, () => []);

    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j],i);
      digitBuckets[digit].push(nums[j])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([23,345,5467,12,2345,9852]))