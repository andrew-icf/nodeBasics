class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    bfs(){
      let data = [];
      let queue = [];
      let node;
      queue.push(this.root);
      while(queue.length){
        node = queue.shift();
        data.push(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      return data;
    }
    dfsPreOrder(){
      let data = [];
      function preOrder(node){
        data.push(node.value);
        if(node.left) preOrder(node.left);
        if(node.right) preOrder(node.right);
      }
      preOrder(this.root);
      console.log('preorder', data);
      return data;
    }
    dfsPostOrder() {
      let data = [];
      function postOrder(node){
        if(node.left) postOrder(node.left);
        if(node.right) postOrder(node.right);
        data.push(node.value);
      }
      postOrder(this.root);
      console.log('PostOrder', data);
      return data;
    }
    dfsInOrder(){
      let data = [];
      function inOrder(node){
        if(node.left) inOrder(node.left);
        data.push(node.value);
        if(node.right) inOrder(node.right);
      }
      inOrder(this.root);
      console.log('InOrder', data);
      return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.bfs();
tree.dfsPreOrder();
tree.dfsPostOrder();
tree.dfsInOrder();
// console.log(tree.bfs());
