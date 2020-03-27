var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  if (this.count >= 1){
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
 if (this.count < 0){
  this.count = 0;
    };
};

queueMethods.size = function(){
  return this.count;
};

