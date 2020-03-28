var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
// An .add() method, takes any string and adds it to the set
if(this._storage.item === undefined){
  this._storage[item] = item;
}
console.log(this._storage)
console.log(this._storage[item])
};

setPrototype.contains = function(item) {
// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
return _.contains(this._storage, item)
};

setPrototype.remove = function(item) {
delete this._storage[item];
// A .remove() method, takes any string and removes it from the set, if present
// this.storage.slice(item)
};

/*
 * Complexity: What is the time complexity of the above functions?

value:
{seta = yes/no
setb = yes/no
}

 */
