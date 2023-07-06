class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;

  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    this.length--;
    var poppedValue = this.storage[this.length];
    delete this.storage[this.length];
    return poppedValue;

  }

  size() {
    return this.length;

  }

}

var newStack = new Stack();