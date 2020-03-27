var Stack = function() {
  var someInstance = {};

  someInstance.size = 0

_.extend(someInstance, stackMethods);

    // someInstance.push = push;
    // someInstance.pop = pop;
    // someInstance.size = size;
    // stackMethods(value, storage, container)

    return someInstance;
};

var stackMethods = {};
var storage = {};

stackMethods.push = function(value) {
  storage[this.size] = value;
  this.size++
};

stackMethods.pop = function() {
  var container = storage[this.size] - 1;
  delete storage[this.size] - 1;
  return container;
};

stackMethods.size = function() {
  if (this.size < 0){
    this.size = 0
  }
  return this.size
};