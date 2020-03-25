var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.count = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add a string to back of queue
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return storage.count
  };

  return someInstance;
};
