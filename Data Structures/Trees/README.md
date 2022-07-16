
# Trees

A brief description of Tree Data Structure in this readme file.


## OBJECTIVES

- Define what a tree is
- Compare and contrast trees and lists
- Explain the differences between trees, binary trees, and binary search trees
- Implement operations on binary search trees
## WHAT IS A TREE?

<h3 align='center' >A data structure that consists of nodes in a <b>parent / child</b> relationship</h3>

<h2 align='center'>👩‍👦</h2>

![trees](https://user-images.githubusercontent.com/88912160/178097479-2d3a9f0c-5751-4a63-aa43-625509a5b582.gif)

Lists - **linear**

Trees - **nonlinear**

![image](https://user-images.githubusercontent.com/88912160/178097531-009eea13-6fa7-4c35-aa6a-ea2cfba631b8.png)

![not-a-tree](https://user-images.githubusercontent.com/88912160/178097568-2a13e967-a8e5-46b0-9c38-220efd7b18c5.gif)

## TREE TERMINOLOGY

- **Root** - The top node in a tree.
- **Child** -A node directly connected to another node when moving away from the Root.
- **Parent** - The converse notion of a child.
- **Siblings** -A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection between one node and another.
## KINDS OF TREES

- **Simple Trees**
- **Binary Trees**
- **Binary Search Trees**

![image](https://user-images.githubusercontent.com/88912160/178097608-e4420715-d07b-463f-86fa-ab4867f6d129.png)

## SIMPLE TREES

Lots of different applications!

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

<table>
  <tr>
    <td><h1 align="center">Folders in Operating Systems</h1></td>
    <td><img src="https://user-images.githubusercontent.com/88912160/178097651-49e3479f-0611-427d-af3f-a06353145978.png" alt="" /></td>
  </tr>
  <tr>
    <td><h1 align="center">HTML DOM</h1></td>
    <td><img src="https://user-images.githubusercontent.com/88912160/178097692-48be621b-7ad5-4ad1-8257-0d95c6b03f9a.png" alt="" /></td>
  </tr>
  <tr>
    <td><h1 align="center">Abstract Syntax Tree</h1></td>
    <td><img src="https://user-images.githubusercontent.com/88912160/178097698-256208e9-c269-4cfa-bb9b-f3164ed36aec.png" alt="" /></td>
  </tr>
</table>

![binary-tree-or-not](https://user-images.githubusercontent.com/88912160/178097779-a7efdfd6-463c-4dc5-96b1-edbf152f4a56.gif)

## BINARY TREES

Lots of different applications as well!

- Decision Trees (true / false)
- Database Indicies
- Sorting Algorithms

![image](https://user-images.githubusercontent.com/88912160/178097951-5426dab5-3c60-46ee-99b7-4ce644985f72.png)

## HOW BSTS WORK

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

![is-it-valid](https://user-images.githubusercontent.com/88912160/178098006-5a7783fb-0900-4735-8197-0fe56cec9fd5.gif)

## The BinarySearchTree Class

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

```
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
```

## INSERTING A NODE

![inserting](https://user-images.githubusercontent.com/88912160/178098070-5dad06bd-47b7-4287-ae8f-e76b57fe339c.gif)

**Steps - Iteratively or Recursively**

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
## INSERTING A NODE SOLUTION

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}

var tree = new BinarySearchTree();

// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
```
## Finding a Node in a BST

**Steps - Iteratively or Recursively**

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
## Finding a Node in a BST Solution

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

var tree = new BinarySearchTree();

// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
```
## Big O of BST

Insertion - **O(log n)**

Searching - **O(log n)**

**NOT guaranteed!**

![image](https://user-images.githubusercontent.com/88912160/178098113-7df900e6-d424-499c-80ff-894217236c54.png)

![image](https://user-images.githubusercontent.com/88912160/178098126-575be725-3b20-4529-8e5d-fa3d78b52180.png)

## THIS IS A VALID BINARY SEARCH TREE

![image](https://user-images.githubusercontent.com/88912160/178098143-3013d095-1d79-4849-922c-8a434a32e158.png)

## TREE TRAVERSAL

### VISIT EVERY NODE ONCE
![image](https://user-images.githubusercontent.com/88912160/178098176-80fe9d7e-c122-4027-839c-2ae25ce25402.png)

## TRAVERSING A TREE

**Two ways:**

- Breadth-first Search
- Depth-first Search
## BREADTH  FIRST SEARCH
![image](https://user-images.githubusercontent.com/88912160/178098198-0ba83cb7-4765-4b43-bddd-5c83ee497490.png)
Binary Heaps
## BFS

**Steps - Iteratively**

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values
## BFS SOLUTION

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.BFS();
```
##  DEPTH FIRST SEARCH

## DFS - PreOrder

![dfs-preorder](https://user-images.githubusercontent.com/88912160/178098356-f3df07fe-419f-4dac-a23c-5018eab8a509.gif)

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
## DFS - PreOrder Solution 

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.DFSPreOrder();
```
## DFS - PostOrder

![dfs-postorder](https://user-images.githubusercontent.com/88912160/178098388-16d9677b-7340-4a4e-baef-c1e181b1d7d3.gif)

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
  - Invoke the helper function with the current variable
- Return the array of values
## DFS - PostOrder Solution

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.DFSPostOrder();
```
## DFS - InOrder

![dfs-inorder](https://user-images.githubusercontent.com/88912160/178098302-9afa87b6-a485-4376-b9ea-5b4af97988ac.gif)

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
## DFS - InOrder Solution

```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.DFSInOrder();
```
## BFS? DFS?

Which is better? 🤔

![which-to-use](https://user-images.githubusercontent.com/88912160/178098588-e2e109ab-9126-4acd-bd31-e46935f061fc.gif)

## RECAP

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through Trees using BFS and DFS
