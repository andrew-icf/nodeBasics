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

function Graph2() {
  this.storage = {};
  this.size = 0;
}

Graph2.prototype.add = function(value) {
  this.storage[value] = value;
  this.size++;
}

Graph2.prototype.addConnection = function(from, to) {
  this.storage[from][to] = true;
  this.storage[to][from] = true;
}

Graph2.prototype.removeConnection = function(from, to) {
  delete this.storage[from][to];
  delete this.storage[to][from];
}

Graph2.prototype.contains = function(target) {
  return this.storage.hasOwnProperty(target);
}

Graph2.prototype.hasConnection = function(val) {
  return this.storage[from].hasOwnProperty[to];
}

Graph2.prototype.remove = function(val) {
  delete this.storage[val];
  this.size--;
  for(let key in this.storage) {
    if(this.storage[key][val]) {
      delete this.storage[key][val];
    }
  }
}

let con = new Graph2();
con.add('Sony');
con.add('PS3');
con.add('PS4');
con.add('VR');
con.add('Nintendo');
con.add('Wii');
con.add('Wii U');
con.addConnection('Sony', 'PS3');
con.addConnection('Sony', 'PS4');
con.addConnection('Sony', 'VR');
con.addConnection('Nintendo', 'Wii');
con.addConnection('Nintendo', 'Wii U');
