var Stack = function() {
 var someInstance = Object.create(stackMethods);
 someInstance.storage = {};
 someInstance.count = 0;
 return someInstance;
};

 var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count --;
  if (this.count < 0) {
    this.count = 0
  }
  return this.storage[this.count]
};

stackMethods.size = function() {
  return this.count;
};

