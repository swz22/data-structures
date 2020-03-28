var Tree = function(value) {
  var newTree = {};
  newTree.children = [];
  newTree.value = value;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};


treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (this.children.length) {
    for (let i = 0; i < this.children.length; i++) {

      let childsIdentity = this.children[i];
        if (childsIdentity.contains(target)) {
          return true;
      }
    }

    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



//IMPLEMENT
// A tree class, in functional with shared methods style, with the following properties:
//  .children property, an array containing a number of subtrees
//  .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//  A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
//  What is the time complexity of the above functions?