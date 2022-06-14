function linearSearch (arr,value){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value) return i
  }
  return -1
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],23))