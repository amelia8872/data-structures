var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {
    storage: {},
    front: 0,
    back: 0
  };

  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
  },

  dequeue: function() {
    if (this.front === this.back) {
      return undefined;
    }

    var dequeueValue = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeueValue;
  },

  size: function() {
    return this.back - this.front;
  }
};


