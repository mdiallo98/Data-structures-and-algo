// let mylinklist = {
//   head: {
//     value: 10,
//     next: {
//       value: 34,
//       next: {
//         value: 12,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }
  ////////////////////////////////////////
  ///////////////////////////////////////
  Append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  ///////////////////////////////////
  Prepend(value) {
    let firstNode = {
      value: value,
      next: null,
    };
    firstNode.next = this.head;
    this.head = firstNode;
    this.length++;
    return this;
  }
  ////////////////////////////
  /////////////////////////////
  Printlist() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  //////////////////
  //////////////////
  Insert(index, value) {
    //check for age case to see if the index is greater than then the lenght of the array;
    if (index >= this.length) {
      return this.Append(value);
    }
    // if thats not the case then we need to make a new node to insert

    const newNode = {
      value: value,
      next: null,
    };

    // now we need to traverse to find the location where we will insert our new node
    const Leader = this.TraverseNode(index - 1);
    // its index -1 because we need to append the new value to the next of the previous value to keep the chain * - *
    const valueAtIndex = Leader.next;
    // we give valueAtIndex what ever was stored at the next: of leader meaning the second star * - *
    Leader.next = newNode;
    // now we make leader.next point at the new node we created
    newNode.next = valueAtIndex;
    // NOW newNode is pointing at what Leader was pointing at initial. we have official inserted this node 😎😎

    this.length++;
    // update the length of the link list
    this.Printlist();
    // we finish by printing the list.
  }

  TraverseNode(index) {
    let counter = 0;
    // currentNode we start at the head and change to the next value until we counter == the index that was entered
    let currentNode = this.head;
    // runn this until we find the index
    while (counter !== index) {
      // update current node to be the next whatever the value of the next node is
      currentNode = currentNode.next;
      // update counter so we can keep moving
      counter++;
    }
    return currentNode;
  }
  ////////////////////
  // In order to remove we will need to lose reference to that paticuraly node
  Remove(index) {
    // *-target-*
    // Find the unwanted node by using the traverse method and passing it the index
    const target = this.TraverseNode(index);
    // then find the node before the unwantwade node, we will use this to sever the connection to the linked list;

    const leader = this.TraverseNode(index - 1);
    // the variable Hold will contain wathever the star node is *-target-*
    const Hold = target.next;
    leader.next = Hold;
    target.next = null;
    this.length--;
    this.Printlist();
  }
}

let mylist = new LinkedList(10);
// mylist.Append(70)
console.log(mylist);
