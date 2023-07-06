var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {
    storage: {},
    length: 0
  };

  extend (newStack, stackMethods);
  return newStack;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    if (this.length === 0) {
      return undefined;
    }
    this.length--;

    var poppedValue = this.storage[this.length];
    delete this.storage[this.length];
    return poppedValue;
  },

  size: function() {
    return this.length;
  }
};


