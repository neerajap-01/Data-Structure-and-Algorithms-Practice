class PriorityQueue{
  constructor(){
    this.values = []
  }

  enqueue(val, priority){
    this.values.push({val,priority});
    this.sort()
  }

  dequeue(){
    return this.values.shift()
  }

  sort(){
    this.values.sort((a,b) => a.priority - b.priority)
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