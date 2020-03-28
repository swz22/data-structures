

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let newNode = {};
  newNode.links = [];
  newNode.value = node;
  this.nodes.push(newNode);
};
/*
{
  newNode = {
    links: [2, 5],
    value: 1
  }
    links: [1, 3, 5] //if you remove value 1, new links [3, 5]
    value: 2
}
aaah


nodes = []
*/

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; this.nodes.length > i; i++) {
      let el = this.nodes[i];
      if(el.value === node) {
          return true;
      }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for ( var i = 0; this.nodes.length > i; i++){
    let el = this.nodes[i];
    console.log(node)
    if (el.value === node){
      el.links = [];
      //el.value = null;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//DESCRIPTION
// Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.

//IMPLEMENT
// Implement a graph class, in pseudoclassical style, with the following properties:
//  It is an undirected graph. It does not have to be 'connected'.
//  An .addNode() method that takes a new node and adds it to the graph
//  A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
//  A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
//  An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
//  A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
//  A .removeEdge() method that removes the connection between two nodes
//  A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
//  What is the time complexity of the above functions?

/*

{
  links: [2, 5],
  value: 1
}

{
  links: [1, 3, 5],
  value: 2
}
{
  links: [2, 4],
  value: 3
}
{
  links: [3, 5, 6],
  value: 4
}
{
  links: [1, 2, 4],
  value: 5
}
{
  links: [4],
  value: 6
}

*/