var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;

};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }

  this.length--;
  var poppedValue = this.storage[this.length];
  delete this.storage[this.length];
  return poppedValue;

};

Stack.prototype.size = function() {
  return this.length;

};


