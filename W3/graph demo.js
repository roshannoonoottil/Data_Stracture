class Graph{
    constructor(){
    this.adjencyList = {}
    }
    addVertex(vertex){
        if(!this.adjencyList[vertex]){
            this.adjencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjencyList[vertex1]){
            this.addVertex[vertex1]
        }
        if(!this.adjencyList[vertex2]){
            this.addVertex[vertex2]
        }
        this.adjencyList[vertex1].add(vertex2)
        this.adjencyList[vertex2].add(vertex1)
    }
    dispaly(){
        for(let vertex in this.adjencyList){
            console.log(vertex + " ->" + [...this.adjencyList[vertex]])
        }
    }
}

let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")



graph.dispaly()
