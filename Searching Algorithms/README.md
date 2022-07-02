
# Searching Algorithms

A brief description of all the Searching Algorithms are in this readme file.



## Objectives

- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm
## How do we search?

Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.
### JavaScript has search!

There are many different search methods on arrays in JavaScript:

- indexOf
- includes
- find
- findIndex

But how do these functions work?

## Linear Search

Let's search for 12: 

```
[ 5, 8, 1, 100, 12, 3, 12 ]
```
We have to loop each and every element of the array in order to find 12 from the array.

![linear-search](https://user-images.githubusercontent.com/88912160/177000106-e722d04e-3c41-4662-8579-5c700a7c487e.gif)

## Linear Search Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

## Solution
```
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

// linearSearch([34,51,1,2,3,45,56,687], 100)
```

## Linear Search BIG-O

```
  O(1)          O(n)            O(n)
  Best         Average         Worst
```

## Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate ***half*** of the remaining elements at a time
- Binary search only works on ***sorted*** arrays!
### Divide and Conquer

Let's search for 15:
```
[ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]
```
![divide-and-conquer](https://user-images.githubusercontent.com/88912160/177000253-fa184c69-63b6-42fe-bfaf-89a6eefe8621.gif)

## Binary Search Pseudocode
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
- Create a pointer in the middle
    - If you find the value you want, return the index
    - If the value is too small, move the left pointer up
    - If the value is too large, move the right pointer down
- If you never find the value, return -1

## Navie Solution
```
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// binarySearch([2,5,6,9,13,15,28,30], 103)
```
## Refactored Version
```
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// binarySearch([2,5,6,9,13,15,28,30], 103)
```

# NOW LET'S DO IT RECURSIVELY!
## WHAT ABOUT BIG O?

```
       O(log n)                         O(1)
Worst and Average Case                Best Case
```
![linear-search](https://user-images.githubusercontent.com/88912160/177000610-f352b9a1-42e0-4fbb-8095-e80fbe9d6105.gif)

## Naive String Search

- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually

### Naive String Search
Long string:  ***wowomgzomg***

Short string: ***omg***

![naive-string-search](https://user-images.githubusercontent.com/88912160/177000813-ba843e5d-3dd2-40ca-9840-22ce24dee092.gif)

## Pseudocode

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count
## KMP String Search

- The Knutt-Morris-Pratt algorithm offers an improvement over the naive approach
- Published in 1977
- This algorithm more intelligently traverses the longer string to reduce the amount of redundant searching
- If you don't know KMP I highly recommend to watch [this](https://youtu.be/V5-7GzOfADQ) first

![kmp-string-search](https://user-images.githubusercontent.com/88912160/177000886-75df40b9-6f30-48ed-a288-3ecdaba9a319.gif)

### Prefixes and Suffixes

- In order to determine how far we can shift the shorter string, we can ***pre-compute*** the length of the longest (proper) suffix that matches a (proper) prefix
- This tabulation should happen before you start looking for the short string in the long string

![prefixes- -suffixes](https://user-images.githubusercontent.com/88912160/177000972-8209eb8c-78dc-4f0f-aa28-6500545aea2d.gif)

## Building the PI Table

```
function matchTable(word) {
  let arr = Array.from({ length: word.length }).fill(0);
  let suffixEnd = 1;
  let prefixEnd = 0;
  while (suffixEnd < word.length) {
    if (word[suffixEnd] === word[prefixEnd]) {
      // we can build a longer prefix based on this suffix
      // store the length of this longest prefix
      // move prefixEnd and suffixEnd
      prefixEnd += 1;
      arr[suffixEnd] = prefixEnd;
      suffixEnd += 1;
    } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
      // there's a mismatch, so we can't build a larger prefix
      // move the prefixEnd to the position of the next largest prefix
      prefixEnd = arr[prefixEnd - 1];
    } else {
      // we can't build a proper prefix with any of the proper suffixes
      // let's move on
      arr[suffixEnd] = 0;
      suffixEnd += 1;
    }
  }
  return arr;
}
```
## KMP - FTW!

```
function kmpSearch(long, short) {
  let table = matchTable(short);
  let shortIdx = 0;
  let longIdx = 0;
  let count = 0;
  while (longIdx < long.length - short.length + shortIdx + 1) {
    if (short[shortIdx] !== long[longIdx]) {
      // we found a mismatch :(
      // if we just started searching the short, move the long pointer
      // otherwise, move the short pointer to the end of the next potential prefix
      // that will lead to a match
      if (shortIdx === 0) longIdx += 1;
      else shortIdx = table[shortIdx - 1];
    } else {
      // we found a match! shift both pointers
      shortIdx += 1;
      longIdx += 1;
      // then check to see if we've found the substring in the large string
      if (shortIdx === short.length) {
        // we found a substring! increment the count
        // then move the short pointer to the end of the next potential prefix
        count++;
        shortIdx = table[shortIdx - 1];
      }
    }
  }
  return count;
}
```
## Big O of Search Algorithms

Linear Search - **O(n)**

Binary Search - **O(log n)**

Naive String Search - **O(nm)**

KMP - **O(n + m)** time, **O(m)** space
## Recap

- Searching is a very common task that we often take for granted
- When searching through an unsorted collection, linear search is the best we can do
- When searching through a sorted collection, we can find things very quickly with binary search
- KMP provides a linear time algorithm for searches in strings
