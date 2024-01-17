class Graph{
    constructor(){
        this.adjacencylist={};
    }
    addVertex(vertex){
        if(!this.adjacencylist[vertex]) this.adjacencylist[vertex]=[];
    }
    addEdge(vertex1,vertex2)
    {
        this.adjacencylist[vertex1].push(vertex2);
        this.adjacencylist[vertex2].push(vertex1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencylist[vertex1]= this.adjacencylist[vertex1].filter(v=>v!==vertex2)
        this.adjacencylist[vertex2]= this.adjacencylist[vertex2].filter(v=>v!==vertex1)
    }
    removeVertex(vertex){
        while(!this.adjacencylist[vertex].length)
        {
            let connectedVertex=this.adjacencylist[vertex].pop();
            this.removeEdge(connectedVertex,vertex);
        }
        delete this.adjacencylist[vertex]
    }
}

var graph=new Graph();
graph.addVertex("sydney")
graph.addVertex("chennai")
graph.addVertex("delhi")
graph.addEdge("sydney","chennai")
graph.addEdge("sydney","delhi")
//graph.removeEdge("sydney","chennai")
//graph.removeVertex("sydney")
console.log(graph)