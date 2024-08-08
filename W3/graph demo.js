class Graph{
    constructor(){
        this.adjancyList = {}
    }
    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjancyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjancyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjancyList[vertex1].add(vertex2)
        this.adjancyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjancyList){
            console.log(vertex + " -> " + [...this.adjancyList[vertex]]);
            
        }
    }
    removeEdge(vertex1,vertex2){
        this.adjancyList[vertex1].delete(vertex2)
        this.adjancyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjancyList[vertex]){
            return;
        }
        for(let adjancyVertex of this.adjancyList[vertex]){
            this.removeEdge(vertex,adjancyVertex)
        }
        delete this.adjancyList[vertex]
    }
}

let ngraph = new Graph()

ngraph.addEdge("A","B")
ngraph.addEdge("B","C")
ngraph.removeVertex("A")
ngraph.display()