function Graph() {
  this.vertices = {};
}

Graph.prototype.addVertex = function(value) {
  if(value === undefined) return;
  this.vertices[value] = this.vertices[value] || [];
};

Graph.prototype.addEdge = function(val1, val2) {
  if(!this.vertices[val1] || !this.vertices[val2]) {
    return "Invalid Vertex Values - Please add them in";
  }
  this.vertices[val1].push(val2);
  this.vertices[val2].push(val1);
}

let myGraph = new Graph();
myGraph.addVertex('asdf');
myGraph.addVertex('qwer');
myGraph.addVertex('zxcv');

myGraph.addEdge('asdf', 'zxcv');
myGraph.addEdge('asdf', 'qwer');
console.log(myGraph.vertices);
