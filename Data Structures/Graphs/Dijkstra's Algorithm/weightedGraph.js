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
}