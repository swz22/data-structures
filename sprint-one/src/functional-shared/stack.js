var Stack = function() {

  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  console.log(someInstance.size)

_.extend(someInstance, stackMethods);

    // someInstance.push = stackMethods.push;
    // someInstance.pop = stackMethods.pop;
    // someInstance.size = stackMethods.ize;
    return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  console.log(this.count)
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count --;
if (this.count < 0){
  this.count = 0;
}
return this.storage[this.count]

};

stackMethods.size = function() {

  return this.count;
};