class Graph {
  constructor(){
    this.adjacencyList = {}
  }

/*
///!ADDING A VERTEX

- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
*/  
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

/*
///!ADDING AN EDGE

- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices
*/  
  addEdge(vertex1, vertex2){
    if(!this.adjacencyList.hasOwnProperty(vertex1)) this.addVertex(vertex1)
    if(!this.adjacencyList.hasOwnProperty(vertex2)) this.addVertex(vertex2)
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

/*
///!REMOVING AN EDGE

- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices
*/  
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(x => x !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(x => x !== vertex1)
  }

/*
///!REMOVING A VERTEX

- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
- delete the key in the adjacency list for that vertex
*/  
  removeVertex(vertex){
    if(!this.adjacencyList[vertex]) return undefined

    this.adjacencyList[vertex].forEach(element => {
      this.removeEdge(vertex,element)
    });
    delete(this.adjacencyList[vertex])
  }
 
/*
///!DEPTH FIRST TRAVERSAL

- The function should accept a starting node
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Create a helper function which accepts a vertex
  - The helper function should return early if the vertex is empty
  - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
  - Loop over all of the values in the adjacencyList for that vertex
  - If any of those values have not been visited, recursively invoke the helper function with that vertex
- Invoke the helper function with the starting vertex
- Return the result array
*/  
  DFSrecursion(vertex){
    let result = []
    let visited = {}
    const adjacencyList = this.adjacencyList;

    (function helper(v) {
      if(!v) return null
      visited[v] = true
      result.push(v)
      for(let val of adjacencyList[v]){
        if(!visited[val]){
          helper(val)
        }
      }
    })(vertex)
    return result
  }

/*
///!DEPTH FIRST TRAVERSAL

- The function should accept a starting node
- Create a stack to help use keep track of vertices (use a list/array)
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Add the starting vertex to the stack, and mark it visited
- While the stack has something in it:
  - Pop the next vertex from the stack
  - If that vertex hasn't been visited yet:
    - ​Mark it as visited
    - Add it to the result list
    - Push all of its neighbors into the stack
- Return the result array
*/  
  DFSiterative(vertex){
    let stack =[]
    let result = []
    let visited = {}
    stack.push(vertex)
    visited[vertex] = true
    while(stack.length !== 0){
      result.push(stack.pop())
      if(!visited[vertex]){
        visited[vertex] = true
        result.push(vertex)
        stack.push(...this.adjacencyList[vertex])
      }
    }
    return result
  }

/*
///!BREADTH FIRST

- This function should accept a starting vertex
- Create a queue (you can use an array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertex from the queue and push it into the array that stores nodes visited
- Loop over each vertex in the adjacency list for the vertex you are visiting.
- If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
- Once you have finished looping, return the array of visited nodes
*/  
  BFS(vertex){
    let queue = [vertex]
    let result = []
    let visited = {}

    visited[vertex] = true
    let currentVertex;
    while(queue.length){
      currentVertex = queue.shift()
      result.push(currentVertex)
      for (let val of this.adjacencyList[currentVertex]) {
        if(!visited[val]){
          visited[val] = true
          queue.push(val)
        }
      }
    }
    return result
  }
}

let g = new Graph()