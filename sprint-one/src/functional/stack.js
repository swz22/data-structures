var Stack = function() {
  var someInstance = {};
  var storage = {};
  storage.count = 0;

  someInstance.push = function(value) {
   storage[storage.count] = value;
   storage.count ++;

  };

  someInstance.pop = function() {
    storage.count --;
   if (storage.count < 0){
    storage.count = 0;
   };
    return storage[storage.count];
  };

  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};

