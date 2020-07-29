//https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor(){
    this.root = null; 
  }
  insert(data) { 
    var newNode = new Node(data); 
    if(this.root === null) 
        this.root = newNode; 
    else {
      this.insertNode(this.root, newNode); 
    }
  } 
  
  insertNode(node, newNode) { 
    if(newNode.data < node.data) { 
      if(node.left === null) {
        node.left = newNode; 
      } else {
        this.insertNode(node.left, newNode);  
      }
    } else { 
        if(node.right === null) 
            node.right = newNode; 
        else {
          this.insertNode(node.right,newNode); 
        }
    } 
  }

  getRootNode(){
    return this.root
  }
  // search for a node with given data 
  search(node, data) { 
    // if trees is empty return null 
    if(node === null) 
        return null; 
  
    // if data is less than node's data 
    // move left 
    else if(data < node.data) 
        return this.search(node.left, data); 
  
    // if data is less than node's data 
    // move left 
    else if(data > node.data) 
        return this.search(node.right, data); 
  
    // if data is equal to the node data  
    // return node 
    else
        return node; 
  } 
  // Performs inorder (smallest to largest order) traversal of a tree 
  inorder(node, array=[]) { 
    if(node !== null) { 
        this.inorder(node.left, array); 
        array.push(node.data); //or do `console.log(node.data)` if don't want array
        this.inorder(node.right, array); 
    }
    return array
  } 
  // Performs preorder traversal of a tree     
  preorder(node, array=[]) { 
    if(node !== null) { 
        array.push(node.data) //or do `console.log(node.data)` if don't want array
        this.preorder(node.left, array); 
        this.preorder(node.right, array); 
    } 
    return array
  }

  // Performs postorder traversal of a tree 
  postorder(node, array=[]){ 
    if(node !== null) { 
      this.postorder(node.left, array); 
      this.postorder(node.right, array); 
      array.push(node.data) //or do `console.log(node.data)` if don't want array
    }
    return array 
  } 
}





//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  

let arr = [15,25,10,7,22,17,13,5,9,27]
let t = new Bst();
for(let i of arr){
  t.insert(i)
}
let rootNode = t.getRootNode()
// t.inorder(rootNode)    // [5, 7, 9, 10, 13, 15, 17, 22, 25, 27]
// t.preorder(rootNode)   // [15, 10, 7, 5, 9, 13, 25, 22, 17, 27]
// t.postorder(rootNode)  // [5, 9, 7, 13, 10, 17, 22, 27, 25, 15]
t.search(rootNode, 13)

