class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (this.front === this.back) {
      return undefined;
    }

    var dequeuedValue = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeuedValue;
  }

  size() {
    return this.back - this.front;
  }

}

var newQueue = new Queue();
