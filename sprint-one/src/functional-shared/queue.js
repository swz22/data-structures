var Queue = function() {

 var someInstance = {}

 someInstance.storage = {};
 someInstance.count = 0

 _.extend(someInstance, queueMethods)
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

/*
//// start of copied from queue
var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0

  someInstance.enqueue = function(value) {
      someInstance.storage[someInstance.count] = value;
      someInstance.count ++;
  };


  someInstance.dequeue = function() {
  if (someInstance.count >= 1){
    for (var key in someInstance.storage){

    someInstance.storage[key - 1] = someInstance.storage[key]
    }
     delete someInstance.storage[someInstance.count]
       someInstance.count --
    return someInstance.storage['-1']
  } else {
      delete someInstance.storage['0']
      return someInstance.storage['0']
    }
 if (someInstance.count < 0){
      someInstance.count = 0
    }
  };

  someInstance.size = function() {
    return someInstance.count
  };

  return someInstance;
*/