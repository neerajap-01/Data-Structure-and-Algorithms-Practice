class MaxBinaryHeap{
  constructor(){
    this.values = []
  }

/*
///!INSERT PSEUDOCODE

- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!
*/
  insert(value){
    this.values.push(value)
    let index = this.values.length - 1
    let parentIdx = Math.floor((index-1)/2)
    while(this.values[parentIdx] < value){
      [this.values[parentIdx],this.values[index]] = [this.values[index],this.values[parentIdx]]
      index = parentIdx
      parentIdx = Math.floor((index-1)/2)
    }
    return this
  }
}

let heap = new MaxBinaryHeap()

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
console.log(heap.insert(12))
console.log(heap.insert(55))