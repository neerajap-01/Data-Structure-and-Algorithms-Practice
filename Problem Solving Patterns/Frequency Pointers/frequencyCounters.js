// Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let element of arr1){
    frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1; 
  }
  for(let element of arr2){
    frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1; 
  }
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter1[key ** 2] !== frequencyCounter2[key]){
      return false
    }
  }
  return true
}

//console.log(same([1,2,2,4], [4,16,1,9]))

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//1
function sameStrings(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for(let val of str1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of str2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for(let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter1[key] !== frequencyCounter2[key]){
      return false;
    }
  }
  return true;
}

console.log(sameStrings("cinema", "iceman"))

//2
function validAnagram(first, second){
  if(first.length !== second.length){
    return false;
  } 

  let lookIn = {};
  for( let i = 0; i < first.length; i++){
    let letter = first[i];

    lookIn[letter] ? lookIn[letter] += 1 : lookIn[letter] = 1; 
  }
  for( let j = 0; j < second.length; j++){
    let letters = second[j]
    if(!lookIn[letters]){
      return false
    }else {
      lookIn[letters] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("cinema", "iceman"))