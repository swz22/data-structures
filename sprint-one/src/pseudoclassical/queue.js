var Queue = function() {
 this.storage = {};
 this.count = 0
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count >= 1) {
    for (var key in this.storage){
      this.storage[key - 1] = this.storage[key];
    }
     delete this.storage[this.count];
     this.count --;
    return this.storage['-1'];
  } else {
      delete this.storage['0'];
      return this.storage['0'];
    }
 if (this.count < 0) {
  this.count = 0;
    };
};

Queue.prototype.size = function() {
  return this.count;
};

var queueMethos = new Queue

