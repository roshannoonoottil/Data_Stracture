class Graph{
    constructor(){
        this.adjacencyList = {}   
     }
     addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
     }
     addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this,this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
     }
     display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
     }
     removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
     }
     removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjcencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjcencyVertex)
        }
        delete this.adjacencyList[vertex]
     }
}

let newGraph = new Graph()
newGraph.addEdge("A","B")
newGraph.addEdge("B","C")
newGraph.display()
console.log("+++++++++++++");

newGraph.removeVertex("A")
newGraph.display()