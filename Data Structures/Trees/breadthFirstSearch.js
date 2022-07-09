class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null; 
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val)
    if(!this.root){
      this.root = newNode
      return this
    }
    let current = this.root;
    while(true){
      if(val == current.value) return undefined
      if(val < current.value){
        if(!current.left){
          current.left = newNode
          return this
        }
        current = current.left
      }else{
        if(!current.right){
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  find(val){
    if(!this.root) return false
    let current = this.root;
    while(true){
      if(val == current.value) return current
      if(val < current.value){
        if(!current.left) return false
        current = current.left
      }else{
        if(!current.right) return false
        current = current.right
      }
    }
  }


/*
///!BFS

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values
*/
  BFS(){
    let queue = []
    let res = []
    let current = this.root
    
    queue.push(current)
    while(queue.length){
      current = queue.shift()
      res.push(current.value)
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
    return res
  }
}

let tree = new BST();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.BFS()