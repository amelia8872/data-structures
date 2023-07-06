
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  for (var i = 0; i < this._storage[index].length; i++) {
    var pair = this._storage[index][i];
    if (pair[0] === k) {
      pair[1] = v;
      return;

    }
  }
  this._storage[index].push([k,v]);


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      var pair = this._storage[index][i];
      if (pair[0] === k) {
        return pair[1];
      }
    }
  }

  return undefined;



};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      var pair = this._storage[index][i];
      if (pair[0] === k) {
        this._storage[index].splice(i,1);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


