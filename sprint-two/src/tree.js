var Tree = function(value) {

  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create an instance for child
  var newChild = new Tree(value);
  //push child onto newTree.children
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  //check for base case (current tree's value) -> if equal to target return true
   if (this.value === target) {
    return true;
   }
  //iterate through children. Use recursion to iterate through array
   for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
   }
   return false;
};

//try to iterate through when this.children is an object



/*
 * Complexity: What is the time complexity of the above functions?
 */
