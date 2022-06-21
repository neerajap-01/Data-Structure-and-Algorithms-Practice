/*
Pushing pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
*/

/*
Popping pseudocode

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed
*/

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }
  pop(){
    if(this.length == 0) return undefined;
    let current = this.head;
    let newTail = current;
    while(!current.next){
      newTail = current
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    if(this.length == 0){
      this.head = null;
      this.tail = null;
    }
    return current
  }
}

let list = new SinglyLinkedList();