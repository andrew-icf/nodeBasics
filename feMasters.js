// PsuedoClassical Class
let Cabin = function (logs) {
  this.logs = logs;
  this.hasFireplace = true;
  this.isRemote = true;
}

Cabin.prototype.countLogs = function() {
  if( this.logs < 1) {
    return 'You have no cabin';
  } else {
    return this.logs;
  }
}

var bigCabin = new Cabin(40);
console.log(bigCabin.countLogs());

//  ----------  STACK
function Stack(capacity) {
  this._capacity = capacity; // || Ininity;
  this._storage = {};
  this._count = 0;
}

// O(1)
Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
Stack.prototype.pop = function() {
  if (this._count === 0) {
    return "No element inside the stack. Add element before poping";
  }

  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

// O(1)
Stack.prototype.peek = function() {
  return this._storage[this._count - 1];
}

// O(1)
Stack.prototype.count = function(){
  return this._count;
}

// var myStack = new Stack(3);
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log('mystack', myStack._storage);
// console.log(myStack.push('d'), 'Max capacity?');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.count(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.count(), 'should be 2');

// MinStack
function MinStack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

// O(1)
MinStack.prototype.push = function(value) {
  if(this._count < this._capacity) {
    if(this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return "You have hit max capacity";
}

// O(1)
MinStack.prototype.pop = function() {
  this._min.pop();
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

//O(1)
MinStack.prototype.peek = function() {
  this._storage[this._count - 1];
}

// O(1)
MinStack.prototype.count = function() {
  return this._count;
}

// O(1)
MinStack.prototype.min = function() {
  return this._min.peek();
}

//  ----------  QUEUE
function Queue(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

// O(1)
Queue.prototype.enqueue = function(value) {
  if(this.count() < this._capacity){
    this._storage[this._tail++] = value;
    return this.count();
  }
  return "Max capacity has been reached";
}

// O(1)
Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
}

// O(1)
Queue.prototype.peek = function() {
  return this._storage[this._head];
}

// O(1)
Queue.prototype.count = function() {
  return this._tail - this._head;
}

// O(n)
Queue.prototype.contains = function(value) {
  for( let i = this._head; i < this._tail; i++ ) {
    if ( this._storage[i] === value) return true;
  }
  return false;
}

// O(n)
Queue.prototype.until = function(value) {
  for ( let i = this._head; i < this._tail; i++ ) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
  return null;
}

// var myQueue = new Queue(3);
// console.log(myQueue.enqueue('a'), 'should be 1');
// console.log(myQueue.enqueue('b'), 'should be 2');
// console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue.dequeue(), 'should be a');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.peek(), 'should be b');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.contains('b'), 'should be true');
// console.log(myQueue.contains('d'), 'should be false');
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');


//  ----------  BINARY SEARCH TREE
function NodeBST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}
// Insert O(log n)
NodeBST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new NodeBST(value);
  }
  else {
    if (this.right) this.right.insert(value);
    else this.right = new NodeBST(value);
  }
  return this;
};
// Contains O(log n)
NodeBST.prototype.contains = function(val) {
  if (this.value === val) return true;
  if (val < this.value) {
    // if this.left doesn't exist return false
    // if it does exist, check if its subtree contains the value
    return !!this.left && this.left.contains(val);
  }
  if (val > this.value) {
    // if this.right doesn't exist return false
    // if it does exist, check if its subtree contains the value
    return !!this.right && this.right.contains(val);
  }
  return false;
}

let bsTree = new NodeBST(10);
bsTree.insert(5).insert(15).insert(2).insert(81);
bsTree.contains(15);
console.log(bsTree);

NodeBST.prototype.inOrder = function()
