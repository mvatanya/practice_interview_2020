// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, next = null){
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }
  insertFirst = (data) => {
    let newNode = new Node(data, this.head)
    this.head = newNode
  }
  size = () => {
    let counter = 1;
    let node = this.head
    while (node.next){
      counter++
    }
    return counter
  }
  getFirst = () => {
    let node = this.head;
    let counter = 0;

    while(node) {
      counter++
      node =  node.next
    }
    return counter
  }

}

module.exports = { Node, LinkedList };
