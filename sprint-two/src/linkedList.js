var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //Time complexity: O(1)
  list.addToTail = function(value) {
    // Create new node
    var nTail = new Node(value);

    if (list.head === null) {
      list.head = nTail;
      list.tail = nTail;
    } else {
      // move the tail pointer to the new node
      list.tail.next = nTail;
      //let the new node to be the tail
      list.tail = nTail;

    }
  };

  //Time Complexity: O(1)
  list.removeHead = function() {
    // edge case: check if head exists, return null
    if (list.head === null) {
      return null;
    }
    // store the original head value
    var removedValue = list.head.value;
    // if exists, we move head pointer to the next
    list.head = list.head.next;
    // return the original head value
    return removedValue;

  };

  //Time Complexity: O(n)
  list.contains = function(target) {
    // edge cases: Check if it is an empty linked list
    if (list.head === null) {
      return false;
    }


    var currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};




var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//make linked list doubly linked list : null <- pointer node pointer <-> pointer node pointer -> null
// create same methods as linked list

var DoublyLinkedList = function() {
  var dlist = {};
  dlist.head = null;
  dlist.tail = null;
  dlist.previous = null;

  //Time complexity: O(1)
  dlist.addToTail = function(value) {
    // Create new node
    var nTail = new Node(value);

    if (dlist.head === null) {
      dlist.head = nTail;
      dlist.tail = nTail;
    } else {
      // move the tail next pointer to the new node
      dlist.tail.next = nTail;
      // assign the new node previous to be the original tail
      nTail.previous = dlist.tail;
      //let the new node to be the tail
      dlist.tail = nTail;
    }
  };

  //Time Complexity: O(1)
  dlist.removeHead = function() {
    // edge case: check if head exists, return null
    if (dlist.head === null) {
      return null;
    }
    // store the original head value
    var removedValue = dlist.head.value;
    // store the newHead
    var newHead = dlist.head.next;

    // we move orginal next pointer to null
    dlist.head.next = null;
    // let the newHead to be the new head
    dlist.head = newHead;
    // we move newHead previous pointer to null
    newHead.previous = null;

    // return the original head value
    return removedValue;

  };

  //Time Complexity: O(n)
  dlist.contains = function(target) {
    // edge cases: Check if it is an empty linked list
    if (dlist.head === null) {
      return false;
    }


    var currentNode = dlist.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  // Time Complexity: O(1)
  dlist.addToHead = function(value) {

    // Create new node
    var nHead = new Node(value);

    if (dlist.head === null) {
      dlist.head = nHead;
      dlist.tail = nHead;
    } else {
      dlist.head.previous = nHead;
      nHead.next = dlist.head;
      dlist.head = nHead;
    }
  }


  // Time Complexity: O(1)
  dlist.removeTail = function() {
    // edge case: check if tail exists, if does not exists, return null
    if (dlist.tail === null) {
      return null;
    }
    // store the original tail value
    var removedValue = dlist.tail.value;
    // store the newTail
    var newTail = dlist.tail.previous;

    // we move orginal next pointer to null
    newTail.next = null;
    // set the newTail to be new tail
    dlist.tail = newTail;
    // return the original head value
    return removedValue;

  }

  return dlist;
}
