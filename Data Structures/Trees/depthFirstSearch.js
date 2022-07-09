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

/*
///!DFS - PreOrder

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
*/  
  DFSPreOrder(){
    let res = [];
    let current = this.root
    function traverse(node){
      res.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return res
  }

/*
///!DFS - PostOrder

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
  - Invoke the helper function with the current variable
- Return the array of values
*/  
  DFSPostOrder(){
    let res = [];
    let current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      res.push(node.value)
    }
    traverse(current)
    return res
  }

/*
///!DFS - InOrder

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
*/  
  DFSInOrder(){
    let res = [];
    let current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      res.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(current)
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
tree.DFSPreOrder()
tree.DFSPostOrder()
tree.DFSInOrder()