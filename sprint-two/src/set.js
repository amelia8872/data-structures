var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

//Time Complexity: O(1)
setPrototype.add = function(item) {
  this._storage[item] = true;
};

//Time Complexity: O(n)
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

//Time Complexity: O(1)
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//can already handle strings, numbers, and object types