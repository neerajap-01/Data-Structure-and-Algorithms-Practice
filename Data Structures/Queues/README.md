
# QUEUES

A brief description of QUEUES Data Structure in this readme file.


## OBJECTIVES

- Define what a queue is
- Understand use cases for a queue
- Implement operations on a queue data structure
## WHAT IS A QUEUE?

A ***FIFO*** data structure!

**F**irst **I**n **F**irst **O**ut
## How we'll visualize a queue

![image](https://user-images.githubusercontent.com/88912160/177288562-01ee3672-e6fd-4c3f-97ee-5c4d7712d486.png)

## WE'VE SEEN THIS BEFORE

Queues exist everywhere! Think about the last time you waited in line....

**How do we use them in programming?**

- Background tasks
- Uploading resources
- Printing / Task processing
## THERE IS MORE THAN ONE WAY OF IMPLEMENTING A QUEUE

### BUILDING A QUEUE WITH AN ARRAY

```
let q = []

//Adding to queue - O(1) complexity
q.push("First") //1
q.push("Second") //2
q.push('Third") //3

//Removing from queue with "FIFO" principle - O(1) complexity
q.shift() //"Third"
q.shift() //"Second"
q.shift() //"First"
```
**OR**
```
let q = []

//Adding to queue - O(1) complexity
q.unshift("First") //1
q.unshift("Second") //2
q.unshift('Third") //3

//Removing from queue with "FIFO" principle - O(1) complexity
q.pop() //"Third"
q.pop() //"Second"
q.pop() //"First"
```

### PREREQUISITES

A NODE CLASS

```
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
```
A STACK CLASS
```
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
```
## Enqueue

Adding to the **beginning** of the Queue!

Remember, queues are a **FIFO** data structure
## Enqueue Pseudocode

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1
## Enqueue Solution

```
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}

let q = new Queue()

// q.enqueue("First")
// q.enqueue("Second")
// q.enqueue('Third")
```
## Dequeue

Removing from the **beginning** of the Queue!

Remember, queues are a **FIFO** data structure
## Dequeue pseudocode

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first 
- Decrement the size by 1
- Return the value of the node dequeued
## Dequeue Solution

```
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();

// q.dequeue()
// q.dequeue() 
// q.dequeue()
```
## BIG O of QUEUES

Insertion -   **O(1)**

Removal -   **O(1)**

Searching -   **O(N)**

Access -   **O(N)**
## RECAP

Queues are a **FIFO** data structure, all elements are first in first out.
Queues are useful for processing tasks and are foundational for more complex data structures
Insertion and Removal can be done in **O(1)**
