function binarySearch (arr,value) {
  let left = 0;
  let right = arr.length-1;
  while(left < right) {
    let midPoint = Math.floor((left+right)/2);
    if(arr[midPoint] === value) return midPoint
    if(arr[midPoint] < value) left = midPoint+1 
    else right = midPoint-1
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5],2)) 
