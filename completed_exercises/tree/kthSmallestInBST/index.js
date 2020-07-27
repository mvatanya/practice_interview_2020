/*
A tree is considered a binary search tree (BST) if for each of 
its nodes the following is true:

The left subtree of a node contains only nodes with keys 
less than the node's key.

The right subtree of a node contains only nodes with keys 
greater than the node's key.

Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth smallest element in it.

Note that kth smallest element means kth element in increasing order. 
See examples for better understanding.


t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
}

and k = 4, the output should be
kthSmallestInBST(t, k) = 5

*/

/*===========================================================================*/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
  //complete the function
  let orderArray = inorder(t)
  return orderArray[k-1]
}
function inorder(node, arr=[]){
  if(node!==null){
    inorder(node.left, arr)
    arr.push(node.value)
    inorder(node.right, arr)
  }
  return arr
}

let t = {
  value: 3,
  left: {
    value: 1,
    left: null,
    right: null
  },
  right: {
    value: 5,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  }
};

//[1,3,4,5,6]
let k = 4;
console.log(kthSmallestInBST(t, k)); //5
