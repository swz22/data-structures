var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0
  //{count:0,
  //0: value}

  // Implement the methods below
  someInstance.enqueue = function(value) {

    //add a string to back of queue
    if (someInstance.count === 0) {
      someInstance.storage[someInstance.count] = value;
      //console.log(storage[someInstance.count])
      someInstance.count ++;
    }

  };

  someInstance.dequeue = function() {
    someInstance.count --
  };

  someInstance.size = function() {
    return someInstance.count
  };

  return someInstance;
};
