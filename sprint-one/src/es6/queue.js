class Queue {
  constructor() {
    this.storage ={};
    this.count = 0 ;
  };

  enqueue(value) {
  this.storage[this.count] = value;
  this.count++;
  };

  dequeue() {
    if (this.count >= 1) {
      for (var key in this.storage){
        this.storage[key - 1] = this.storage[key];
      };
    delete this.storage[this.count];
    this.count --;
    return this.storage['-1'];
    } else {
      delete this.storage['0'];
      return this.storage['0'];
      };
    if (this.count < 0) {
      this.count = 0;
    };
  };

  size() {
    return this.count;
  }
};