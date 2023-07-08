var BinarySearchTree = function(value) {
  /*
  Implement a binarySearchTree class with the following properties:
 A .left property, a binary search tree (BST) where all values are lower than the current value.
 A .right property, a BST where all values are higher than the current value.
 A .insert() method, which accepts a value and places it in the tree in the correct position.
 A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
 A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  */
  var newBST = Object.create(binaryMethods);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

var binaryMethods = {};

//Time Complexity: O(logn)
binaryMethods.insert = function (val) {
  // base case
  if (val === this.value) {
    return;
  }
  // check if val is less than this.value
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    }
    this.left.insert(val);
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    }
    this.right.insert(val);
  }

}

//Time Complexity: O(logn)
binaryMethods.contains = function (val) {
  // base case
  if (this.value === val) {
    return true;
  } else if (val < this.value) {
    return (!!this.left && this.left.contains(val));
  } else if (val > this.value) {
    return (!!this.right && this.right.contains(val));
  } else {
    return false;
  }
}

//Time Complexity: O(1)
binaryMethods.depthFirstLog = function (cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }

}




/*
 * Complexity: What is the time complexity of the above functions?
 */

// Use case:

var closestValue = function (BST, target) {
  if (BST === null) {
    return null;
  }

  var closest = BST.value;
  if (target < BST.value && BST.left !== null) {
    closest = closestValue(BST.left, target);
  } else if (target > BST.value && BST.right !== null) {
    closest = closestValue(BST.right, target);
  }

  if (Math.abs(BST.value - target) < Math.abs(closest - target)) {
    return BST.value;
   } else if (Math.abs(BST.value - target) === Math.abs(closest - target)) {
    return Math.min(BST.value, closest);
   } else {
    return closest;
   }
}

//rebalance when max depth > 2* min depth