
# BINARY HEAPS

A brief description of Tree Data Structure in this readme file.


## OBJECTIVES

- Define what a binary heap is
- Compare and contrast min and max heaps
- Implement basic methods on heaps
- Understand where heaps are used in the real world and what other data structures can be constructed from heaps
## WHAT IS A BINARY HEAP?

**Very** similar to a binary search tree, but with some different rules!

In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes
## WHAT DOES IT LOOK LIKE?

![Not-a-binary-heap](https://user-images.githubusercontent.com/88912160/178973473-f31df6ee-533d-4e25-9be0-0d5139628dc6.gif)

## MAX BINARY HEAP

- Each parent has at most two child nodes
- The value of each parent node is **always** greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

![tree-representation](https://user-images.githubusercontent.com/88912160/178973696-302f1737-ec93-40e3-aea2-7b9178233a40.gif)

### A MIN BINARY HEAP
![image](https://user-images.githubusercontent.com/88912160/178973839-7f64a1ec-5b67-4734-a405-11d427e911ef.png)

## Why do we need to know this?

Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures

They are also used quite a bit, with **graph traversal** algorithms

***We'll come back to this!***

![image](https://user-images.githubusercontent.com/88912160/178973975-2aa2d59e-57c7-47e4-9b55-50b97680ab67.png)

### THERE'S AN EASY WAY OF STORING A BINARY HEAP...

***A LIST/ARRAY***

![representing-a-heap](https://user-images.githubusercontent.com/88912160/178974529-2834f988-c414-4dcf-a5d5-0a1ae4f36a84.gif)

For any index of an array ***n***...

- The left child is stored at **2n + 1**
- The right child is at **2n + 2**

![image](https://user-images.githubusercontent.com/88912160/178974630-b4c5e0f8-9193-48fd-a836-361b181a57d3.png)

## WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?

![represent-a-parent-node](https://user-images.githubusercontent.com/88912160/178975057-0f902129-2e11-4289-8455-9030cd5a5c2b.gif)

For any child node at index  ***n***...

- Its parent is at index **(n-1)/2**

![image](https://user-images.githubusercontent.com/88912160/178975200-1b3306cc-ccbc-4482-865f-5cf78fca1656.png)

## DEFINING OUR CLASS

```
class MaxBinaryHeap{
  constructor(){
    this.values = []
  }
}
```
## Adding to a MaxBinaryHeap

- Add to the end
- Bubble up

![insert](https://user-images.githubusercontent.com/88912160/178975651-836fb6ad-0e2d-452f-8bd3-a608c8a49dcd.gif)

## INSERT PSEUDOCODE

- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!
## INSERT SOLUTION

```
class MaxBinaryHeap{
  constructor(){
    this.values = []
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];
        if(element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
    }
  }
}


let heap = new MaxBinaryHeap()

// heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
```
## REMOVING FROM A HEAP

- Remove the root
- Replace with the most recently added
- Adjust (sink down)

### SINK DOWN?

The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as ***bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max***).

![remove](https://user-images.githubusercontent.com/88912160/178976063-d7031c81-cba9-4cca-8ef7-d130d6c0a3dc.gif)

## REMOVING PSEUDOCODE
<p align='center>(also called extractMax)</p>

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...​
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  - Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
  - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  - The child index you swapped to now becomes the new parent index.  
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old root!
## REMOVING SOLUTION

```
class MaxBinaryHeap{
  constructor(){
    this.values = []
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];
        if(element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
    }
  }
  extractMax(){
    let max = this.values[0]
    let end = this.values.pop()
    if(this.values.length > 0){
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown(){
    let index = 0
    let length = this.values.length
    let element = this.values[0]
    while(true){
    let leftChildIdx = (2 * index) + 1
    let rightChildIdx = (2 * index) + 2
    let leftChild, rightChild
    let swap = null
    if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx]
        if(leftChild > element){
        swap = leftChildIdx
        }
    }
    if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx]
        if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
        swap = rightChildIdx
        }
    }
    if(swap === null) break
    this.values[index] = this.values[swap]
    this.values[swap] = element
    index = swap
    }
  }
}

let heap = new MaxBinaryHeap()

// heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
```
## BUILDING A  PRIORITY QUEUE

### WHAT IS A  PRIORITY QUEUE?

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
## A NAIVE VERSION

Use a list to store all elements

![image](https://user-images.githubusercontent.com/88912160/178976256-d7e8d7c0-239f-4ba1-9256-fe1b8a9a105d.png)

Iterate over the entire thing to find the highest priority element.

![priority-queue](https://user-images.githubusercontent.com/88912160/178976554-5187cbe0-c1f9-4ce0-8563-5da4789455e7.gif)

## DEFINING OUR CLASS

```
class PriorityQueue{
  constructor(){
    this.values = []
  }
}
```

***BUT ALSO...***

## A NODE CLASS

```
class Node{
  constructor(val,priority){
    this.value = val
    this.priority = priority
  }
}
```

Val doesn't matter.

Heap is constructed ***using Priority***

![image](https://user-images.githubusercontent.com/88912160/178976658-6f1433cc-ea1f-40c2-84b6-2b8145790201.png)
   
## OUR PRIORITY QUEUE

- Write a Min Binary Heap - lower number means higher priority.
- Each Node has a val and a priority.  Use the priority to build the heap.
- **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
- **Dequeue** method removes root element, returns it, and rearranges heap using priority.
## PRIORITY QUEUE SOLUTION

```
class Node{
  constructor(val,priority){
    this.value = val
    this.priority = priority
  }
}

class PriorityQueue{
  constructor(){
    this.values = []
  }
 
  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];
        if(element.priority >= parent.priority) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
    }
  }

  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
    }
    return min;
  } 
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild,rightChild;
        let swap = null;

        if(leftChildIdx < length){
            leftChild = this.values[leftChildIdx];
            if(leftChild.priority < element.priority) {
                swap = leftChildIdx;
            }
        }
        if(rightChildIdx < length){
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild.priority < element.priority) || 
                (swap !== null && rightChild.priority < leftChild.priority)
            ) {
               swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
    }
  }
}

let PQ = new PriorityQueue();

// PQ.enqueue("common cold",5)
// PQ.enqueue("gunshot wound", 1)
// PQ.enqueue("high fever",4)
// PQ.enqueue("broken arm",2)
// PQ.enqueue("glass in foot",3)
```
## MaxHeapify

Converting an array into a MaxBinaryHeap

- Create a new heap
- Iterate over the array and invoke your **insert** function
- return the values property on the heap
## Heapsort

We can sort an array in **O(n log n)** time and **O(1)** space by making it a heap!

- Make the array a max heap (use **maxHeapify**)
- Loop over the array, swap the root node with last item in the array
- After swapping each item, run **maxHeapify** again to find the next root node
- Next loop you'll swap the root node with the second-to-last item in the array and run **maxHeapify** again.
- Once you've run out of items to swap, you have a sorted array! 
## MinBinaryHeap

**Same idea, min values go upwards**

![image](https://user-images.githubusercontent.com/88912160/178976838-6b4e1b71-e44b-4f9e-bd6f-c767c5ff0ea7.png)

## Big O of Binary Heaps

Insertion -   **O(log N)**

Removal -   **O(log N)**

Search -   **O(N)**
## WHY LOG(N)?

**Suppose we wanted to insert 200**

![why-long(n)](https://user-images.githubusercontent.com/88912160/178977232-dd0ca93b-b030-408c-95cf-29de88dac69e.gif)

## WHAT ABOUT WORST CASE?

**REMEMBER THIS DEPRESSING TREE?**

![worst-case](https://user-images.githubusercontent.com/88912160/178977554-d826310f-56ee-4122-8151-e2fc1e5e3083.gif)

## RECAP

- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a little bit of math, we can represent heaps using arrays!
