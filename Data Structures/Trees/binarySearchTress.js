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

/*
///!INSERTING A NODE

- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater 
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property
*/
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

/*
///!Finding a Node in a BST

- Starting at the root
    - Check if there is a root, if not - we're done searching!
    - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    - If not, check to see if the value is greater than or less than the value of the root
    - If it is greater 
      - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!
    - If it is less
      - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!
*/
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
}