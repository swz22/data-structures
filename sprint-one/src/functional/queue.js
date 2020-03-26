var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  //{count:0,
  //0: value}
  someInstance.count = 0
  // Implement the methods below
  someInstance.enqueue = function(value) {

    //add a string to back of queue
    if (someInstance.count === 0) {
      someInstance.storage[someInstance.count] = value;
      //console.log(storage[someInstance.count])
      someInstance.count ++;
    } else if(someInstance.storage > 0){
      someInstance.count--
      var temp = someInstance.storage[someInstance.count]
      someInstance.count ++
      someInstance.storage[someInstance.count] = value
      someInstance.count --
      someInstance.storage[someInstance.count] = temp
      someInstance.count ++
      someInstance.count ++
    }


  };

  someInstance.dequeue = function() {
    delete someInstance.storage[someInstance.count]
    someInstance.count --
    if (someInstance.count < 0){
      someInstance.count = 0
    }



    return someInstance.storage[someInstance.count]
  };

  someInstance.size = function() {
    return someInstance.count
  };

  return someInstance;
};
//front of queue is always at 0
//back is the last count
//deque will delete 0, and decrement all the others
//enque will just add to end.