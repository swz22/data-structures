class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
  this.storage[this.count] = value;
  this.count++;
  };

  pop() {
  this.count --;
    if (this.count < 0) {
    this.count = 0;
    }
  return this.storage[this.count]
  };

  size() {
  return this.count;
  };

};
var stackmethods = new Stack();