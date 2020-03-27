var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  // consider just using storage = {};
  //{count:0,
  //0: value}
  someInstance.count = 0
  // Implement the methods below
  someInstance.enqueue = function(value) {
    //add a string to back of queu
      someInstance.storage[someInstance.count] = value;
      someInstance.count ++;
  };

  someInstance.dequeue = function() {
  if (someInstance.count >= 1){
    for (var key in someInstance.storage){
      //console.log(key)
        //console.log(someInstance.storage[key -1 ])
    someInstance.storage[key - 1] = someInstance.storage[key]
      //delete someInstance.storage[key]
    }
     delete someInstance.storage[someInstance.count]
     //.log(someInstance.count)
       someInstance.count --
       //console.log(someInstance.count)
    return someInstance.storage['-1']
  } else {
      delete someInstance.storage['0']
        //someInstance.count --
      return someInstance.storage['0']
    }
    //someInstance.count --
//delete someInstance.storage[someInstance.count]


 if (someInstance.count < 0){
      someInstance.count = 0
    }

    // delete someInstance.storage['0']
    // someInstance.count --
    // if (someInstance.count < 0){
    //   someInstance.count = 0
    // }
    // someInstance.count++
    // var temp = someInstance.storage[someInstance.count]
    // someInstance.count --
    // someInstance.storage[someInstance.count] = value
    // someInstance.count ++
    // someInstance.storage[someInstance.count] = temp
    // someInstance.count --
    // someInstance.count--
    //return someInstance.storage[someInstance.count]
  };

  someInstance.size = function() {
    return someInstance.count
  };

  return someInstance;
};
//front of queue is always at 0
//back is the last count
//deque will delete 0, and decrement all the others
//instead of delete, just overwite?
//(move all their keys "down", (1 to 0, 2 to 1, 3 to 2))
//enque will just add to end.