var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

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

  list.contains = function(target) {
    // edge cases: Check if it is an empty linked list
    console.log(list.head.value)
    if (list.head === null) {
      return false;
    }

    // iterate through the linked list object, check if the target is equal to the node value
    //for (var element in list ) {
     // if (element.value === target) {
    //    return true;
    //  }
    //}

    //return false;



  // };




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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

