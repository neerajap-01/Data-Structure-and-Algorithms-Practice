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

class WeightedGraph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1,vertex2,weight){
    if(!this.adjacencyList.hasOwnProperty(vertex1)) this.addVertex(vertex1)
    if(!this.adjacencyList.hasOwnProperty(vertex2)) this.addVertex(vertex2)
    this.adjacencyList[vertex1].push({node: vertex2, weight})
    this.adjacencyList[vertex2].push({node: vertex1, weight})
  }

/*
///! Dijkstra's Pseudocode

- This function should accept a starting and ending vertex
- Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
- After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
- Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
- Start looping as long as there is anything in the priority queue
  - dequeue a vertex from the priority queue
  - If that vertex is the same as the ending vertex - we are done!
  - Otherwise loop through each value in the adjacency list at that vertex
    - Calculate the distance to that vertex from the starting vertex
    - if the distance is less than what is currently stored in our distances object
      - update the distances object with new lower distance
      - update the previous object to contain that vertex
      - enqueue the vertex with the total distance from the start node
*/
  dijkstra(start,end){
    let priority = new PriorityQueue()
    let distance = {}
    let previous = {}
    let path = []
    for(let vertex in this.adjacencyList){
      if(vertex == start){
        distance[vertex] = 0;
        priority.enqueue(vertex,0);
      }else {
        distance[vertex] = Infinity;
        priority.enqueue(vertex,Infinity)
      }
      previous[vertex] = null
    };
    while(priority.values.length){
      var smallest = priority.dequeue().val;
      if(smallest == end) {
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break
      };
      if(smallest || distance[smallest] !== Infinity){
        for(let index in this.adjacencyList[smallest]){
          let nextNode = this.adjacencyList[smallest][index];
          let distToNextNode = distance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node
          if(distToNextNode < distance[nextNeighbor]){
            distance[nextNeighbor] = distToNextNode

            previous[nextNeighbor] = smallest;
            priority.enqueue(nextNeighbor,distToNextNode);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.dijkstra("A", "E"));