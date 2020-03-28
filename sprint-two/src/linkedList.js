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
    //console.log(Node)
    //var tempHead = list.head
    var temp = list.head.value

    list.head = list.head.next

    return temp

    };

// list.head/tail has properties of .value and .next
//after remove head, set the following node to to head?
//node at index 0 is the head
//.removeHead() method, removes the first node from the list
// returns its value
  list.contains = function(target) {
//var result = false
//while list.head.next !== null
    // check is list.head.value === target
      //if yes , set result to true
      //break
    //else
      //list.head = list.head.next

//return result

  var result = false

  while (list.head.next !== null){
    //console.log(list.head.value)
    if (list.head.value === target){
      return true;
    } else {
      list.head = list.head.next
    }
  }

  if (list.head.next === null){
    return (list.head.value === target)
  }

  return result

  };
//     console.log(list.head.value)
//     var setNode = function(){
//       var current = list.head
//       var next = current.next
//     }
// checker = list.head.value

//     console.log(next.head.value)
//     //list.head.next.head.value
// if (list.head.next !== null){
//   if (list.head.value === target){
//     return true
//   } else{
//   list.head = list.head.next
//   setNode(list.head)}
//   return false



    //checker is constatly updated in a recursive function
    // return (checker === target)
    // return (list.head.value === target || next.head.value === target)
    //var currentNode = Node(target)

  //   for (var key in list) {
  //     if (list[key] === target) {
  //       return true
  //     } else {
  //     return false;
  //    }
  //  }
    // return (list.target  === target)

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