var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;




  list.addToTail = function(value) {
    //console.log(value)
    var currentNode = Node(value)
    if (list.head === null){

      list.head = currentNode

      //list.head.next = 'test'
      list.tail = currentNode
      list.head.next = list.tail
      //list.head.next = list.tail
//console.log(Node(value))
    } else {

      //var temp = list.tail
      list.head.next  = list.tail
      list.tail.next = currentNode

      list.tail = currentNode
     }

  };

  list.removeHead = function() {
    console.log(Node)
    var tempHead = list.head
    var temp = tempHead.value
    //list.head = tempHead.value
    list.head = list.head.next
    //list.head = list.head

    // console.log(counter)
    // console.log(list.head.value)
    // console.log(list.head.next)
    //= list.head.next

    return temp

    };

// list.head/tail has properties of .value and .next
//after remove head, set the following node to to head?
//node at index 0 is the head
//.removeHead() method, removes the first node from the list
// returns its value
  list.contains = function(target) {
    var currentNode = Node(target)
    return (currentNode.value  === target  )
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 head points to first node,node[head] = head, node[1]
 tail points to last node
 node[head] = {head, 1}
 node[1] = {11234, 2}
 node[2] = {215651, 3/tail}
 node[tail] = {tail, next}
 head and tail are NOT linked
 if one node, both head and tail are the same
 two nodes, head always stay the same tail increments
 3rd node, tail icrements again.


 */


// list.removeHead = function() {
//   if (list.head.length === 0) {
//     return undefined;
//   }
//   var value = list.head.next;
//   list.length--;
//   return value;

// };