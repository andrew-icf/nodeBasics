// function Graph() {
//   this.vertices = {};
// }
//
// Graph.prototype.addVertex = function(value) {
//   if(value === undefined) return;
//   this.vertices[value] = this.vertices[value] || [];
// };
//
// Graph.prototype.addEdge = function(val1, val2) {
//   if(!this.vertices[val1] || !this.vertices[val2]) {
//     return "Invalid Vertex Values - Please add them in";
//   }
//   this.vertices[val1].push(val2);
//   this.vertices[val2].push(val1);
// }
//
// let myGraph = new Graph();
// myGraph.addVertex('asdf');
// myGraph.addVertex('qwer');
// myGraph.addVertex('zxcv');
// myGraph.addEdge('asdf', 'zxcv');
// myGraph.addEdge('asdf', 'qwer');
// console.log(myGraph.vertices);
//
// function Graph2() {
//   this.storage = {};
//   this.size = 0;
// }
//
// Graph2.prototype.add = function(value) {
//   this.storage[value] = value;
//   this.size++;
// }
//
// Graph2.prototype.addConnection = function(from, to) {
//   this.storage[from][to] = true;
//   this.storage[to][from] = true;
// }
//
// Graph2.prototype.removeConnection = function(from, to) {
//   delete this.storage[from][to];
//   delete this.storage[to][from];
// }
//
// Graph2.prototype.contains = function(target) {
//   return this.storage.hasOwnProperty(target);
// }
//
// Graph2.prototype.hasConnection = function(val) {
//   return this.storage[from].hasOwnProperty[to];
// }
//
// Graph2.prototype.remove = function(val) {
//   delete this.storage[val];
//   this.size--;
//   for(let key in this.storage) {
//     if(this.storage[key][val]) {
//       delete this.storage[key][val];
//     }
//   }
// }
//
// let con = new Graph2();
// con.add('Sony');
// con.add('PS3');
// con.add('PS4');
// con.add('VR');
// con.add('Nintendo');
// con.add('Wii');
// con.add('Wii U');
// con.addConnection('Sony', 'PS3');
// con.addConnection('Sony', 'PS4');
// con.addConnection('Sony', 'VR');
// con.addConnection('Nintendo', 'Wii');
// con.addConnection('Nintendo', 'Wii U');
// con.contains('Super Nintendo');
// con.hasConnection('Sony', 'PS3');
// con.removeConnection('Sony', 'PS3');
// con.remove('PS3';)
class PriorityQueueNaive {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  }
  dequeue(){
    return this.values.shift();
  }
  sort(){
    this.values.sort((a,b) => a.priority - b.priority); // this is less efficient because it runs evertime
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueueNaive();
    const distances = {};
    const previous = {};
    let pathResult = [];
    let smallest;

    // build up initial state
    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while(nodes.values.length) {
      smallest = nodes.dequeue().val; // example 'A'
      if(smallest === finish) {
        // Here we are done and need to build our path result
        // console.log('previous2', previous)
        while(previous[smallest]){
          pathResult.push(smallest);
          smallest = previous[smallest];
        }
        break; // there will be nodes in the queue so we need to break out of this loop
      }
      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) { // neighbor = index position in the adjL
          let nextNode = this.adjacencyList[smallest][neighbor] // nextNode = each neighboring node ex: {node: 'F', weight: 4}
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight; // (distances A = 0 + nextNode{node: 'C', weight: 2} ) 0 + 2 = candidate
          if(candidate < distances[nextNode.node]){
            distances[nextNode.node] = candidate; // updating the distances obj with the new shortest path
            previous[nextNode.node] = smallest; // we want to update the shortest path node here(how we got there)
            nodes.enqueue(nextNode.node, candidate); // enqueue into the priority queue with new priority
          }
        }
      }
    }
    console.log(pathResult.concat(smallest).reverse());
    return pathResult.concat(smallest).reverse();
  }
}

class Graph {
  constructor(){
    this.adjList = {};
  }
  addVertex(vertex) {
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
  }
  removeVertex(vertex) {
    while(this.adjList[vertex].length) {
      const adjVertex = this.adjList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjList[vertex];
  }
  depthFirstSearchRecursive(start) {
    let result = [];
    let visited = {};
    let adjL = this.adjList; // need to create this for closure purposes

    function helper(vertex) {
      if(!vertex) return null;
      if(!visited[vertex]){
        visited[vertex] = true;
        result.push(vertex);
      }
      adjL[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return helper(neighbor)
        }
      });
    }
    helper(start);
    console.log('DFS-R', result)
    return result;
  }
  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjList[currentVertex].forEach(neighbor => {
         if(!visited[neighbor]){
           visited[neighbor] = true;
           stack.push(neighbor);
         }
      });
    }
    console.log('DFS-I', result);
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log('BFS', result);
    return result;
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B", 4);
g.addEdge("A","C", 2);
g.addEdge("B","E", 3);
g.addEdge("C","D", 2);
g.addEdge("C","F", 4);
g.addEdge("D","E", 3);
g.addEdge("D","F", 1);
g.addEdge("E","F", 1);

console.log(g.adjList);
// g.dijkstra('B', 'F');
g.depthFirstSearchRecursive('A');
// g.depthFirstSearchIterative('A');
// g.breadthFirst('A');
// g.removeEdge('A', 'B');
// g.removeEdge('E', 'F');
// g.removeVertex('D');
// console.log(g.adjList);
// g.depthFirstRecursive("A")
//
// //          A
// //        /   \
// //       B     C
// //       |     |
// //       D --- E
// //        \   /
// //          F
