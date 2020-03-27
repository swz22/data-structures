var Stack = function () {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
 this.count --;
  if (this.count < 0){
   this.count = 0;
  };
 return this.storage[this.count]
};

Stack.prototype.size = function() {
 return this.count;
};

var stackmethods = new Stack();